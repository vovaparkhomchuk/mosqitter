import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import client1 from '../Images/clients/image 22.png';
import client2 from '../Images/clients/image 23.png';
import client3 from '../Images/clients/image 24.png';
import client4 from '../Images/clients/image 25.png';
import client5 from '../Images/clients/image 26.png';
import client6 from '../Images/clients/image 27.png';

export default function Clients() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className="clients">
        <div className="clients-text">
          Our clients already use benefits of Mosqitter
        </div>

        <div className="clients-imgs">
          <div>
            <img src={client1} />
          </div>
          <div>
            <img src={client2} />
          </div>
          <div>
            <img src={client3} />
          </div>
          <div>
            <img src={client4} />
          </div>
          <div>
            <img src={client5} />
          </div>
          <div>
            <img src={client6} />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
