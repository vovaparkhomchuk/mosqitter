import React from 'react';
import { Link } from 'react-scroll';
import ios from '../Images/ios.png';
import android from '../Images/android.png';
import inn from '../Images/in.png';
import fb from '../Images/fb.png';
import FileSaver from 'file-saver';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <div className="column-name">Structure</div>
        <Link to="what-is" smooth={true}>
          <div className="column-item">what is mosqitter?</div>
        </Link>
        <Link to="usage" smooth={true}>
          <div className="column-item">usage</div>
        </Link>
        <Link to="mission" smooth={true}>
          <div className="column-item">misson</div>
        </Link>
        <Link to="clients" smooth={true}>
          <div className="column-item">clients</div>
        </Link>
        <Link to="cases" smooth={true}>
          <div className="column-item">cases</div>
        </Link>
      </div>

      <div className="footer-column">
        <div className="column-name">Actions</div>
        <Link to="brand-contacts" smooth={true}>
          <div className="column-item">contact us</div>
        </Link>
        <div
          className="column-item"
          onClick={() => {
            FileSaver.saveAs(
              process.env.PUBLIC_URL + '/resource/mosqittereng_new.pdf',
              'Mosqitter_Eng.pdf'
            );
          }}
        >
          download pdf presentation
        </div>
        <RouterLink to="/privacy-policy" className="hrr">
          <div className="column-item">privacy policy</div>
        </RouterLink>
        <RouterLink to="/terms-and-conditions" className="hrr">
          <div className="column-item">terms and conditions</div>
        </RouterLink>
      </div>

      <div className="footer-column">
        <div className="column-name">Apps</div>
        <div className="column-item">
          <div className="column-item-app">
            <div className="app-l">
              <img src={ios} />
            </div>
            <div className="app-r">
              <div className="app-r1">In progress</div>
              <div className="app-r2">iOS app</div>
            </div>
          </div>
        </div>
        <div className="column-item">
          <div className="column-item-app">
            <div className="app-l">
              <img src={android} />
            </div>
            <div className="app-r">
              <div className="app-r1">In progress</div>
              <div className="app-r2">Android app</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <a href="https://www.linkedin.com/company/55050666">
          <img src={inn} />
        </a>
        <a href="https://www.facebook.com/Mosqitter">
          <img src={fb} />
        </a>
      </div>
    </div>
  );
}
