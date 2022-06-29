import React, { FC, MutableRefObject, useEffect, useRef } from 'react';
import './GlassMorph.css';
import VanillaTilt from 'vanilla-tilt';

const GlassMorph: FC = (props: any) => {
  const tiltRef = useRef<HTMLDivElement[]>([]);

  const employees = [
    {
      name: 'John Smith',
      role: 'Lead Scientist',
    },
    {
      name: 'Alex Morgan',
      role: 'Data Analyst',
    },
    {
      name: 'Rowan Anderson',
      role: 'Botanist',
    },
    {
      name: 'Blake Robinson',
      role: 'Software Engineer',
    },
    {
      name: 'Jeff Stone',
      role: 'Scientist',
    },
    {
      name: 'Peter Rowlands',
      role: 'Geologist',
    },
  ];

  useEffect(() => {
    if (tiltRef?.current)
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 1,
      });
  }, []);

  return (
    <div className='glass-morph-body'>
      <div className='glass-morph-container'>
        {employees.map((element, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement) => {
              if (el) tiltRef.current[index] = el as HTMLDivElement;
            }}
            className='card'
          >
            <h2 className='glass-h2'>{index <= 8 ? `0${index + 1}` : index}</h2>
            <h3>{element.name}</h3>
            <p>Role: {element.role}</p>
          </div>
        ))}
        {/* <div
          key={0}
          ref={(el: HTMLDivElement) => {
            if (el) tiltRef.current[0] = el as HTMLDivElement;
          }}
          className='card'
        >
          <div className='content'>
            <h2>01</h2>
            <h3>John Smith</h3>
            <p>Role: Lead Scientist</p>
          </div>
        </div> */}
        {/* <div
          key={1}
          ref={(el: HTMLDivElement) => {
            if (el) tiltRef.current[1] = el as HTMLDivElement;
          }}
          className='card'
        >
          <div className='content'>
            <h2>02</h2>
            <h3>Alex Morgan</h3>
            <p>Role: Botanist</p>
          </div>
        </div> */}
        {/* <div ref={tilt} className='card'>
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
        </div>*/}
      </div>
    </div>
  );
};

export { GlassMorph };
