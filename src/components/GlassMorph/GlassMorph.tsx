import React, { FC, useEffect, useRef } from 'react';
import './GlassMorph.css';
import VanillaTilt from 'vanilla-tilt';

const GlassMorph: FC = (props: any) => {
  const tilt = useRef([]);

  useEffect(() => {
    if (tilt?.current)
      VanillaTilt.init(tilt.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 1,
      });
  }, []);

  return (
    <div className='glass-morph-body'>
      <div className='glass-morph-container'>
        <div ref={(el) => (tilt.current[0] = el)} className='card'>
          <div className='content'>
            <h2>01</h2>
            <h3>John Smith</h3>
            <p>Role: Lead Scientist</p>
          </div>
        </div>
        <div ref={tilt} className='card'>
          <div className='content'>
            <h2>02</h2>
            <h3>Alex Morgan</h3>
            <p>Role: Botanist</p>
          </div>
        </div>
        <div ref={tilt} className='card'>
          <div className='content'>
            <h2>03</h2>
            <h3>Andrew Schofield</h3>
            <p>Role: Physicist</p>
          </div>
        </div>
        <div ref={tilt} className='card'>
          <div className='content'>
            <h2>04</h2>
            <h3>Andrew Schofield</h3>
            <p>Role: Physicist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GlassMorph };
