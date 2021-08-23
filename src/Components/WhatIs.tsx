import React from 'react';
import noChem from '../Images/noChem.png';
import smartSol from '../Images/smartSol.png';
import radiusIcon from '../Images/radiusIcon.png';
import ScrollAnimation from 'react-animate-on-scroll';

export default function WhatIs() {
  return (
    <div className="what-is">
      <div className="what-is1">
        <div className="main-text">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            What is Mosqitter?
          </ScrollAnimation>
        </div>
      </div>
      <div className="what-is2">
        <div className="main-text-left">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            Eco-friendly and innovative
            <br /> protection from mosquitoes
          </ScrollAnimation>
        </div>
        <div className="features">
          <div className="feature">
            <img src={noChem} />
            <span className="feature-main-text">No chemicals</span>
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={300}
              animateOnce={true}
            >
              <span className="feature-text">
                By imitating living-being, protects from mosquitoes without
                chemicals
              </span>
            </ScrollAnimation>
          </div>
          <div className="feature">
            <img src={smartSol} />
            <span className="feature-main-text">Patented smart solution</span>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={700}
              animateOnce={true}
            >
              <span className="feature-text">
                Multi-component luring system with patented technology for
                maximum efficiency
              </span>
            </ScrollAnimation>
          </div>
          <div className="feature">
            <img src={radiusIcon} />
            <span className="feature-main-text">50m radius</span>
            <ScrollAnimation
              animateIn="fadeInRight"
              delay={1200}
              animateOnce={true}
            >
              <span className="feature-text">
                According to the scientists, mosquitoes are local insects and
                never travel more than 500 feet from their birthplace. In 3-4
                weeks, mosquito breeding cycle will be disrupted, and you will
                enjoy mosquitoes-free zone around you.
              </span>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="what-is3">
        <div className="med-text">
          <ScrollAnimation animateIn="fadeIn" delay={1200} animateOnce={true}>
            Long-term solution, designed to
            <br /> withstand severe weather conditions
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
