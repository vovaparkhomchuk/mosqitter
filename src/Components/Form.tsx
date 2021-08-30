import React, { useState } from 'react';
import pic from '../Images/pic.png';
import ua from '../Images/ua-logo.png';
import { motion } from 'framer-motion';
import formSent from '../Images/formSent.png';
import { Animated } from 'react-animated-css';
import { send } from 'emailjs-com';

export default function Form() {
  const [showSent, setShowSent] = useState(false);
  const [vis, setVis] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [check, setCheck] = useState(false);

  const tapOptions = {
    scale: 1.01
  };

  const hoverOptions = {
    scale: 1.01
  };

  const submitForm = () => {
    if (
      name !== '' &&
      email !== '' &&
      mobile !== '' &&
      subject !== '' &&
      question !== '' &&
      check === true
    ) {
      const sendingObject = {
        name,
        email,
        mobile,
        company,
        subject,
        question,
        check
      };

      send(
        'service_yzzzeor',
        'template_clhw8vr',
        {
          message: sendingObject
        },
        'user_O9EGi1hpz6wg5oIxHl7lh'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          if (!showSent) {
            setShowSent(!showSent);
            setTimeout(() => {
              setVis(!vis);
            }, 2000);
            setTimeout(() => {
              setShowSent(false);
              setVis(true);
            }, 3000);
          }
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }
  };

  const FormSent = () => (
    <Animated
      animationIn="slideInRight"
      animationOut="fadeOut"
      animationInDuration={300}
      isVisible={vis}
      className="form-sent"
    >
      <img src={formSent} />
      <div className="form-sent-text">
        <div>Thank you!</div>
        <div>We will contact you shortly after processing your form. </div>
        <div>Usually we reply to our clients within a day</div>
      </div>
    </Animated>
  );

  return (
    <div className="form">
      {showSent ? <FormSent /> : null}
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
          <div className="brand-head-text">our office</div>
          <div className="brand-line"></div>
        </div>
        <div className="brand-ltd">
          <img src={ua} />
          Mosquito Control Ltd.
        </div>
        <div className="brand-adress">
          Kyiv
          <br />
          8 Moskovska str.
          <br />
          02000
        </div>
        <div className="brand-contacts">
          +380963295768
          <br />
          office@mosqitter.com
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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inp">
              <label>
                <span>email</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inp">
              <label>
                <span>mobile number</span>
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="inp">
              <label>
                <span>company name (optional)</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="form-r">
            <div className="inp">
              <label>
                <span>subject</span>
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="inp">
              <label>
                <span>question</span>
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="inp inp-check">
              <input
                type="checkbox"
                checked={check}
                onChange={(e) => setCheck(!check)}
              />
              <div className="check-text">
                I have read and understand
                <br />
                the Privacy Policy
              </div>
            </div>
          </div>
        </div>
        <div className="sumbit-block">
          <motion.button whileTap={tapOptions} onClick={submitForm}>
            <div className="form-btn">submit contact form</div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
