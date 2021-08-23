import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function BlockVideo() {
  return (
    <div className="block-video">
      <div className="video">
        <div className="round-block">
          <div className="main-text">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              Creating mosquito-free zone for comfort and safety
            </ScrollAnimation>
          </div>
          <div className="small-text">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={true}
              delay={500}
            >
              Did you know that mosquito is a deadliest animal in the world?
              <br />
              <br /> Those pesky insects not only spoil your evening nights on
              the terrace, but the reason of 600 million confirmed cases of
              mosquito-borne diseases like malaria, dengue, Zika, etc*. 700 000
              die each year**.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
