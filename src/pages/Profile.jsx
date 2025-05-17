// // src/pages/Profile.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('Not authenticated');
//       return;
//     }

//     axios.get('http://localhost:8080/api/auth/me', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(({ data }) => setProfile(data))
//     .catch(err => {
//       console.error(err);
//       setError('Failed to load profile');
//     });
//   }, []);

//   if (error) return <div style={{ padding: '2rem', color: 'red' }}>{error}</div>;
//   if (!profile) return <div style={{ padding: '2rem' }}>Loading your profile…</div>;

//   return (
//     <div style={{
//       maxWidth: '400px',
//       margin: '4rem auto',
//       padding: '2rem',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       borderRadius: '8px'
//     }}>
//       <h2 style={{ marginBottom: '1rem', color: '#2e7d32' }}>Your Profile</h2>
//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      return;
    }

    axios.get('http://localhost:8080/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(({ data }) => setProfile(data))
    .catch(err => {
      console.error(err);
      setError('Failed to load profile');
    });
  }, []);

  if (error) return <div style={{ padding: '2rem', color: 'red' }}>{error}</div>;
  if (!profile) return <div style={{ padding: '2rem' }}>Loading your profile…</div>;

  return (
    <div style={{
      maxWidth: '400px',
      margin: '4rem auto',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#2e7d32' }}>Your Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
