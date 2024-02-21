import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={1} style={{ height: '60vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-1.2921, 36.8219]}>
        <Popup>
          <b>Majiwe Vista Academy, Kenya</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
}