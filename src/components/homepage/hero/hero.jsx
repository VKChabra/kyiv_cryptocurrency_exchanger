// import styles;
import glassImg from 'images/1ifWH5sig2jW61Zk244g1gmET8.webp';
import phoneImg from 'images/ebDa2IN77hwi3ZXbInNsMJyxg.webp';

const HomePage = () => (
  <div className="home-page" style={{ backgroundColor: '#416165' }}>
    <div className="rotated-image-container">
      <img src={glassImg} alt="Rotated Img 1" className="rotated-image" />
    </div>
    <div className="rotated-image-container">
      <img src={phoneImg} alt="Rotated Img 2" className="rotated-image" />
    </div>
  </div>
);

export default HomePage;
