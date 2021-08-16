import React, { useState } from 'react';
import { motion } from 'framer-motion';
import arrow from '../Images/arrow.png';
import background2 from '../Images/background.png';
import background from '../Images/background2.png';

export default function Showreel() {
  const images = [
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2,
    background,
    background2
  ];
  const [currImg, setCurrImg] = useState(images[0]);
  const [imgInd, setImgInd] = useState(0);
  const circles = new Array(images.length).fill(0);

  const tapOptions = {
    scale: 0.9
  };

  const hoverOptions = {
    scale: 1.1
  };

  const clickLeft = () => {
    const imgLen = images.length;

    if (imgInd - 1 < 0) {
      setImgInd(imgLen - 1);
      setCurrImg(images[imgLen - 1]);
    } else {
      setImgInd(imgInd - 1);
      setCurrImg(images[imgInd - 1]);
    }
  };

  const clickRight = () => {
    const imgLen = images.length;

    if (imgInd + 1 === imgLen) {
      setImgInd(0);
      setCurrImg(images[0]);
    } else {
      setImgInd(imgInd + 1);
      setCurrImg(images[imgInd + 1]);
    }
  };

  const changeImgById = (index: number) => {
    console.log({ index });
    setImgInd(index);
    setCurrImg(images[index]);
  };

  return (
    <div className="showreel">
      <div className="showreel-text">showreel</div>
      <div className="showreel-block">
        <div className="showreel-imgs">
          <div className="image-frame">
            <div
              className="showreel-back-img"
              style={{
                background: `url(${currImg})`
              }}
            >
              {/* <img src={currImg} /> */}
            </div>
          </div>
          <div className="showreel-menu">
            <motion.button
              whileTap={tapOptions}
              whileHover={hoverOptions}
              onClick={() => clickLeft()}
            >
              <img className="arrow-l" src={arrow} />
            </motion.button>
            <div className="circles">
              {circles.map((el, index) => {
                if (index === imgInd)
                  return (
                    <motion.button
                      onClick={() => changeImgById(index)}
                      className="circle"
                      style={{ opacity: 1 }}
                      whileTap={tapOptions}
                      whileHover={hoverOptions}
                    />
                  );
                else
                  return (
                    <motion.button
                      onClick={() => changeImgById(index)}
                      className="circle"
                      whileTap={tapOptions}
                      whileHover={hoverOptions}
                    />
                  );
              })}
            </div>
            <motion.button
              whileTap={tapOptions}
              whileHover={hoverOptions}
              onClick={() => clickRight()}
            >
              <img className="arrow-r" src={arrow} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
