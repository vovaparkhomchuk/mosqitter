import React from 'react';
import { Link } from 'react-scroll';
import ios from '../Images/ios.png';
import android from '../Images/android.png';
import inn from '../Images/in.png';
import fb from '../Images/fb.png';
import appstoreQR from '../Images/appstore_qr.png';
import playstoreQR from '../Images/playstore_qr.png';
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
          <div className="column-item">mission</div>
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
        <div className="column-item-wrapper is--flex">
        <div className="column-item is--margin-right">
          <a href="https://apps.apple.com/us/app/mosqitter/id1591375037">
            <div className="column-item-app">
              <div className="app-l">
                <img src={ios} />
              </div>
              <div className="app-r">
                <div className="app-r1">Download</div>
                <div className="app-r2">iOS app</div>
              </div>
            </div>
          </a>
          <img src={appstoreQR} className="qr-image" alt=""/>
        </div>
        <div className="column-item">
          <a href="https://play.google.com/store/apps/details?id=com.mosqitter&pli=1">
            <div className="column-item-app">
              <div className="app-l">
                <img src={android} />
              </div>
              <div className="app-r">
                <div className="app-r1">Download</div>
                <div className="app-r2">Android app</div>
              </div>
            </div>
          </a>
          <img src={playstoreQR} className="qr-image" alt=""/>
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
