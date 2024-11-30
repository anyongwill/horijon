import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <section id="product" className="product">
      <div className="product__content">
        <h2>OUR PURPOSE AND VALUES</h2>
        
        {/* <div className="product__video">
          <iframe 
            src="https://player.vimeo.com/video/412671139"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Player"
          />
        </div> */}

        {/* <div className="product__hero">
          <img 
            src="./Images/steps.jpg" 
            alt="Manifesto Hero" 
            className="manifesto__hero-image"
          />
        </div> */}

        <div className="product__text">
          <h3>We are driven by a vision to enrich humanity’s future through the transformative power of art and design. Our mission is to create a world where creativity flourishes, empowering artists and designers to inspire, innovate, and make meaningful contributions that transcend boundaries. By providing a universal platform, we offer the tools, spaces, and opportunities needed for creators to bring their visions to life, leaving lasting imprints of emotion, passion, and progress. As guardians of creativity, we are dedicated to protecting and nurturing artistic talent, ensuring that innovation and design thrive for generations to come. At the heart of our purpose are the values of focus, integrity, and excellence—upholding precision and an unwavering commitment to fostering a culture of creativity and reaching the highest standards in everything we do. Through these efforts, we aim to inspire a brighter tomorrow for all.</h3>
        </div>
      </div>
    </section>
  );
};

export default Product;