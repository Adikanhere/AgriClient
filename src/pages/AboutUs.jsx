// import React from 'react';
// import farmImage from '../assets/farm.avif';
// import teamImage from '../assets/team.jpg';
// // Adjust the import path according to your folder structure

// const AboutUs = () => {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '2rem' }}>

//       {/* Empowering Farmers Section */}
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Empowering Farmers, Enriching Lives</h1>
//         <p style={{ fontSize: '1.2rem', color: '#555' }}>
//           We are dedicated to supporting farmers with smart tools, real-time data, and reliable market access.
//         </p>
//         <img
//           src={farmImage}
//           alt="Farmers Empowerment"
//           style={{ width: '80%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginTop: '1rem' }}
//         />
//       </section>

//       {/* Our Story Section */}
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>Our Story</h2>
//         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', gap: '2rem' }}>
//           <div style={{ flex: '1', textAlign: 'center' }}>
//             <img
//               src={teamImage}
//               alt="Our Team"
//               style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '10px' }}
//             />
//           </div>
//           <div style={{ flex: '1', textAlign: 'left' }}>
//             <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>This Section Our Story</h3>
//             <p style={{ fontSize: '1rem', color: '#555' }}>
//               Our story began with a vision to revolutionize farming by providing farmers with the necessary tools, data, and access to markets.
//               Over the years, we have helped thousands of farmers increase their productivity and enhance their livelihoods. 
//               Our mission is to bridge the gap between farmers and technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h2 style={{ fontSize: '2rem', color: '#333' }}>Our Mission</h2>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
//           {['Mission 1', 'Mission 2', 'Mission 3', 'Mission 4'].map((mission, index) => (
//             <div key={index} style={{ width: '250px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
//               <h3 style={{ color: '#333' }}>{mission}</h3>
//               <p style={{ color: '#555' }}>
//                 {mission === 'Mission 1' && 'To provide innovative tools and technology to enhance farming practices.'}
//                 {mission === 'Mission 2' && 'To ensure real-time data availability for farmers for better decision-making.'}
//                 {mission === 'Mission 3' && 'To connect farmers with reliable market access for fair trade.'}
//                 {mission === 'Mission 4' && 'To educate and train farmers on sustainable practices for long-term growth.'}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Our Impact Section */}
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h2 style={{ fontSize: '2rem', color: '#333' }}>Our Impact</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
//           {[
//             { title: '5,000+ Farmers', text: 'Farmers using our platform to enhance productivity.' },
//             { title: '1,000+ Tools', text: 'Smart tools designed for effective farming.' },
//             { title: '100+ Markets', text: 'Connecting farmers to reliable markets.' },
//             { title: '200+ Partners', text: 'Partnering with top organizations to empower farmers.' },
//           ].map((impact, index) => (
//             <div key={index} style={{ width: '200px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
//               <h3 style={{ color: '#333' }}>{impact.title}</h3>
//               <p style={{ color: '#555' }}>{impact.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* What Farmers Say Section */}
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h2 style={{ fontSize: '2rem', color: '#333' }}>What Farmers Say</h2>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
//           {[
//             "This platform has truly transformed my farming practices.",
//             "I am now able to make better decisions based on real-time data.",
//             "The tools provided have helped increase my yield significantly.",
//             "I have access to fair markets thanks to this platform.",
//             "The training provided has helped me adopt sustainable farming practices.",
//             "I feel empowered and more confident in my farming techniques.",
//           ].map((testimonial, index) => (
//             <div key={index} style={{ width: '200px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
//               <p style={{ fontSize: '0.95rem', color: '#555' }}>{testimonial}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// export default AboutUs;





import React from 'react';
import farmImage from '../assets/farm.avif';
import teamImage from '../assets/team.jpg';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '2rem' }}>

      {/* Empowering Farmers Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'darkgreen' }}>Empowering Farmers, Enriching Lives</h1>
        <p style={{ fontSize: '1rem', color: '#555', fontStyle: 'italic', marginTop: '0.5rem' }}>
          We are dedicated to supporting farmers with smart tools, real-time data, and reliable market access.
        </p>
        <img
          src={farmImage}
          alt="Farmers Empowerment"
          style={{ width: '80%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginTop: '1rem' }}
        />
      </section>

      {/* Our Story Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>Our Story</h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '800px', margin: '0 auto', gap: '1.5rem' }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <img
              src={teamImage}
              alt="Our Team"
              style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px' }}
            />
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>This Section Our Story</h3>
            <p style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1rem' }}>
              Our story began with a vision to revolutionize farming by providing farmers with the necessary tools, data, and access to markets.
              Over the years, we have helped thousands of farmers increase their productivity and enhance their livelihoods.
              Our mission is to bridge the gap between farmers and technology.
            </p>
            <p style={{ fontSize: '1rem', color: 'darkgreen', fontStyle: 'italic', marginTop: '0.5rem', fontWeight: 'bold' }}>
              "Bridging tradition and technology for a thriving future."
            </p>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Our Mission</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>

          {/* Mission Card 1 */}
          <div style={{ height: 'auto', width: '40%', minWidth: '250px', padding: '0.5rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              🌿 To provide innovative tools and technology.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div style={{ height: 'auto', width: '40%', minWidth: '250px', padding: '0.5rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
              ✅ To ensure real-time data availability for farmers.
            </p>
          </div>

          {/* Mission Card 3 (Starts on next line automatically due to flex-wrap) */}
          <div style={{ height: 'auto', width: '40%', minWidth: '250px', padding: '0.5rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              📈 To connect farmers with reliable markets.
            </p>
          </div>

          {/* Mission Card 4 */}
          <div style={{ height: 'auto', width: '40%', minWidth: '250px', padding: '0.5rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              🌱 To educate and train farmers.
            </p>
          </div>

        </div>
      </section>



      {/* Our Impact Section */}
      {/* <section style={{ textAlign: 'center', marginBottom: '3rem'}}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Our Impact</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          {[
            { title: '5,000+', text: 'Farmers using our platform' },
            { title: '20+', text: 'Crops Covered' },
            { title: '150+', text: 'Mandis Connected' },
            { title: '200+', text: 'Partnering with top organizations' },
          ].map((impact, index) => (
            <div key={index} style={{ width: '200px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#333' }}>{impact.title}</h3>
              <p style={{ color: '#555' }}>{impact.text}</p>
            </div>
          ))}
        </div>
      </section> */}


      {/* Our Impact Section */}
<section style={{ textAlign: 'center', marginBottom: '3rem' }}>
  <h2 style={{ fontSize: '2rem', color: '#333' }}>Our Impact</h2>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
    {[ 
      { title: '5,000+', text: 'Farmers using our platform' },
      { title: '20+', text: 'Crops Covered' },
      { title: '150+', text: 'Mandis Connected' },
      { title: '200+', text: 'Partnering with top organizations' },
    ].map((impact, index) => (
      <div key={index} style={{ width: '150px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <h3 style={{ color: '#006400' }}>{impact.title}</h3> {/* Dark green color */}
        <p style={{ color: '#555' }}>{impact.text}</p>
      </div>
    ))}
  </div>
</section>



      {/* What Farmers Say Section */}
      {/* <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>What Farmers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          {[
            "This platform has truly transformed my farming practices.",
            "I am now able to make better decisions based on real-time data.",
            "The tools provided have helped increase my yield significantly.",
            "I have access to fair markets thanks to this platform.",
            "The training provided has helped me adopt sustainable farming practices.",
            "I feel empowered and more confident in my farming techniques.",
          ].map((testimonial, index) => (
            <div key={index} style={{ width: '200px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{testimonial}</p>
            </div>
          ))}
        </div>
      </section> */}

{/* What Farmers Say Section */}
{/* <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
  <h2 style={{ fontSize: '2rem', color: '#333' }}>What Farmers Say</h2>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
    {[
      { feedback: "This platform has truly transformed my farming practices.", name: "Ankit Reddy" },
      { feedback: "I am now able to make better decisions based on real-time data.", name: "Rekha Singh" },
      { feedback: "The tools provided have helped increase my yield significantly.", name: "Suresh Kumar" },
      { feedback: "I have access to fair markets thanks to this platform.", name: "Lakshmi Devi" },
      { feedback: "The training provided has helped me adopt sustainable farming practices.", name: "Manoj Verma" },
      { feedback: "I feel empowered and more confident in my farming techniques.", name: "Ramesh Patil" },
    ].map((testimonial, index) => (
      <div key={index} style={{ width: '45%', maxWidth: '250px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <p style={{ fontSize: '0.95rem', color: '#555' }}>{testimonial.feedback}</p>
        <p style={{ fontSize: '0.9rem', color: '#333', marginTop: '1rem' }}><strong>- {testimonial.name}</strong></p>
      </div>
    ))}
  </div>
</section> */}


      {/* What Farmers Say Section */}
<section style={{ textAlign: 'center', marginBottom: '3rem' }}>
  <h2 style={{ fontSize: '2rem', color: '#333' }}>What Farmers Say</h2>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
    {[
      { feedback: "This platform has truly transformed my farming practices.", name: "Ankit Reddy" },
      { feedback: "I am now able to make better decisions based on real-time data.", name: "Rekha Singh" },
      { feedback: "The tools provided have helped increase my yield significantly.", name: "Suresh Kumar" },
      { feedback: "I have access to fair markets thanks to this platform.", name: "Lakshmi Devi" },
      { feedback: "The training provided has helped me adopt sustainable farming practices.", name: "Manoj Verma" },
      { feedback: "I feel empowered and more confident in my farming techniques.", name: "Ramesh Patil" },
    ].map((testimonial, index) => (
      <div key={index} style={{ width: '45%', maxWidth: '250px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <p style={{ fontSize: '0.95rem', color: '#555' }}>{testimonial.feedback}</p>
        <p style={{ fontSize: '0.9rem', color: '#2D6A4F', marginTop: '1rem', fontWeight: 'bold' }}>
          {testimonial.name}
        </p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default AboutUs;
