from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import urllib.request
import cv2
import numpy as np

hostName = "localhost"
serverPort = 8080

# https://oceancolor.gsfc.nasa.gov/showimages/PACE_OCI/IMAGES/CHL/L3/2024/1002/PACE_OCI.20241002.L3m.DAY.CHL.V2_0.chlor_a.0p1deg.NRT.nc.png

urllib.request.urlretrieve("https://oceancolor.gsfc.nasa.gov/showimages/PACE_OCI/IMAGES/CHL/L3/2024/0921/PACE_OCI.20240921_20240928.L3m.8D.CHL.V2_0.chlor_a.0p1deg.NRT.nc.png", "./apiimages/latest.jpg")

world = cv2.imread('./apiimages/latest.jpg')

plankton = cv2.imread('../src/assets/Plankton.jpg', cv2.IMREAD_UNCHANGED)

if world is None or plankton is None:
    print("Error: Could not load one of the images.")
    exit()

lower_red = np.array([0, 0, 120], dtype=np.uint8)  # Lower bound for red in BGR
upper_red = np.array([80, 80, 255], dtype=np.uint8)  # Upper bound for red in BGR

red_mask = cv2.inRange(world, lower_red, upper_red)

contours, _ = cv2.findContours(red_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

plankton_height, plankton_width, _ = plankton.shape

cv2.resize(world, (3600*3, 1800*3))

for contour in contours:
    # Get the bounding box for each red area
    x, y, w, h = cv2.boundingRect(contour)

    # Resize the plankton image to match the size of the detected red area
    resized_plankton = cv2.resize(plankton, (w, h))

    # Overlay the plankton image on the red areas, accounting for transparency (alpha channel)
    for i in range(resized_plankton.shape[0]):
        for j in range(resized_plankton.shape[1]):
            # Only overlay where plankton is not transparent (alpha > 0)
            if resized_plankton[i, j, 3] > 0:  # Check alpha channel (4th element)
                world[y + i, x + j] = resized_plankton[i, j, :3]  # Copy BGR values

rgba_image = cv2.cvtColor(world, cv2.COLOR_BGR2BGRA)

black_pixels = np.all(world == [0, 0, 0], axis=-1)
rgba_image[black_pixels, 3] = 0  # Set the alpha channel to 0 (transparent)

output_path = './apiimages/latest.png'
cv2.imwrite(output_path, rgba_image)


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
