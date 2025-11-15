// Hero.jsx
import React from "react";
import profileImage from "../assets/profileimage.png";

const Hero = () => {
  return (
    <header className="hero">
      {/* Row: name + avatar */}
      <div className="hero__top">
        <h1 className="hero__title">Boonthai Yan</h1>

        <img
          src={profileImage} 
          alt="Boonthai Yan"
          className="hero__photo"
        />
      </div>

      {/* Under the name+photo row */}
      <p className="hero__eyebrow">Cloud & DevOps Engineer</p> 

      <h2 className="hero__subtitle">
        I build reliable, secure, and scalable cloud systems.
      </h2>
    </header>
  );
};

export default Hero;

