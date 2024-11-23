// src/components/Main/Main.jsx
import React from 'react';
import './Main.scss';
import Manifesto from '../sections/Manifesto/Manifesto';  // Add /Manifesto at the end
import Team from '../sections/Team/Team';                 // Add /Team at the end
import Product from '../sections/Product/Product';        // Add /Product at the end
import Contact from '../sections/Contact/Contact';        // Add /Contact at the end

const Main = () => {
  return (
    <main className="main">
      <Manifesto />
      <Team />
      <Product />
      <Contact />
    </main>
  );
};

export default Main;