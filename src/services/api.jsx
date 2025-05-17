// src/services/api.jsx
const API_KEY = 'e47f817c9c9d758d68d578f520b604ea';

export const fetchWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather API error:', error.message);
    return null;
  }
};
