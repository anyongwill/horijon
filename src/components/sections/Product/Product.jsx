import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <section id="product" className="product">
      <div className="product__content">
        <h2>"I saw the angel in the marble and carved until I set him free"</h2>
        
        <div className="product__video">
          <iframe 
            src="https://player.vimeo.com/video/412671139"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Player"
          />
        </div>

        <div className="product__text">
          <h3>The uniqueness of a work of art is inseparable from its being imbedded in the fabric of tradition. This tradition itself is thoroughly alive and extremely changeable. An ancient statue of Venus, for example, stood in a different traditional context with the Greeks, who made it an object of veneration, than with the clerics of the Middle Ages, who viewed it as an ominous idol. Both of them, however, were equally confronted with its uniqueness, that is, its aura. Originally the contextual integration of art in tradition found its expression in the cult. We know that the earliest art works originated in the service of a ritual—first the magical, then the religious kind. It is significant that the existence of the work of art with reference to its aura is never entirely separated from its ritual function. In other words, the unique value of the "authentic" work of art has its basis in ritual, the location of its original use value. This ritualistic basis, however remote, is still recognizable as secularized ritual even in the most profane forms of the cult of beauty. The secular cult of beauty, developed during the Renaissance and prevailing for three centuries, clearly showed that ritualistic basis in its decline and the first deep crisis which befell it. With the advent of the first truly revolutionary means of reproduction, photography, simultaneously with the rise of socialism, art sensed the approaching crisis which has become evident a century later. At the time, art reacted with the doctrine of l'art pour l'art, that is, with a theology of art. This gave rise to what might be called a negative theology in the form of the idea of 'pure' art, which not only denied any social function of art but also any categorizing by subject matter.</h3>
        </div>
      </div>
    </section>
  );
};

export default Product;