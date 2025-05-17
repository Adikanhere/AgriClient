// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import AppRoutes from './routes/AppRoutes';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <AppRoutes />
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './style.css'; // ✅ Make sure style.css is in the src folder

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

