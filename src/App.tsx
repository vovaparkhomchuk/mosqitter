import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import BlockVideo from './Components/BlockVideo';
import WhatIs from './Components/WhatIs';
import Usage from './Components/Usage';
import Mission from './Components/Mission';
import Clients from './Components/Clients';
import Showreel from './Components/Showreel';
import Cases from './Components/Cases';
import Form from './Components/Form';
import Footer from './Components/Footer';
import { motion, useElementScroll } from 'framer-motion';

function App() {
  console.log(typeof motion);
  return (
    <div className="App">
      <Header />
      <BlockVideo />
      <WhatIs />
      <Usage />
      <Mission />
      <Clients />
      <Showreel />
      <Cases />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
