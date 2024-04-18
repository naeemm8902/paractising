import React from "react";
import "./developers.css"; // Import your CSS file for styling

export default function Developers() {
  // Define an array of developer objects with their details
  const developersList = [
    {
      name: "Naeem Ahmed",
      image: "./images/developer.jpg",
      role: "Full Stack Developer",
      bio: "Naeem is an experienced Full Stack developer with a passion for creating user-friendly interfaces and responsive features.",
    },
    {
      name: "Naeem Ahmed",
      image: "./images/developer.jpg",
      role: "Full Stack Developer",
      bio: "Naeem is an experienced Full Stack developer with a passion for creating user-friendly interfaces and responsive features.",
    },

  

    // Add more developer objects as needed
  ];

  return (
    <div className="developer">
        <div className="developer_side">
        <h1 className="animate__animated animate__fadeInDown">Meet Our Developers</h1>
        <p className="animate__animated animate__fadeInUp">Discover our talented team of professionals.</p>
        </div>


      <div className="developers-container">
        {developersList.map((developer, index) => (
          <div key={index} className="developer-card">
            <img
              src={developer.image}
              alt={developer.name}
              className="developer-image"
            />
            <div className="developer-info">
              <h2 className="developer-name">{developer.name}</h2>
              <p className="developer-role">{developer.role}</p>
              <p className="developer-bio">{developer.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
