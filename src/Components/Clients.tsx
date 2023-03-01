import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import client1 from '../Images/Flag_of_Ukraine.png';
import client2 from '../Images/Flag_of_Italy.png';
import client3 from '../Images/india.jpg';
import client4 from '../Images/Flag_of_Canada_(Pantone).png';
import client5 from '../Images/Flag_of_USA.png';
import client6 from '../Images/Flag_of_Brazil.png';

export default function Clients() {
  return (
    <div className="clients">
      <div className="clients-text">
        Our clients already use benefits of Mosqitter
      </div>
      <div className="clients-imgs">
        <div>
          <img src={client1} />
        </div>
        {/* <div>
          <img src={client2} />
        </div> */}
        <div>
          <img src={client3} />
        </div>
        <div>
          <img src={client5} />
        </div>
          <div>
              <img src={client6} />
          </div>
      </div>
    </div>
  );
}
