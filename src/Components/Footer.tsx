import React from 'react';
import ios from '../Images/ios.png';
import android from '../Images/android.png';
import inn from '../Images/in.png';
import fb from '../Images/fb.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <div className="column-name">Structure</div>
        <div className="column-item">usage</div>
        <div className="column-item">misson</div>
        <div className="column-item">clients</div>
        <div className="column-item">cases</div>
      </div>

      <div className="footer-column">
        <div className="column-name">Actions</div>
        <div className="column-item">contact us</div>
        <div className="column-item">download pdf presentation</div>
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
              <div className="app-r2">IOS app</div>
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
              <div className="app-r2">IOS app</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <a href="#">
          <img src={inn} />
        </a>
        <a href="#">
          <img src={fb} />
        </a>
      </div>
    </div>
  );
}
