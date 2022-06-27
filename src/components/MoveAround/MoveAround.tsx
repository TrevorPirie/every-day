import React, { FC } from 'react';
import './MoveAround.css';

const MoveAround: FC = () => {
  return (
    <div className='move-container'>
      <h1>The cube</h1>
      <div className='move-cube'></div>
      <h1>is restless...</h1>
    </div>
  );
};

export { MoveAround };
