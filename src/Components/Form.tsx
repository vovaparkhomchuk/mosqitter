import React from 'react';
import pic from '../Images/pic.png';
import ua from '../Images/ua-logo.png';
import { motion } from 'framer-motion';

export default function Form() {
  const tapOptions = {
    scale: 1.01
  };

  const hoverOptions = {
    scale: 1.01
  };
  return (
    <div className="form">
      <div className="form-lines"></div>
      <div className="form1">
        <div className="form1-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="form-r">
          <img src={pic} />
        </div>
      </div>
      <div className="brand">
        <div className="brand-head">
          <div className="brand-head-text">our branch</div>
          <div className="brand-line"></div>
        </div>
        <div className="brand-ltd">
          <img src={ua} />
          Mosqitter LTD
        </div>
        <div className="brand-adress">
          Kyiv
          <br />
          Horyva 5 str.
          <br />
          02000
        </div>
        <div className="brand-contacts">
          +380937754433
          <br />
          mosqitter@gmail.com
        </div>
      </div>
      <div className="form-block">
        <div className="brand-head">
          <div className="brand-head-text">let`s have a talk</div>
          <div className="brand-line"></div>
        </div>
        <div className="form-l-r">
          <div className="form-l">
            <div className="inp">
              <label>
                <span>name</span>
              </label>
              <input type="text" />
            </div>
            <div className="inp">
              <label>
                <span>email</span>
              </label>
              <input type="text" />
            </div>
            <div className="inp">
              <label>
                <span>mobile number</span>
              </label>
              <input type="text" />
            </div>
            <div className="inp">
              <label>
                <span>company name (optional)</span>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className="form-r">
            <div className="inp">
              <label>
                <span>subject</span>
              </label>
              <input type="text" />
            </div>
            <div className="inp">
              <label>
                <span>question</span>
              </label>
              <textarea />
            </div>
            <div className="inp inp-check">
              <input type="checkbox" />
              <div className="check-text">
                I have read and understand
                <br />
                the Privacy Policy
              </div>
            </div>
          </div>
        </div>
        <div className="sumbit-block">
          <motion.button whileTap={tapOptions}>
            <div className="form-btn">submit contact form</div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
