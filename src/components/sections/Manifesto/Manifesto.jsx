import React from 'react';
import './Manifesto.scss';

const Manifesto = () => {
  return (
    <section id="manifesto" className="manifesto">
      <div className="manifesto__content">
        <h2>"WE ARE THE GUARDIAN OF HUMAN ARTISTS THAT HELPS PROTECT AND MONETIZE THEIR INTELLECTUAL PROPERTIES IN THE ERA OF GENREATIVE AI"</h2>
        
        <div className="manifesto__body1">
          <h3>Art has always been a profound dialogue of humanity, transcending ownership and time, yet its essence faces a seismic shift in the era of Generative AI. Once rooted in personal expression and communal resonance, art is now at risk of commodification, with originality and craftsmanship threatened by algorithmic outputs. Generative AI, a powerful tool capable of surpassing human memory and experience, challenges the very core of creative autonomy, reducing artists to mere data providers and risking a loss of artistic diversity. This transformation mirrors historical shifts, from the printing press to photography, but with unprecedented implications: the erosion of authenticity, diminished creative struggle, and the looming stagnation of progress. We believe artists must wake up to this challenge, and unite across disciplines to reclaim their role as society's visionaries.</h3>        

          <h3>
            {/* Will Kwon <br/> */}
            July, 2024 <br/>
            Cambridge, Massachussets <br/>
            Seoul, South Korea
          </h3>
        </div>

        <div className="manifesto__hero">
          <img 
            src="./Images/holog7.gif" 
            alt="Manifesto Hero" 
            className="manifesto__hero-image"
          />
          <div className="manifesto__text-overlay">
            <h3>Horijon (호리존; ホリゾン) is a meticulously crafted photography space that invites infinite depth, allowing each subject to radiate with distinction. Its gracefully curved, fully white backdrop creates a seamless, boundless canvas, evoking a sense of purity and visual harmony.<br/><br/>
              
            Within Horijon, photographers wield complete mastery over light, sculpting each shot to reveal the true essence of their subjects—whether capturing the soul of a person or the subtle beauty of fine art.</h3>

            <h2>Our vision is to be the Horijon for every human artist and designer around the world — Providing a space where their creations shine and inspire, leaving traces of soul and emotion in the history of artistic progress.</h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;