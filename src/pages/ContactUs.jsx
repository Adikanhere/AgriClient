// import React, { useState } from 'react';
// import aboutUsImage from '../assets/aboutus.jpg'; // Import the image

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phoneNumber: '',
//     villageArea: '',
//     state: '',
//     district: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission
//     console.log(formData);
//   };

//   return (
//     <section style={{ marginBottom: '3rem' }}>
//       {/* Image with Contact Us title */}
//       <div
//         style={{
//           position: 'relative',
//           textAlign: 'center',
//           height: '400px',
//           backgroundImage: `url(${aboutUsImage})`, // Using the imported image
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <h2
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: 'white',
//             fontSize: '3rem',
//             fontWeight: 'bold',
//           }}
//         >
//           Contact Us
//         </h2>
//       </div>

//       {/* Right-side section */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
//         <div style={{ flex: '1', marginRight: '2rem' }}>
//           <h3>Let's start a conversation</h3>
//           <p style={{ fontSize: '1.1rem', color: '#555' }}>
//             We're here to assist you. If you have any questions or need support, feel free to reach out to us. Fill in the form on the right to get in touch with us, and we will respond as soon as possible.
//           </p>
//         </div>

//         {/* Form Section */}
//         <div style={{ flex: '1', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
//           <h3>Please Note: All fields are required</h3>

//           <form onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Village/ Area Name */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="villageArea" style={{ display: 'block', marginBottom: '0.5rem' }}>Village/Area Name</label>
//               <input
//                 type="text"
//                 id="villageArea"
//                 name="villageArea"
//                 value={formData.villageArea}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* State */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="state" style={{ display: 'block', marginBottom: '0.5rem' }}>State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* District */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="district" style={{ display: 'block', marginBottom: '0.5rem' }}>District</label>
//               <input
//                 type="text"
//                 id="district"
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Your Question or Message */}
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Question or Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                   height: '150px',
//                 }}
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '1rem',
//                 backgroundColor: '#2D6A4F',
//                 color: '#fff',
//                 fontSize: '1rem',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;







// import React, { useState } from 'react';
// import aboutUsImage from '../assets/aboutus.jpg'; // Correct relative path to assets folder

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phoneNumber: '',
//     villageArea: '',
//     state: '',
//     district: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <section style={{ marginBottom: '3rem' }}>
//       {/* Image with Contact Us title */}
//       <div
//         style={{
//           position: 'relative',
//           textAlign: 'center',
//           height: '300px', // Reduced height for image
//           maxWidth: '100%',
//           backgroundImage: `url(${aboutUsImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <h2
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: 'white',
//             fontSize: '2.5rem', // Reduced font size
//             fontWeight: 'bold',
//           }}
//         >
//           Contact Us
//         </h2>
//       </div>

//       {/* Right-side section */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' ,marginLeft: '4rem'}}>
//         <div style={{ flex: '1', marginRight: '2rem', color:'red'}}>
//           <h3>Let's start a conversation</h3>
//           <p style={{ fontSize: '1rem', color: '#555' }}>
//             We're here to assist you. If you have any questions or need support, feel free to reach out to us. Fill in the form on the right to get in touch with us, and we will respond as soon as possible.
//           </p>
//         </div>

//         {/* Form Section */}
//         <div style={{flex: '1', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', maxWidth: '600px', marginLeft: 'auto',marginRight: '2rem' }}>
//           <h3>Please Note: All fields are required</h3>

//           <form onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Village/ Area Name */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="villageArea" style={{ display: 'block', marginBottom: '0.5rem' }}>Village/Area Name</label>
//               <input
//                 type="text"
//                 id="villageArea"
//                 name="villageArea"
//                 value={formData.villageArea}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* State */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="state" style={{ display: 'block', marginBottom: '0.5rem' }}>State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* District */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="district" style={{ display: 'block', marginBottom: '0.5rem' }}>District</label>
//               <input
//                 type="text"
//                 id="district"
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                 }}
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Question or Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   fontSize: '1rem',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc',
//                   height: '120px',
//                 }}
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '1rem',
//                 backgroundColor: '#2D6A4F',
//                 color: '#fff',
//                 fontSize: '1rem',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;




import React, { useState } from 'react';
import aboutUsImage from '../assets/aboutus.jpg'; // Correct relative path to assets folder

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    villageArea: '',
    state: '',
    district: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section style={{ marginBottom: '3rem' }}>
      {/* Image with Contact Us title */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          height: '300px',
          maxWidth: '100%',
          backgroundImage: `url(${aboutUsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
          }}
        >
          Contact Us
        </h2>
      </div>

      {/* Right-side section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', marginLeft: '4rem' }}>
        <div style={{ flex: '1', marginRight: '2rem' }}>
          <h3 style={{ color: '#333' }}>Let's start a conversation</h3>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
            We're here to assist you. If you have any questions or need support, feel free to reach out to us. 
            Fill in the form on the right to get in touch, and we will respond as soon as possible.
          </p>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
            Whether you have a simple inquiry or need detailed information about our services, we are ready to help. 
            Your feedback is valuable to us, and we look forward to hearing from you!
          </p>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
            Our team strives to provide the best customer service experience. No matter the concern, we believe in giving you personalized attention and quick solutions.
          </p>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
            If you're reaching out regarding a specific project, please provide as many details as possible. This will help us assist you more effectively and promptly.
          </p>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
            We appreciate you taking the time to connect with us. Your trust is important, and we’re committed to maintaining it through transparent communication.
          </p>
        </div>

        {/* Form Section */}
        <div style={{
          flex: '1',
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: '2rem'
        }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>Please Note: All fields are required</h3>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                required
              />
            </div>

            {/* Phone Number */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                required
              />
            </div>

            {/* Village/ Area Name */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="villageArea" style={{ display: 'block', marginBottom: '0.5rem' }}>Village/Area Name</label>
              <input
                type="text"
                id="villageArea"
                name="villageArea"
                value={formData.villageArea}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                required
              />
            </div>

            {/* State */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="state" style={{ display: 'block', marginBottom: '0.5rem' }}>State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                required
              />
            </div>

            {/* District */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="district" style={{ display: 'block', marginBottom: '0.5rem' }}>District</label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                required
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Question or Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  height: '120px',
                }}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#2D6A4F',
                color: '#fff',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
