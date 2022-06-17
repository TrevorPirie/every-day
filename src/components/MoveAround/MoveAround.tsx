import React, { FC } from 'react';
import './MoveAround.css';

const MoveAround: FC = () => {
  return (
    <div className='move-container'>
      <h1>Fluffy duck</h1>
      <div className='move-cube'></div>
      <h1>No longer a Fluffy duck</h1>
    </div>
  );
};

export { MoveAround };
