import React, { useEffect, useState } from 'react';
import { TimelineLite, gsap, CSSPlugin, Power3, Expo } from 'gsap';
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
    }, 1000);
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to(
      '.progress_two',
      1.2,
      { width: '100%', ease: Expo.easeInOut },
      '+=0.7'
    )
      .to('.hide', 0.3, { opacity: 0 })
      .to('.hide', 0.1, { display: 'none' })
      .to(
        '.progress_two',
        1.2,
        { width: '100%', ease: Expo.easeInOut },
        '-=2.1'
      )
      .to('.progress_two', 1.2, { w: 0, ease: Expo.easeInOut }, '-=1.1')
      .to('.loading', 1, { y: '-100%', ease: Expo.easeInOut }, '-=0.2')
      .to('main', 1, { y: '-100%', ease: Power3.easeInOut }, '-=0.4')
      .to('main', 0.1, { display: 'none' });
  };

  return (
    <main>
      <div className='loading'>
        <div className='progress_two'></div>
        <div
          className='hide'
          id='progress_bar'
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
