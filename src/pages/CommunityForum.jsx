// import React, { useState } from 'react';

// const CommunityForum = () => {
//   const [posts, setPosts] = useState([
//     { id: 1, name: "Ravi", message: "How do you control pests in tomatoes?", time: "2 hours ago" },
//     { id: 2, name: "Priya", message: "Anyone tried vertical farming?", time: "1 day ago" }
//   ]);
//   const [newPost, setNewPost] = useState("");

//   const handlePost = () => {
//     if (newPost.trim() === "") return;
//     const newEntry = {
//       id: posts.length + 1,
//       name: "You",
//       message: newPost,
//       time: "Just now"
//     };
//     setPosts([newEntry, ...posts]);
//     setNewPost("");
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial' }}>
//       <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>🌾 Community Forum</h2>
//       <p style={{ textAlign: 'center', color: '#555' }}>Ask questions, share knowledge, and collaborate with fellow farmers!</p>

//       <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem' }}>
//         <input
//           type="text"
//           placeholder="Share something..."
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//           style={{
//             flex: 1,
//             padding: '0.8rem',
//             borderRadius: '8px',
//             border: '1px solid #ccc',
//             fontSize: '1rem'
//           }}
//         />
//         <button onClick={handlePost} style={{
//           padding: '0.8rem 1.5rem',
//           backgroundColor: '#2e7d32',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '8px',
//           cursor: 'pointer'
//         }}>
//           Post
//         </button>
//       </div>

//       <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
//         {posts.map(post => (
//           <div key={post.id} style={{
//             marginBottom: '1rem',
//             padding: '1rem',
//             backgroundColor: '#f1f8e9',
//             borderRadius: '10px'
//           }}>
//             <strong>{post.name}</strong> <span style={{ color: '#888', fontSize: '0.8rem' }}>— {post.time}</span>
//             <p style={{ margin: '0.5rem 0 0 0' }}>{post.message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommunityForum;




import React, { useState } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, name: "Ravi", message: "How do you control pests in tomatoes?", time: "2 hours ago" },
    { id: 2, name: "Priya", message: "Anyone tried vertical farming?", time: "1 day ago" }
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      name: "You",
      message: newPost,
      time: "Just now"
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>🌾 Community Forum</h2>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Ask questions, share knowledge, and collaborate with fellow farmers!
      </p>

      {/* Post Input Area */}
      <div style={{
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <textarea
          rows={4}
          placeholder="Share something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={handlePost}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#2e7d32',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
        {posts.map(post => (
          <div key={post.id} style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: '#f1f8e9',
            borderRadius: '10px'
          }}>
            <strong>{post.name}</strong>{" "}
            <span style={{ color: '#888', fontSize: '0.8rem' }}>— {post.time}</span>
            <p style={{ margin: '0.5rem 0 0 0' }}>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
