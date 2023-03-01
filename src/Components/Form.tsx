import React, { useState } from 'react';
import pic from '../Images/pic.png';
import ua from '../Images/ua-logo.png';
import usa from '../Images/Flag_of_USA.png'
import { motion } from 'framer-motion';
import formSent from '../Images/formSent.png';
import { Animated } from 'react-animated-css';
import { send } from 'emailjs-com';
import ReactCircleModal from 'react-circle-modal';
import { posix } from 'path';
import FileSaver from 'file-saver';

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

  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          The smartest protection from mosquitoes you have ever had.
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
          <img src={usa} className="usa-logo" />
          Mosquito Control Ltd.
        </div>
        <div className="brand-adress">
          The East Stroudsburg University Innovation Center.
          <br />
          562 Independence Rd,
          <br />
          East Stroudsburg,
          <br />
          PA 18301,
          <br />
          United States
          {/* <br />
          8 Moskovska str.
          <br />
          02000 */}
        </div>
        <div className="brand-contacts">
          +1 (272) 634-8778
          <br />
          office@mosqitter.com
        </div>
        <div className="brand-ltd">
          <img src={ua} />
          Mosquito Control Ltd.
        </div>
        <div className="brand-adress">
          13 Kharkivske shosse
          <br />
          str. Poltava,
          <br />
          36008,
          <br />
          Ukraine
          {/* <br />
          8 Moskovska str.
          <br />
          02000 */}
        </div>
        <div className="brand-contacts">
          +380 96 329 5768
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
                the the
                <button
                  style={{
                    background: 'none',
                    textDecoration: 'underline'
                  }}
                  onClick={() => {
                    FileSaver.saveAs(
                      process.env.PUBLIC_URL + '/resource/Terms.docx',
                      'Terms.docx'
                    );
                  }}
                >
                  Privacy Policy
                </button>
                {/* <ReactCircleModal
                  backgroundColor="#357857"
                  toogleComponent={(onClick) => (
                    <button
                      style={{
                        background: 'none',
                        textDecoration: 'underline'
                      }}
                      onClick={onClick}
                    >
                      Privacy Policy
                    </button>
                  )}
                  // Optional fields and their default values
                  offsetX={0}
                  offsetY={0}
                >
                  {(onClick) => (
                    <div
                      style={{
                        backgroundColor: '#fff',
                        padding: '1em'
                        // height: '90vh'
                        // overflow: 'auto',
                        // touchAction: 'initial'
                        // position: 'fixed'
                      }}
                    >
                      <button
                        style={{ color: 'white', backgroundColor: '#357857' }}
                        onClick={onClick}
                      >
                        Close
                      </button>
                      <p>
                        <Terms />
                      </p>
                    </div>
                  )}
                </ReactCircleModal> */}
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

const Terms = () => (
  <div
    className="help"
    style={{
      height: '90vh',
      overflow: 'scroll',
      position: 'relative',
      zIndex: 100
      // backgroundColor: 'red'
    }}
  >
    TERMS AND CONDITIONS
    <br />
    Last updated: July 16, 2021
    <br />
    Please read these terms and conditions carefully before using Our Service.
    <br />
    <br />
    Interpretation and Definitions
    <br />
    Interpretation
    <br />
    The words of which the initial letter is capitalized have meanings defined
    under the following conditions. The following definitions shall have the
    same meaning regardless of whether they appear in singular or in plural.
    <br />
    Definitions
    <br />
    For the purposes of these Terms and Conditions:
    <br />
    • Affiliate means an entity that controls, is controlled by or is under
    common control with a party, where "control" means ownership of 50% or more
    of the shares, equity interest or other securities entitled to vote for
    election of directors or other managing authority.
    <br />• Country refers to: Ukraine
    <br />
    • Company (referred to as either "the Company", "We", "Us" or "Our" in this
    Agreement) refers to Mosquito Control LLC, 13 Kharkivske shosse str.,
    Poltava, 36008, Ukraine.
    <br />
    • Device means any device that can access the Service such as a computer, a
    cellphone or a digital tablet.
    <br />• Service refers to the Website.
    <br />• Terms and Conditions (also referred as "Terms") mean these Terms and
    Conditions that form the entire agreement between You and the Company
    regarding the use of the Service.
    <br />• Third-party Social Media Service means any services or content
    (including data, information, products or services) provided by a
    third-party that may be displayed, included or made available by the
    Service.
    <br />• Website refers to Mosqitter, accessible from http://mosqitter.com/
    <br />• You means the individual accessing or using the Service, or the
    company, or other legal entity on behalf of which such individual is
    accessing or using the Service, as applicable.
    <br />
    <br />
    Acknowledgment
    <br />
    These are the Terms and Conditions governing the use of this Service and the
    agreement that operates between You and the Company. These Terms and
    Conditions set out the rights and obligations of all users regarding the use
    of the Service.
    <br />
    Your access to and use of the Service is conditioned on Your acceptance of
    and compliance with these Terms and Conditions. These Terms and Conditions
    apply to all visitors, users and others who access or use the Service.
    <br />
    By accessing or using the Service You agree to be bound by these Terms and
    Conditions. If You disagree with any part of these Terms and Conditions then
    You may not access the Service.
    <br />
    You represent that you are over the age of 18. The Company does not permit
    those under 18 to use the Service.
    <br />
    Your access to and use of the Service is also conditioned on Your acceptance
    of and compliance with the Privacy Policy of the Company. Our Privacy Policy
    describes Our policies and procedures on the collection, use and disclosure
    of Your personal information when You use the Application or the Website and
    tells You about Your privacy rights and how the law protects You. Please
    read Our Privacy Policy carefully before using Our Service.
    <br />
    <br />
    Links to Other Websites
    <br />
    Our Service may contain links to third-party web sites or services that are
    not owned or controlled by the Company.
    <br />
    The Company has no control over, and assumes no responsibility for, the
    content, privacy policies, or practices of any third party web sites or
    services. You further acknowledge and agree that the Company shall not be
    responsible or liable, directly or indirectly, for any damage or loss caused
    or alleged to be caused by or in connection with the use of or reliance on
    any such content, goods or services available on or through any such web
    sites or services.
    <br />
    We strongly advise You to read the terms and conditions and privacy policies
    of any third-party web sites or services that You visit.
    <br />
    <br />
    Termination
    <br />
    We may terminate or suspend Your access immediately, without prior notice or
    liability, for any reason whatsoever, including without limitation if You
    breach these Terms and Conditions.
    <br />
    Upon termination, Your right to use the Service will cease immediately.
    <br />
    <br />
    Limitation of Liability
    <br />
    Notwithstanding any damages that You might incur, the entire liability of
    the Company and any of its suppliers under any provision of this Terms and
    Your exclusive remedy for all of the foregoing shall be limited to the
    amount actually paid by You through the Service or 100 USD if You haven't
    purchased anything through the Service.
    <br />
    <br />
    To the maximum extent permitted by applicable law, in no event shall the
    Company or its suppliers be liable for any special, incidental, indirect, or
    consequential damages whatsoever (including, but not limited to, damages for
    loss of profits, loss of data or other information, for business
    interruption, for personal injury, loss of privacy arising out of or in any
    way related to the use of or inability to use the Service, third-party
    software and/or third-party hardware used with the Service, or otherwise in
    connection with any provision of this Terms), even if the Company or any
    supplier has been advised of the possibility of such damages and even if the
    remedy fails of its essential purpose.
    <br />
    Some states do not allow the exclusion of implied warranties or limitation
    of liability for incidental or consequential damages, which means that some
    of the above limitations may not apply. In these states, each party's
    liability will be limited to the greatest extent permitted by law.
    <br />
    <br />
    "AS IS" and "AS AVAILABLE" Disclaimer
    <br />
    The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
    faults and defects without warranty of any kind. To the maximum extent
    permitted under applicable law, the Company, on its own behalf and on behalf
    of its Affiliates and its and their respective licensors and service
    providers, expressly disclaims all warranties, whether express, implied,
    statutory or otherwise, with respect to the Service, including all implied
    warranties of merchantability, fitness for a particular purpose, title and
    non-infringement, and warranties that may arise out of course of dealing,
    course of performance, usage or trade practice. Without limitation to the
    foregoing, the Company provides no warranty or undertaking, and makes no
    representation of any kind that the Service will meet Your requirements,
    achieve any intended results, be compatible or work with any other software,
    applications, systems or services, operate without interruption, meet any
    performance or reliability standards or be error free or that any errors or
    defects can or will be corrected.
    <br />
    Without limiting the foregoing, neither the Company nor any of the company's
    provider makes any representation or warranty of any kind, express or
    implied: (i) as to the operation or availability of the Service, or the
    information, content, and materials or products included thereon; (ii) that
    the Service will be uninterrupted or error-free; (iii) as to the accuracy,
    reliability, or currency of any information or content provided through the
    Service; or (iv) that the Service, its servers, the content, or e-mails sent
    from or on behalf of the Company are free of viruses, scripts, trojan
    horses, worms, malware, timebombs or other harmful components.
    <br />
    Some jurisdictions do not allow the exclusion of certain types of warranties
    or limitations on applicable statutory rights of a consumer, so some or all
    of the above exclusions and limitations may not apply to You. But in such a
    case the exclusions and limitations set forth in this section shall be
    applied to the greatest extent enforceable under applicable law.
    <br />
    <br />
    Governing Law
    <br />
    The laws of the Country, excluding its conflicts of law rules, shall govern
    this Terms and Your use of the Service. Your use of the Application may also
    be subject to other local, state, national, or international laws.
    <br />
    <br />
    Disputes Resolution
    <br />
    If You have any concern or dispute about the Service, You agree to first try
    to resolve the dispute informally by contacting the Company. For European
    Union (EU) Users If You are a European Union consumer, you will benefit from
    any mandatory provisions of the law of the country in which you are resident
    in.
    <br />
    <br />
    United States Legal Compliance
    <br />
    <br />
    You represent and warrant that (i) You are not located in a country that is
    subject to the United States government embargo, or that has been designated
    by the United States government as a "terrorist supporting" country, and
    (ii) You are not listed on any United States government list of prohibited
    or restricted parties.
    <br />
    Severability and Waiver
    <br />
    <br />
    Severability
    <br />
    If any provision of these Terms is held to be unenforceable or invalid, such
    provision will be changed and interpreted to accomplish the objectives of
    such provision to the greatest extent possible under applicable law and the
    remaining provisions will continue in full force and effect.
    <br />
    <br />
    Waiver
    <br />
    Except as provided herein, the failure to exercise a right or to require
    performance of an obligation under this Terms shall not effect a party's
    ability to exercise such right or require such performance at any time
    thereafter nor shall be the waiver of a breach constitute a waiver of any
    subsequent breach.
    <br />
    <br />
    Translation Interpretation
    <br />
    These Terms and Conditions may have been translated if We have made them
    available to You on our Service. You agree that the original English text
    shall prevail in the case of a dispute.
    <br />
    <br />
    Changes to These Terms and Conditions
    <br />
    We reserve the right, at Our sole discretion, to modify or replace these
    Terms at any time. If a revision is material We will make reasonable efforts
    to provide at least 30 days' notice prior to any new terms taking effect.
    What constitutes a material change will be determined at Our sole
    discretion.
    <br />
    By continuing to access or use Our Service after those revisions become
    effective, You agree to be bound by the revised terms. If You do not agree
    to the new terms, in whole or in part, please stop using the website and the
    Service.
    <br />
    <br />
    Contact Us
    <br />
    If you have any questions about these Terms and Conditions, You can contact
    us: • By email: office@mosqitter.com
  </div>
);
