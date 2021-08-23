import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Mission() {
  return (
    <div className="mission">
      <div className="mission-img"></div>

      <div className="mission-block">
        <div className="mission-text">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            Mosqitter’s mission is to help humanity to make the Earth more
            ecological, safe for humans and animals by excluding usage of
            insecticides and chemicals. The solution will enable many countries
            to save large amount of resources by protecting health of its
            citizens in a natural and sustainable way.
            <br />
            <br /> Developing of Mosqitter Worldwide Monitoring System will
            allow to track mosquito activity and predict mosquito-borne diseases
            outbreak.
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
