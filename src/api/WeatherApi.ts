import axios from 'axios';

export const getWeatherData = async (latitude: string, longitude: string) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};
