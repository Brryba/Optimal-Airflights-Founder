// src/api.js
const API_URL = 'http://localhost:8080';

export const fetchCities = async () => {
    try {
        // Real API call (commented out for now)
        // const response = await fetch(API_URL);
        // if (!response.ok) throw new Error('Failed to fetch cities');
        // return await response.json();

        // Mock data
        return [
            { id: 1, position: [52.52, 13.405], name: 'Berlin' },
            { id: 2, position: [48.8566, 2.3522], name: 'Paris' },
            { id: 3, position: [51.5074, -0.1278], name: 'London' },
            { id: 4, position: [40.7128, -74.0060], name: 'New York' },
        ];
    } catch (err) {
        console.error('Error fetching cities:', err);
        throw err;
    }
};

export const addCity = async (cityData) => {
    try {
        // Real API call (commented out for now)
        // const response = await fetch(API_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(cityData)
        // });
        // if (!response.ok) throw new Error('Failed to add city');
        // return await response.json();

        // Mock response
        return { ...cityData, id: Math.floor(Math.random() * 1000) };
    } catch (err) {
        console.error('Error adding city:', err);
        throw err;
    }
};

export const updateCity = async (oldCityName, newName) => {
    try {
        // Real API call (commented out for now)
        // const response = await fetch(`${API_URL}/${oldCityName}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name: newName })
        // });
        // if (!response.ok) throw new Error('Failed to update city');
        // return await response.json();

        // Mock response
        return { name: newName };
    } catch (err) {
        console.error('Error updating city:', err);
        throw err;
    }
};

export const deleteCity = async (cityName) => {
    try {
        // Real API call (commented out for now)
        // const response = await fetch(`${API_URL}/${cityName}`, {
        //     method: 'DELETE'
        // });
        // if (!response.ok) throw new Error('Failed to delete city');

        // Mock response
        return { success: true };
    } catch (err) {
        console.error('Error deleting city:', err);
        throw err;
    }
};