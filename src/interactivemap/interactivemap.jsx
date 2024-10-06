import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Rectangle,
} from "react-leaflet";
import "./map.css";

const rectangle = [
  [36.699002, -4.439182],
  [36.700002, -4.509182],
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
      <Rectangle bounds={rectangle} />
    </MapContainer>
  );
}

export default Interactivemap;
