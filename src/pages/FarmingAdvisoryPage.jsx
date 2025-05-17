// import React, { useState } from 'react';

// const FarmingAdvisoryPage = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     { text: 'Welcome to the Farming Advisory! Ask any farming-related questions.', sender: 'bot' }
//   ]);
  
//   const handleSendMessage = () => {
//     if (message.trim() === '') return;
    
//     setMessages([...messages, { text: message, sender: 'user' }]);
//     setMessage('');

//     // Simulate AI response
//     setTimeout(() => {
//       const aiResponse = getAIResponse(message);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: aiResponse, sender: 'bot' }
//       ]);
//     }, 1000); // Simulate a short delay for the AI to respond
//   };

//   const getAIResponse = (userMessage) => {
//     // This is just a basic example. You can integrate a real AI service here.
//     if (userMessage.includes('weather')) {
//       return "It's important to check the weather forecast regularly to plan your farm activities.";
//     } else if (userMessage.includes('irrigation')) {
//       return "Ensure your irrigation system is optimized for water usage, especially during dry seasons.";
//     } else {
//       return "I'm sorry, I don't have the information on that topic. Please ask about weather or irrigation.";
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
//       <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Farming Advisory Chat</h2>
//       <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', backgroundColor: '#fff', borderRadius: '10px' }}>
//         <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
//           {messages.map((msg, index) => (
//             <div key={index} style={{ marginBottom: '1rem' }}>
//               <p style={{ color: msg.sender === 'user' ? '#2e7d32' : '#555', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
//                 {msg.text}
//               </p>
//             </div>
//           ))}
//         </div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Ask a farming question..."
//           style={{
//             width: '100%',
//             padding: '0.8rem',
//             fontSize: '1rem',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//             marginBottom: '1rem'
//           }}
//         />
//         <button
//           onClick={handleSendMessage}
//           style={{
//             width: '100%',
//             padding: '0.8rem',
//             backgroundColor: '#2e7d32',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             fontSize: '1rem',
//             cursor: 'pointer'
//           }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FarmingAdvisoryPage;




import React, { useState } from 'react';

// Simulating a fetch call to get weather data (use actual API in real-world scenarios)
const fetchWeather = async (city) => {
  // Use a real weather API, such as OpenWeatherMap or WeatherStack
  // This is a mock response simulating the weather data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 30,
        condition: 'Sunny',
        humidity: 75,
        windSpeed: 5,
      });
    }, 1000);
  });
};

const FarmingAdvisoryPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Welcome to the Farming Advisory! Ask any farming-related questions.', sender: 'bot' }
  ]);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');

    // Simulate AI response
    const aiResponse = await getAIResponse(message);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: aiResponse, sender: 'bot' }
    ]);
  };

  const getAIResponse = async (userMessage) => {
  const msg = userMessage.toLowerCase();

  if (msg.includes('weather')) {
    const weatherData = await fetchWeather('Pune');
    return `Today's weather in Pune: ${weatherData.condition} with ${weatherData.temperature}°C. Humidity: ${weatherData.humidity}%. Wind: ${weatherData.windSpeed} m/s.`;
  } else if (msg.includes('irrigation')) {
    return "Ensure your irrigation system is optimized for water usage, especially during dry seasons.";
  } else if (msg.includes('how to manage a farm')) {
    return "Managing a farm involves crop rotation, proper irrigation, pest management, and keeping track of weather patterns. Regularly assess soil health and nutrients.";
  } else if (msg.includes('fertilizer')) {
    return "Use nitrogen-rich fertilizers for leafy crops and phosphorus-potassium blends for fruits and roots. Always test soil before applying fertilizers.";
  } else if (msg.includes('pests') || msg.includes('pest control')) {
    return "Use integrated pest management (IPM) methods including neem oil, traps, and natural predators. Avoid overuse of chemicals.";
  } else if (msg.includes('soil health')) {
    return "Soil health can be improved by using compost, cover crops, crop rotation, and avoiding over-tillage.";
  } else if (msg.includes('organic farming')) {
    return "Organic farming avoids synthetic fertilizers and pesticides, relying instead on compost, green manure, and biological pest control.";
  } else if (msg.includes('crop rotation')) {
    return "Crop rotation helps improve soil fertility and prevents pest buildup. Rotate between legumes, cereals, and root crops.";
  } else if (msg.includes('greenhouse')) {
    return "Greenhouses protect crops from extreme weather and pests. They are ideal for growing high-value crops in a controlled environment.";
  } else if (msg.includes('drip irrigation')) {
    return "Drip irrigation is a water-efficient system that delivers water directly to the plant roots, minimizing evaporation.";
  } else if (msg.includes('vertical farming')) {
    return "Vertical farming involves growing crops in stacked layers, often indoors, using hydroponics or aeroponics. It saves space and water.";
  } else if (msg.includes('hydroponics')) {
    return "Hydroponics is a soil-less farming method using nutrient-rich water solutions. Ideal for urban farming with minimal space.";
  } else {
    return "I'm sorry, I don't have the information on that topic. Please ask about weather, irrigation, pest control, greenhouse farming, or soil health.";
  }
};


  return (
    <div style={{ padding: '2rem', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Farming Advisory Chat</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', backgroundColor: '#fff', borderRadius: '10px' }}>
        <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <p style={{ color: msg.sender === 'user' ? '#2e7d32' : '#555', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a farming question..."
          style={{
            width: '100%',
            padding: '0.8rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '1rem'
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            width: '100%',
            padding: '0.8rem',
            backgroundColor: '#2e7d32',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default FarmingAdvisoryPage;
