import React, { useRef } from 'react';
import usage1 from '../Images/usage/condominiumIcon.png';
import usage2 from '../Images/usage/yachtIcon.png';
import usage3 from '../Images/usage/restarauntIcon.png';
import usage4 from '../Images/usage/hotelIcon.png';
import usage5 from '../Images/usage/stableIcon.png';
import usage6 from '../Images/usage/yachtIcon.png';
import usage7 from '../Images/usage/parkIcon.png';
import usage8 from '../Images/usage/golfIcon.png';
import usage9 from '../Images/usage/rvIcon.png';
import usage10 from '../Images/usage/enterpriseIcon.png';
import usage11 from '../Images/usage/houseIcon.png';
import usage12 from '../Images/usage/schoolIcon.png';
import usage13 from '../Images/usage/hospitalIcon.png';

export default function Usage() {
  // const usageRef = useRef(null);

  // const executeScroll = () => usageRef.current.scrollIntoView();
  // const executeScroll = () => usageRef.current.s

  return (
    <div className="usage">
      <div className="usage-main-text">
        Designed for <span>outdoor usage</span>
      </div>
      <div className="usage-options">
        <div className="usage-option">
          <img src={usage1} />
          condominium association
        </div>
        <div className="usage-option">
          <img src={usage2} />
          yard & patio
        </div>
        <div className="usage-option">
          <img src={usage3} />
          restaurants
        </div>
        <div className="usage-option">
          <img src={usage4} />
          hotels & resorts
        </div>
        <div className="usage-option">
          <img src={usage5} />
          stables & farms
        </div>
        <div className="usage-option">
          <img src={usage6} />
          yacht clubs
        </div>
        <div className="usage-option">
          <img src={usage7} />
          parks
        </div>
        <div className="usage-option">
          <img src={usage8} />
          golf clubs
        </div>
        <div className="usage-option">
          <img src={usage9} />
          RV parks
        </div>
        <div className="usage-option">
          <img src={usage10} />
          enterprises
        </div>
        <div className="usage-option">
          <img src={usage11} />
          private houses / condos
        </div>
        <div className="usage-option">
          <img src={usage12} />
          playgrounds & schools
        </div>
        <div className="usage-option">
          <img src={usage13} />
          hospitals
        </div>
      </div>
      {/* <div className="grid-item"></div>

      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div> */}
    </div>
  );
}
