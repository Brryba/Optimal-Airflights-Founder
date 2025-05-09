import {useEffect, useState} from 'react';
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";

import { useMapEvents } from 'react-leaflet';

function MapClickHandler({ onMapClick }) {
    useMapEvents({
        click: (e) => {
            onMapClick(e);
        },
    });
    return null;
}

function App() {
    const defaultPosition = [52.51, 13.38];
    const [points, setPoints] = useState([]);

    useEffect(() => {
        const initialPoints = [
            {position: [52.51, 13.38], name: "Berlin"},
            {position: [48.85, 2.35], name: "Paris"},
            {position: [51.51, -0.13], name: "London"},
        ];
        setPoints(initialPoints);
    }, []);

    const addPoint = (lat, lng) => {
        const name = prompt("Enter new city name:")
        const newPoint = {
            position: [lat, lng],
            name: name,
        };
        setPoints([...points, newPoint]);
    };

    const customIcon = new Icon({
        iconUrl: "/icons-airport.png",
        iconSize: [20, 20]
    });

    return (
        <div className="App">
            <div className="map">
                <MapContainer
                    center={defaultPosition}
                    zoom={6}
                    scrollWheelZoom={true}
                    onClick={(e) => {
                        addPoint(e.latlng.lat, e.latlng.lng);
                    }}
                >
                    <MapClickHandler onMapClick={(e) => addPoint(e.latlng.lat, e.latlng.lng)} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {points.map(point => (
                        <Marker key={point.id} position={point.position} icon={customIcon}>
                            <Popup>
                                <input
                                    type="text"
                                    value={point.name}
                                    onChange={(e) => {
                                        setPoints(points.map(p =>
                                            p.id === point.id ? {...p, name: e.target.value} : p
                                        ));
                                    }}
                                    placeholder="Enter city name"
                                    autoFocus
                                />
                                <button onClick={(e) => {
                                    setPoints(points.filter(p => p.name !== point.name));
                                    e.stopPropagation();
                                }}>
                                    Delete
                                </button>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}

export default App;