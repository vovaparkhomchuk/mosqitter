import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import link from '../Images/link.png';

import case1 from '../Images/cases/case1.png';
import case2 from '../Images/cases/case1.png';
import case3 from '../Images/cases/case1.png';
import case4 from '../Images/cases/case1.png';
import case5 from '../Images/cases/case1.png';
import case6 from '../Images/cases/case1.png';
import case7 from '../Images/cases/case1.png';
import case8 from '../Images/cases/case1.png';
import case9 from '../Images/cases/case1.png';
import case10 from '../Images/cases/case1.png';

export default function Cases() {
  const link1 =
    'https://www.crdfglobal.org/news/crdf-global-supports-innovative-and-female-led-entrepreneurship-ukraine?fbclid=IwAR0AxXY2ANgWVXZChQAZoiXDUtEOiDnxunhRHSPPnPwgcFl5EEVa4qkh6Gk';
  const link2 =
    'https://tech.liga.net/technology/novosti/ukraintsy-pridumali-gadjet-istreblyayuschiy-komarov-samok';
  const link3 =
    'https://inventure.com.ua/upload/library/Ukrainian%20Venture%20Capital%20and%20Private%20Equity%20Overview%202019.pdf';
  const link4 =
    'https://awards.center42.tech/results2020?fbclid=IwAR2Ek5GpRhoQtlvcEhbXrS5ItQjk6atMXxRFeldgNQuyWGGxGFO69oCdTiI#rec208017840';
  const link5 =
    'https://hromadske.ua/posts/ukrayinska-sistemu-borotbi-z-komarami-peremogla-na-amerikanskomu-investicijnomu-konkursi';
  const link6 =
    'https://websummit.com/blog/web-summits-tech-for-good-startups?fbclid=IwAR1z-pGdZAdSGlAoddmLzj_EQomb9NwMx5fERFqXmCQ9QlodUcRFG3yE9kY';
  const link7 =
    'https://www.selectusasummit.us/Programming/SelectUSA-Tech-Pitch-Sessions-Results';
  const link8 =
    'https://techiia.com/ua/news/4-roki-na-ces-yakij-efekt-dlya-ukrayinskih-startapiv';
  const link9 =
    'https://usf.com.ua/ukrainskij-fond-startapiv-proviv-visimnadcyatij-pitch-day/';
  const link10 =
    'https://itarena.ua/meet-it-arena-2020-startup-competition-semi-finalists/?fbclid=IwAR3DIv08IWvJjHoMvBKyf_Rd2iSItQ6cP3lVp0DiviCC0e9pJ8zhewrzIto';

  const link11 =
    'https://techcrunch.com/2022/01/06/mosqitter/';
  const link12 =
    'https://www.reviewed.com/features/ces-2022-editors-choice-award-winners';
  const link13 =
    'https://www.energyglobe.info/national/winner/ukraine';
  const link14 =
    'https://biz.nv.ua/ukr/economics/100-naypomitnishih-malih-pidpriyemciv-ukrajini-50204047.html';
  const link15 =
    'https://india.mfa.gov.ua/news/ukrayinskij-startap-mosqitter-vihodit-na-rinok-indiyi';

  return (
    <div className="cases">
      <div className="showreel-text casess">mosqitter in media</div>
      <div className="cases-list">
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Meet IT Arena 2020 Startup Competition Semi-Finalists
              </div>
              <div className="gradient-date">Sep 28, 2020</div>
              <a href={link4} className="gradient-link">
                <img src={link4} />
                {link4}
              </a>
            </div>
          </div>
        </div>

        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Mosqitter’s machine murders mosquitos with much mirth
              </div>
              <div className="gradient-date">Jan 6, 2022</div>
              <a href={link11} className="gradient-link">
                <img src={link} />
                {link11}
              </a>
            </div>
          </div>
        </div>

        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                CES 2022 EDITORS' CHOICE AWARDS: OUR TOP PICKS FROM THE SHOW
              </div>
              <div className="gradient-date">Jan 7, 2022</div>
              <a href={link12} className="gradient-link">
                <img src={link} />
                {link12}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                WINNER:<br />
                Mosquito Control Ltd.
              </div>
              <div className="gradient-date">
                {/*Sep 28, 2020*/}
              </div>
              <a href={link13} className="gradient-link">
                <img src={link} />
                {link13}
              </a>
            </div>
          </div>
        </div>

        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                100 найпомітніших малих підприємців
              </div>
              <div className="gradient-date">Dec 21, 2021</div>
              <a href={link14} className="gradient-link">
                <img src={link} />
                {link14}
              </a>
            </div>
          </div>
        </div>

        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                УКРАЇНСЬКИЙ СТАРТАП MOSQITTER ВИХОДИТЬ НА РИНОК ІНДІЇ
              </div>
              <div className="gradient-date">Dec 14, 2021</div>
              <a href={link15} className="gradient-link">
                <img src={link} />
                {link15}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient">
              <div className="gradient-text">
                CRDF Global Supports Innovative and Female-Led Entrepreneurship
                in Ukraine
              </div>
              <div className="gradient-date">Jan 11, 2021</div>
              <a href={link1} className="gradient-link">
                <img src={link} />
                {link1}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Украинцы придумали гаджет, истребляющий комаров-самок
              </div>
              <div className="gradient-date">Oct 18, 2019</div>
              <a href={link2} className="gradient-link">
                <img src={link} />
                {link2}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Ukrainian Venture Capital and Private Equity Overview 2019
              </div>
              <div className="gradient-date">2019</div>
              <a href={link3} className="gradient-link">
                <img src={link} />
                {link3}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Results of Ukraine 2020 Innovation Ukraine
              </div>
              <div className="gradient-date">2019</div>
              <a href={link4} className="gradient-link">
                <img src={link} />
                {link4}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Українська система боротьби з комарами перемогла на
                американському інвестиційному конкурсі
              </div>
              <div className="gradient-date">Jun 17, 2021</div>
              <a href={link5} className="gradient-link">
                <img src={link} />
                {link5}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Introducing 8 Web Summit startups using tech for good
              </div>
              <div className="gradient-date">Oct 13, 2020</div>
              <a href={link6} className="gradient-link">
                <img src={link} />
                {link6}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                SelectUSA Tech Pitching Session Results
              </div>
              <div className="gradient-date">Jun 7, 2021</div>
              <a href={link7} className="gradient-link">
                <img src={link} />
                {link7}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                4 роки на CES: який ефект для українських стартапів?
              </div>
              <div className="gradient-date">2021</div>
              <a href={link8} className="gradient-link">
                <img src={link} />
                {link8}
              </a>
            </div>
          </div>
        </div>
        <div className="cases-item">
          <div className="cases-item-logo"></div>
          <div className="gradient-block">
            <div className="gradient-dark">
              <div className="gradient-text">
                Український фонд стартапів провів вісімнадцятий pitch day
              </div>
              <div className="gradient-date">Dec 14, 2020</div>
              <a href={link9} className="gradient-link">
                <img src={link} />
                {link9}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
