import React, { useEffect, useState } from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import { TimelineLite, gsap, CSSPlugin, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin);

const Landing = ({ showContent }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        counter < 100
          ? setCounter(counter + 1)
          : (clearInterval(count), setCounter(100), reveal());
      });
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to('.follow', 1.2, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.3, { opacity: 0 })
      .to('.hide', 0.1, { display: 'none' })
      .to('.follow', 1, { height: 0, ease: Expo.easeInOut }, '+=0.5')
      .to('main', 0.1, { display: 'none' });
  };

  return (
    <main>
      <div className='loading'>
        <div className='follow'></div>
        <div
          className='hide'
          id='progress-bar'
          style={{ width: counter + '%' }}
        ></div>
        <p id='count' className='hide'>
          {counter}%
        </p>
      </div>
    </main>
  );
};
export default Landing;
