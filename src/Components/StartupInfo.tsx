import React, { useEffect, useState } from 'react';

import ua from '../Images/ua.png';
import karitas from '../Images/Karitas.png';
import tabl from '../Images/Tablet.png';
import alive from '../Images/PUZH.png';
import breath from '../Images/Breathe.png';
import hand from '../Images/Help.png';
import crossIcon from '../Images/crossIcon.png';

export const StartupInfo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('bannerWasShowed');
    if (!value) {
      setVisible(true);
    }
  }, []);

  const handleCloseClick = () => {
    localStorage.setItem('bannerWasShowed', 'yes');
    setVisible(false);
  };

  if (!visible) return <></>;

  return (
    <div className="startup-info-container">
      <div className="startup-info">
        <img
          src={crossIcon}
          className="cross-icon"
          onClick={handleCloseClick}
          alt={'close icon'}
        />
        <div className="s-top">
          <img src={ua} />
          <div className="s-text">
            <p>Mosqitter is a Ukrainian startup</p>
            <p>
              We support our country in defending its independence and fighting
              for our future as a nation. Many Ukrainians have been affected by
              russian aggression and are now in need of the basics, such as
              food, shelter, medical treatment, and care.
              <br />
              <br />
              If you want to support Ukraine and its people — donate through the
              trusted funds.
            </p>
          </div>
        </div>
        {/* <div className="s-bottom">
          <img src={karitas} />
          <img src={tabl} />
          <img src={alive} />
          <img src={breath} />
          <img src={hand} />
        </div> */}
      </div>
    </div>
  );
};
