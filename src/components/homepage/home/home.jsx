import React from 'react';
import './HomePage.css'; // You can create a CSS file for styling
import glassImg from '../../../images/1ifWH5sig2jW61Zk244g1gmET8.webp';
import phoneImg from 'kyiv_cryptocurrency_exchanger/src/images/ebDa2IN77hwi3ZXbInNsMJyxg.webp';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="rotated-image-container">
        <img
          src={glassImg} // Replace with the actual image source
          alt="Rotated Img 1"
          className="rotated-image"
        />
      </div>
      <div className="rotated-image-container">
        <img
          src={phoneImg} // Replace with the actual image source
          alt="Rotated Img 2"
          className="rotated-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
