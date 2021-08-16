import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { motion, useElementScroll } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Header() {
  const [actives, setActives] = useState(['menu-active', '', '', '', '']);
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
        <motion.button whileTap={tapOptions}>
          download PDF presentation
        </motion.button>
        <motion.button whileTap={tapOptions}>contact us</motion.button>
        <img src={logo} alt="Logo"></img>
      </div>
    </div>
  );
}
