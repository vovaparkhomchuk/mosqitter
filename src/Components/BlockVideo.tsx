import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import backgroundVideo from '../Video/mosqitter_promo FULL_.mp4';

interface VideoProps {
  videoSoundMuted: boolean;
}

export default function BlockVideo({ videoSoundMuted }: VideoProps) {
  const refVideo = useRef(null);

  // @ts-ignore: Object is possibly 'null'.
  // const kek = document.getElementById('myVideo'); //.play();
  // console.log({ kek });
  // @ts-ignore: Object is possibly 'null'.
  // refVideo.current.play();

  useEffect(() => {
    // setTimeout(() => {
    //   var video = document.getElementById('myVideo');
    //   // @ts-ignore: Object is possibly 'null'.
    //   video.muted = !video.muted;
    // }, 3000);

    if (!refVideo.current) {
      return;
    }

    if (videoSoundMuted && refVideo && refVideo.current) {
      //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      // @ts-ignore: Object is possibly 'null'.
      // refVideo.current.defaultMuted = false;
      // @ts-ignore: Object is possibly 'null'.
      refVideo.current.muted = false;
    }

    // @ts-ignore: Object is possibly 'null'.
    // refVideo.current.srcObject = src;
  }, []);

  return (
    <div className="block-video">
      <div className="video">
        <div
          className="fullscreen-video-wrap"
          dangerouslySetInnerHTML={{
            __html: `
            <video controls playsinline loop autoPlay muted autobuffer id="myVideo">
              <source src="${backgroundVideo}" type="video/mp4" />
            </video>`
          }}
        ></div>
        {/* <video ref={refVideo} autoPlay controls muted loop id="myVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video> */}
        <div className="round-block">
          <div className="main-text">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              Creating mosquito-free zone for comfort and safety
            </ScrollAnimation>
          </div>
          <div className="small-text">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={true}
              delay={500}
            >
              Did you know that mosquito is a deadliest animal in the world?
              <br />
              <br /> Those pesky insects not only spoil your evening nights on
              the terrace, but the reason of 600 million confirmed cases of
              mosquito-borne diseases like malaria, dengue, Zika, etc*. 700 000
              die each year**.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
