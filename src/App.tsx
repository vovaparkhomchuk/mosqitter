import React, { useState } from 'react';
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
import PrivacyPolicy from './Components/PrivacyPolicy';
import Terms from './Components/Terms';
import { StartupInfo } from './Components/StartupInfo';
import { motion, useElementScroll } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [videoSoundMuted, setVideoSoundMuted] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header
          videoSoundMuted={videoSoundMuted}
          setVideoSoundMuted={setVideoSoundMuted}
        />
        <Switch>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-and-conditions">
            <Terms />
          </Route>
          <Route path="/">
            <StartupInfo />
            <BlockVideo videoSoundMuted={videoSoundMuted} />
            <WhatIs />
            <Usage />
            <Mission />
            <Clients />
            <Showreel />
            <Cases />
            <Form />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
