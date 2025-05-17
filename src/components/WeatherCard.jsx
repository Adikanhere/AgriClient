// import React, { useEffect, useState } from 'react';
// import { fetchWeatherByCity } from '../services/api';

// const WeatherCard = ({ city = 'Pune' }) => {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const getWeather = async () => {
//       try {
//         const data = await fetchWeatherByCity(city);
//         setWeather(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     getWeather();
//   }, [city]);

//   return (
//     <div style={{
//       backgroundColor: '#e3f2fd',
//       padding: '1.5rem',
//       borderRadius: '10px',
//       width: '320px',
//       textAlign: 'center',
//       margin: '1rem auto',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
//     }}>
//       <h2>Weather in {city}</h2>
//       {weather ? (
//         <>
//           <p>🌡️ Temp: {weather.main.temp}°C</p>
//           <p>☁️ Condition: {weather.weather[0].description}</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//           <p>🌬️ Wind: {weather.wind.speed} m/s</p>
//         </>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// };

// export default WeatherCard;




// import React, { useEffect, useState } from 'react';
// import { fetchWeatherByCity } from '../services/api';

// const WeatherCard = ({ city = 'Pune' }) => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true); // For loading state
//   const [error, setError] = useState(null); // For error handling

//   useEffect(() => {
//     const getWeather = async () => {
//       setLoading(true); // Set loading to true when fetching starts
//       setError(null); // Clear previous error
//       try {
//         const data = await fetchWeatherByCity(city);
//         if (data) {
//           setWeather(data);
//         } else {
//           setError('Failed to fetch weather data.');
//         }
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//         setError('Error fetching weather data.');
//       } finally {
//         setLoading(false); // Set loading to false when fetch is done
//       }
//     };

//     getWeather();
//   }, [city]);

//   return (
//     <div style={{
//       backgroundColor: '#e3f2fd',
//       padding: '1.5rem',
//       borderRadius: '10px',
//       width: '320px',
//       textAlign: 'center',
//       margin: '1rem auto',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
//     }}>
//       <h2>Weather in {city}</h2>
//       {loading && <p>Loading weather data...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weather && !loading && !error && (
//         <>
//           <p>🌡️ Temp: {weather.main.temp}°C</p>
//           <p>☁️ Condition: {weather.weather[0].description}</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//           <p>🌬️ Wind: {weather.wind.speed} m/s</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default WeatherCard;






// 29-04

// import React, { useState } from 'react';
// import { fetchWeatherByCity } from '../services/api';

// const WeatherCard = () => {
//   const [city, setCity] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setWeather(null);

//     try {
//       const data = await fetchWeatherByCity(city, latitude, longitude);
//       if (data) {
//         setWeather(data);
//       } else {
//         setError('Failed to fetch weather data.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong while fetching weather data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: '#f0f4c3',
//       padding: '2rem',
//       borderRadius: '10px',
//       width: '350px',
//       margin: '2rem auto',
//       boxShadow: '0 0 15px rgba(0,0,0,0.2)'
//     }}>
//       <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Check Weather</h2>

//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <input
//           type="text"
//           placeholder="Enter City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Enter Latitude"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Longitude"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//         />
//         <button type="submit" style={{ backgroundColor: '#2e7d32', color: 'white', padding: '0.6rem', border: 'none', borderRadius: '5px' }}>
//           Submit
//         </button>
//       </form>

//       {loading && <p style={{ textAlign: 'center' }}>Loading weather data...</p>}
//       {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

//       {weather && !loading && !error && (
//         <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
//           <p><strong>🌆 City:</strong> {weather.name}</p>
//           <p><strong>🌡️ Temperature:</strong> {weather.main.temp}°C</p>
//           <p><strong>☁️ Condition:</strong> {weather.weather[0].description}</p>
//           <p><strong>💧 Humidity:</strong> {weather.main.humidity}%</p>
//           <p><strong>🌬️ Wind:</strong> {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherCard;



import React, { useState } from 'react';
import { fetchWeatherByCity } from '../services/api';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEmoji = (desc) => {
    desc = desc.toLowerCase();
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('clear')) return '☀️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    return '🌤️';
  };

  const getComment = (temp) => {
    if (temp < 10) return 'Brrr 🥶 it’s chilly today!';
    if (temp < 20) return 'Cool and comfy 🍃';
    if (temp < 30) return 'Warm and sunny ☀️';
    return 'It’s HOT 🔥 Stay hydrated!';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const data = await fetchWeatherByCity(city, latitude, longitude);
      if (data) {
        setWeather(data);
      } else {
        setError('Failed to fetch weather data.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong while fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#f1f8e9',
      padding: '2rem',
      borderRadius: '12px',
      width: '400px',
      margin: '2rem auto',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#33691e' }}>🌾 Weather Forecast</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Latitude (optional)"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude (optional)"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit" style={{
          backgroundColor: '#558b2f',
          color: 'white',
          padding: '0.7rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          🚀 Get Weather
        </button>
      </form>

      {loading && (
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ⏳ Fetching weather data...
        </p>
      )}

      {error && (
        <p style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{error}</p>
      )}

      {weather && !loading && !error && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in'
        }}>
          <h3>{getEmoji(weather.weather[0].description)} {weather.name}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> 💧 {weather.main.humidity}%</p>
          <p><strong>Wind:</strong> 🌬️ {weather.wind.speed} m/s</p>
          <p style={{ fontStyle: 'italic', color: '#388e3c', marginTop: '0.5rem' }}>
            {getComment(weather.main.temp)}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;






// Animations


// import React, { useState } from 'react';
// import { fetchWeatherByCity } from '../services/api';
// import Lottie from 'lottie-react';

// // Sample Lottie JSON imports (download from lottiefiles.com)
// import sunnyAnim from '../assets/lottie/sunny.json';
// import rainyAnim from '../assets/lottie/rainy.json';
// import cloudyAnim from '../assets/lottie/cloudy.json';
// import snowAnim from '../assets/lottie/snow.json';

// const WeatherCard = () => {
//   const [city, setCity] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getWeatherAnim = (desc) => {
//     desc = desc.toLowerCase();
//     if (desc.includes('clear')) return sunnyAnim;
//     if (desc.includes('rain')) return rainyAnim;
//     if (desc.includes('cloud')) return cloudyAnim;
//     if (desc.includes('snow')) return snowAnim;
//     return cloudyAnim;
//   };

//   const getTip = (temp) => {
//     if (temp < 10) return 'Wear a jacket! 🧥';
//     if (temp < 20) return 'Mild day. Enjoy a walk! 🚶';
//     if (temp < 30) return 'Perfect farming day! 🌱';
//     return 'Stay cool! Hydrate well. 💧';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setWeather(null);

//     try {
//       const data = await fetchWeatherByCity(city, latitude, longitude);
//       if (data) setWeather(data);
//       else setError('Failed to fetch weather.');
//     } catch (err) {
//       setError('Error fetching data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '450px',
//       margin: '2rem auto',
//       padding: '2rem',
//       borderRadius: '15px',
//       background: 'linear-gradient(135deg, #dcedc8, #c8e6c9)',
//       boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
//       fontFamily: 'Segoe UI, sans-serif',
//       textAlign: 'center'
//     }}>
//       <h2 style={{ color: '#33691e' }}>🌤️ Weather Forecast</h2>

//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
//         <input
//           type="text"
//           placeholder="City (e.g. Pune)"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Latitude (optional)"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Longitude (optional)"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//         />
//         <button type="submit" style={{
//           background: '#558b2f',
//           color: '#fff',
//           padding: '0.7rem',
//           border: 'none',
//           borderRadius: '6px',
//           fontWeight: 'bold',
//           cursor: 'pointer'
//         }}>
//           ☁️ Show Weather
//         </button>
//       </form>

//       {loading && <p style={{ marginTop: '1rem' }}>🔄 Loading...</p>}
//       {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

//       {weather && !loading && (
//         <div style={{
//           marginTop: '2rem',
//           padding: '1rem',
//           background: '#fff',
//           borderRadius: '12px',
//           animation: 'fadeIn 1s ease-in-out'
//         }}>
//           <Lottie
//             animationData={getWeatherAnim(weather.weather[0].description)}
//             loop={true}
//             style={{ height: '160px', marginBottom: '-20px' }}
//           />
//           <h3>{weather.name}</h3>
//           <p><strong>Temp:</strong> {weather.main.temp}°C</p>
//           <p><strong>Condition:</strong> {weather.weather[0].description}</p>
//           <p><strong>Humidity:</strong> 💧 {weather.main.humidity}%</p>
//           <p><strong>Wind:</strong> 🌬️ {weather.wind.speed} m/s</p>
//           <p style={{ marginTop: '0.8rem', color: '#2e7d32', fontStyle: 'italic' }}>
//             {getTip(weather.main.temp)}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherCard;
