import React, { useEffect, useState } from 'react';
import logo from '../Images/logo.png';
import menuButton from '../Images/menuButton.png';
import { motion, useElementScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { Animated } from 'react-animated-css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import FileSaver from 'file-saver';

interface HeaderProps {
  videoSoundMuted: boolean;
  setVideoSoundMuted: (muted: boolean) => void;
}

export default function Header({
  videoSoundMuted,
  setVideoSoundMuted
}: HeaderProps) {
  const [actives, setActives] = useState(['menu-active', '', '', '', '']);
  const [showMenu, setShowMenu] = useState(false);
  const [menuAnim, setMenuAnim] = useState(false);
  const [scrolledd, setScrolled] = useState(0);
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
    // console.log({ id });
  };

  const callMenu = () => {
    if (!showMenu) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflowY = 'initial';
      document.body.style.touchAction = 'initial';
    }
    // if (!showMenu)
    setShowMenu(!showMenu);
    // else {
    //   setTimeout(() => setShowMenu(!showMenu), 550);
    // }
    setMenuAnim(!menuAnim);
  };

  const blockVideo = document.getElementsByClassName('block-video')[0];
  const whatIs = document.getElementsByClassName('what-is')[0];
  const usage = document.getElementsByClassName('usage')[0];
  const mission = document.getElementsByClassName('mission')[0];
  const cases = document.getElementsByClassName('cases')[0];
  const clients = document.getElementsByClassName('clients')[0];

  const blockVidText = document.getElementsByClassName('main-text')[0];

  useScrollPosition(({ prevPos, currPos }) => {
    let scrolled = currPos.y * -1;
    setScrolled(scrolled);

    if (
      blockVideo instanceof HTMLElement &&
      whatIs instanceof HTMLElement &&
      usage instanceof HTMLElement &&
      mission instanceof HTMLElement &&
      cases instanceof HTMLElement &&
      clients instanceof HTMLElement &&
      blockVidText instanceof HTMLElement
    ) {
      if (
        scrolledd >= blockVideo.offsetTop &&
        scrolledd < usage.offsetTop - 70
      ) {
        headerMenuClick(0);
      } else if (
        scrolledd >= usage.offsetTop - 70 &&
        scrolledd < mission.offsetTop - 70
      ) {
        headerMenuClick(1);
      } else if (
        scrolledd >= mission.offsetTop - 70 &&
        scrolledd < clients.offsetTop - 70
      ) {
        headerMenuClick(2);
      } else if (
        scrolledd >= clients.offsetTop - 70 &&
        scrolledd < clients.offsetTop + clients.offsetHeight - 70
      ) {
        headerMenuClick(3);
      } else if (scrolledd >= cases.offsetTop - 70) {
        headerMenuClick(4);
      }

      if (
        scrolledd >= blockVidText.offsetTop - 70 &&
        scrolledd < whatIs.offsetTop - 70 &&
        videoSoundMuted
      ) {
        // setVideoSoundMuted(false);
      } else {
        // setVideoSoundMuted(true);
      }
    }
  });

  const MobileMenu = () => (
    <Animated
      animationIn="slideInDown"
      // animationIn="bounceInDown"
      animationOut="slideOutDown"
      animationInDuration={150}
      isVisible={menuAnim}
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
            // onClick={() => headerMenuClick(0)}
            className={actives[0]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            what is mosqitter?
          </motion.button>
        </Link>
        <Link to="usage" smooth={true}>
          <motion.button
            // onClick={() => headerMenuClick(1)}
            className={actives[1]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            usage
          </motion.button>
        </Link>
        <Link to="mission" smooth={true}>
          <motion.button
            // onClick={() => headerMenuClick(2)}
            className={actives[2]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            mission
          </motion.button>
        </Link>
        <Link to="clients" smooth={true}>
          <motion.button
            // onClick={() => headerMenuClick(3)}
            className={actives[3]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            clients
          </motion.button>
        </Link>
        <Link to="cases" smooth={true}>
          <motion.button
            // onClick={() => headerMenuClick(4)}
            className={actives[4]}
            whileTap={tapOptions}
            whileHover={hoverOptions}
          >
            cases
          </motion.button>
        </Link>
      </div>

      <div className="menu-btns">
        <div className="new-menu">
          <motion.button
            className="menuButton"
            whileTap={tapOptions}
            onClick={callMenu}
          >
            <img src={menuButton} />
          </motion.button>

          <motion.button
            whileTap={tapOptions}
            onClick={() => {
              FileSaver.saveAs(
                process.env.PUBLIC_URL + '/resource/mosqittereng_new.pdf',
                'Mosqitter_Eng.pdf'
              );
            }}
          >
            download PDF<span className="pdf-remove">presentation</span>
          </motion.button>

          <motion.button whileTap={tapOptions}>
            <Link to="brand-contacts" smooth={true}>
              contact us
            </Link>
          </motion.button>
        </div>
        <Link to="block-video" smooth={true}>
          <img src={logo} alt="Logo"></img>
        </Link>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </div>
  );
}
