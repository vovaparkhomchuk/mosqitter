import React, { useState } from 'react';
import logo from '../Images/logo.png';
import menuButton from '../Images/menuButton.png';
import { motion, useElementScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { Animated } from 'react-animated-css';

export default function Header() {
  const [actives, setActives] = useState(['menu-active', '', '', '', '']);
  const [showMenu, setShowMenu] = useState(false);
  const tapOptions = {
    scale: 0.9
  };

  const hoverOptions = {
    scale: 1.05
  };

  const headerMenuClick = (id: number) => {
    let newActives = ['', '', '', '', ''];
    newActives[id] = 'menu-active';
    setActives(newActives);
  };

  const callMenu = () => {
    setShowMenu(!showMenu);
  };

  const MobileMenu = () => (
    <Animated
      animationIn="pulse"
      // animationIn="bounceInDown"
      animationOut="fadeOut"
      animationInDuration={300}
      isVisible={showMenu}
      className="mobile-menu"
    >
      <motion.button
        onClick={callMenu}
        className="menu-close"
        whileTap={tapOptions}
        whileHover={hoverOptions}
      >
        close
      </motion.button>

      <div className="mobile-btns">
        <Link to="what-is" smooth={true}>
          <motion.button
            onClick={() => {
              headerMenuClick(0);
              callMenu();
            }}
            className={actives[0]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            what is mosqitter?
          </motion.button>
        </Link>
        <Link to="usage" smooth={true}>
          <motion.button
            onClick={() => {
              headerMenuClick(1);
              callMenu();
            }}
            className={actives[1]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            usage
          </motion.button>
        </Link>
        <Link to="mission" smooth={true}>
          <motion.button
            onClick={() => {
              headerMenuClick(2);
              callMenu();
            }}
            className={actives[2]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            mission
          </motion.button>
        </Link>
        <Link to="clients" smooth={true}>
          <motion.button
            onClick={() => {
              headerMenuClick(3);
              callMenu();
            }}
            className={actives[3]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            clients
          </motion.button>
        </Link>
        <Link to="cases" smooth={true}>
          <motion.button
            onClick={() => {
              headerMenuClick(4);
              callMenu();
            }}
            className={actives[4]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            cases
          </motion.button>
        </Link>
      </div>
    </Animated>
  );

  return (
    <div className="header">
      <div className="menu">
        <Link to="what-is" smooth={true}>
          <motion.button
            onClick={() => headerMenuClick(0)}
            className={actives[0]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            what is mosqitter?
          </motion.button>
        </Link>
        <Link to="usage" smooth={true}>
          <motion.button
            onClick={() => headerMenuClick(1)}
            className={actives[1]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            usage
          </motion.button>
        </Link>
        <Link to="mission" smooth={true}>
          <motion.button
            onClick={() => headerMenuClick(2)}
            className={actives[2]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            mission
          </motion.button>
        </Link>
        <Link to="clients" smooth={true}>
          <motion.button
            onClick={() => headerMenuClick(3)}
            className={actives[3]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            clients
          </motion.button>
        </Link>
        <Link to="cases" smooth={true}>
          <motion.button
            onClick={() => headerMenuClick(4)}
            className={actives[4]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            cases
          </motion.button>
        </Link>
      </div>

      <div className="menu-btns">
        <motion.button
          className="menuButton"
          whileTap={tapOptions}
          onClick={callMenu}
        >
          <img src={menuButton} />
        </motion.button>

        <motion.button whileTap={tapOptions}>
          download PDF<span className="pdf-remove">presentation</span>
        </motion.button>

        <motion.button whileTap={tapOptions}>
          <Link to="brand-contacts" smooth={true}>
            contact us
          </Link>
        </motion.button>
        <Link to="block-video" smooth={true}>
          <img src={logo} alt="Logo"></img>
        </Link>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </div>
  );
}
