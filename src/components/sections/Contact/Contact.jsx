import React from 'react';
import './Contact.scss';

const Contact = () => {
  const gridItems = [
    {
      title: 'HORIJON',
      blocks: 'Check out our page on Horijon.io',
      date: 'horijon.io/horijon',
      link: '#reading'
    },
    {
      title: 'INSTAGRAM',
      blocks: 'Check out our page on @horijon.io',
      date: 'horijon.io/horijon',
      link: '#reading'
    },
    {
      title: 'YOUTUBE',
      blocks: 'Check out our page on Youtube @horijon',
      date: 'horijon.io/horijon',
      link: '#reading'
    },
    {
      title: 'X (TWITER)',
      blocks: 'Check out our page on Horijon.io',
      date: 'horijon.io/horijon',
      link: '#reading'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__detail">
        <h3>
          [EMAIL]
        </h3>
        <h3>
          TEAM@WILLKOMMEL.COM
        </h3>
      </div>
      
      <div className="contact__grid">
        {gridItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link}
            className="contact__grid-item"
          >
            <div className="content">
              <h3>{item.title}</h3>
              <h3>{item.blocks}</h3> 
              {/* <h3>{item.date}</h3> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;