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
      .to(
        '#shape-overlays path',
        {
          duration: 1.2,
          attr: { d: 'M -0 -100 V 0 Q 50 0 100 0 V -100 z' },
          ease: Expo.easeInOut,
        },
        '-=0.4'
      )
      // .to('main', 1, { y: '-100%', ease: Power3.easeInOut }, '-=0.8')
      .to('main', 1, { opacity: 0 }, '-=0.2')
      .to('main', 1, { display: 'none' });
  };

  return (
    <main>
      <svg
        fill='blue'
        id='shape-overlays'
        class='overlay h-full w-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <path
          fill='blue'
          class='overlay__path'
          vector-effect='non-scaling-stroke'
          // d='M -0 -100 V 0 Q 50 0 100 0 V -100 z' // Use the state for path data
          d='M 0 100 V 0 Q 50 0 100 0 V 100 z'
        ></path>
      </svg>
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
