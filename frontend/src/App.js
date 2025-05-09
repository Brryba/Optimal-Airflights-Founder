// src/App.js
import {useEffect, useState} from 'react';
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";
import { useMapEvents } from 'react-leaflet';
import { fetchCities, addCity, updateCity, deleteCity } from './Api';
import FlightsAdder from "./FlightsAdder.js";
import SearchSelector from "./SearchSelector";

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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCities = async () => {
            try {
                setLoading(true);
                const data = await fetchCities();
                setPoints(data);
            } catch (err) {
                console.error('Error fetching cities:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCities();
    }, []);

    const addPoint = async (lat, lng) => {
        const name = prompt("Enter new city name:");
        if (!name) return;

        const newPoint = {
            position: [lat, lng],
            name: name,
        };

        try {
            const savedCity = await addCity(newPoint);
            setPoints(prev => [...prev, savedCity]);
        } catch (err) {
            console.error('Error adding city:', err);
            setError(err.message);
        }
    };

    const updateCityName = async (oldCityName, newName) => {
        try {
            await updateCity(oldCityName, newName);
            setPoints(points.map(p =>
                p.name === oldCityName ? {...p, name: newName} : p
            ));
        } catch (err) {
            console.error('Error updating city:', err);
            setError(err.message);
        }
    };

    const deleteCityHandler = async (cityName) => {
        try {
            await deleteCity(cityName);
            setPoints(points.filter(p => p.name !== cityName));
        } catch (err) {
            console.error('Error deleting city:', err);
            setError(err.message);
        }
    };

    const customIcon = new Icon({
        iconUrl: "/icons-airport.png",
        iconSize: [20, 20]
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-xl">Loading cities...</div>
            </div>
        );
    }

    if (error) {
        alert("Error: " + error);
        setError(null);
    }

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
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={point.name}
                                        onChange={(e) => {
                                            updateCityName(point.name, e.target.value);
                                        }}
                                        placeholder="Enter city name"
                                        className="border rounded px-2 py-1"
                                        autoFocus
                                    />
                                    <button
                                        onClick={(e) => {
                                            deleteCityHandler(point.name);
                                            e.stopPropagation();
                                        }}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <div style={{display: 'flex'}}>
                <FlightsAdder/>
                <SearchSelector/>
            </div>
        </div>
    );
}

export default App;