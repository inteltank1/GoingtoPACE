import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Rectangle,
  ImageOverlay,
} from "react-leaflet";
import "./map.css";
import pacesat from "../../apistuff/apiimages/latest.png";
import earthimg from "../assets/Earth.jpg";

const rectangledimensions = [
  [80, -180],
  [-80, 180],
];

function Interactivemap() {
  return (
    <MapContainer
      center={[36.699002, -4.439182]}
      zoom={40}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[36.699002, -4.439182]}>
        <Popup>POLO</Popup>
      </Marker>
      <ImageOverlay
        url={earthimg}
        bounds={rectangledimensions}
        opacity={1} // Optional: set the opacity of the image
      />
      <ImageOverlay
        url={pacesat}
        bounds={rectangledimensions}
        opacity={1} // Optional: set the opacity of the image
      />
    </MapContainer>
  );
}

export default Interactivemap;
