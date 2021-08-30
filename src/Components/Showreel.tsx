import React, { useState } from 'react';
import { motion } from 'framer-motion';
import arrow from '../Images/arrow.png';
import background2 from '../Images/background.png';
import background from '../Images/background2.png';

import img1 from '../Images/compressjpeg/IMG_0004-min.jpg';
import img2 from '../Images/compressjpeg/IMG_0013-min.jpg';
import img3 from '../Images/compressjpeg/IMG_0021-min.jpg';
import img4 from '../Images/compressjpeg/IMG_0030-min.jpg';
import img5 from '../Images/compressjpeg/IMG_0044-min.jpg';
import img6 from '../Images/compressjpeg/IMG_0057-min.jpg';
import img7 from '../Images/compressjpeg/IMG_0071-min.jpg';
import img8 from '../Images/compressjpeg/IMG_0074-min.jpg';
import img9 from '../Images/compressjpeg/IMG_0078-min.jpg';
import img10 from '../Images/compressjpeg/IMG_0080-min.jpg';
import img11 from '../Images/compressjpeg/IMG_0085-min.jpg';
import img12 from '../Images/compressjpeg/IMG_0103-min.jpg';
import img13 from '../Images/compressjpeg/IMG_0119-min.jpg';
import img14 from '../Images/compressjpeg/IMG_9822-min.jpg';
import img15 from '../Images/compressjpeg/IMG_9827-min.jpg';
import img16 from '../Images/compressjpeg/IMG_9833-min.jpg';
import img17 from '../Images/compressjpeg/IMG_9836-min.jpg';
import img18 from '../Images/compressjpeg/IMG_9842-min.jpg';
import img19 from '../Images/compressjpeg/IMG_9851-min.jpg';
import img20 from '../Images/compressjpeg/IMG_9854-min.jpg';
import img21 from '../Images/compressjpeg/IMG_9890-min.jpg';

export default function Showreel() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21
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

  const AllImgs = () => (
    <div>
      {images.map((image) => (
        <img src={image} style={{ display: 'none' }} />
      ))}
    </div>
  );

  return (
    <div className="showreel">
      <AllImgs />
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
