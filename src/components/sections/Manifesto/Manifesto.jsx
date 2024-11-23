import React from 'react';
import './Manifesto.scss';

const Manifesto = () => {
  return (
    <section id="manifesto" className="manifesto">
      <div className="manifesto__content">
        <h2>"WE UNITE AND DEFEND HUMAN ARTISTS INTERNATIONALLY BY HELPING THEM PROTECT AND MONETIZE THEIR CREATIONS AGAINST THE UNCONTROLLED RISE OF GEN AI"</h2>
        
        <div className="manifesto__body1">
          <h3>The uniqueness of a work of art is inseparable from its being imbedded in the fabric of tradition. This tradition itself is thoroughly alive and extremely changeable. An ancient statue of Venus, for example, stood in a different traditional context with the Greeks, who made it an object of veneration, than with the clerics of the Middle Ages, who viewed it as an ominous idol. Both of them, however, were equally confronted with its uniqueness, that is, its aura. Originally the contextual integration of art in tradition found its expression in the cult. We know that the earliest art works originated in the service of a ritual—first the magical, then the religious kind. It is significant that the existence of the work of art with reference to its aura is never entirely separated from its ritual function. In other words, the unique value of the “authentic” work of art has its basis in ritual, the location of its original use value. This ritualistic basis, however remote, is still recognizable as secularized ritual even in the most profane forms of the cult of beauty. The secular cult of beauty, developed during the Renaissance and prevailing for three centuries, clearly showed that ritualistic basis in its decline and the first deep crisis which befell it. With the advent of the first truly revolutionary means of reproduction, photography, simultaneously with the rise of socialism, art sensed the approaching crisis which has become evident a century later. At the time, art reacted with the doctrine of l’art pour l’art, that is, with a theology of art. This gave rise to what might be called a negative theology in the form of the idea of ‘pure’ art, which not only denied any social function of art but also any categorizing by subject matter.</h3>
          
          <h3>
            {/* Will Kwon <br/> */}
            November 22, 2024 <br/>
            Cambridge, MA
          </h3>
        </div>

        <div className="manifesto__hero">
          <img 
            src="./Images/steps.jpg" 
            alt="Manifesto Hero" 
            className="manifesto__hero-image"
          />
          <div className="manifesto__text-overlay">
            <h2>Horijon is a meticulously crafted photography space that invites infinite depth </h2>
            <h3>allowing each subject to radiate with distinction. Its gracefully curved, fully white backdrop creates a seamless, boundless canvas, evoking a sense of purity and visual harmony. Within Horijon, photographers wield complete mastery over light, sculpting each shot to reveal the true essence of their subjects—whether capturing the soul of a person or the subtle beauty of fine art.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;