import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { BlobShapes } from './components/BlobShapes/BlobShapes';
import { MoveAround } from './components/MoveAround/MoveAround';
import { Playground } from './components/Playground';
import { ResponsiveCardHover } from './components/ResponsiveCardHover/ResponsiveCardHover';

const App: FC = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playground' element={<Playground />} />
      <Route path='blob-shapes' element={<BlobShapes />} />
      <Route path='responsive-card-hover' element={<ResponsiveCardHover />} />
      <Route path='move-around' element={<MoveAround />} />
    </Routes>
  </div>
);

function Home() {
  return (
    <div>
      <div className='main-menu-container'>
        <h1>Every Day</h1>
      </div>
      <div className='main-menu-grid'>
        <AppCard to='/playground' label='Playground' />
        <AppCard to='/blob-shapes' label='Blobshapes' />
        <AppCard to='/responsive-card-hover' label='Responsive Card Hover' />
        <AppCard to='/move-around' label='Move Around' />
      </div>
    </div>
  );
}

interface AppCardProps {
  label: string;
  to: string;
}
const AppCard = (props: AppCardProps) => {
  return (
    <div className='main-menu-card'>
      <Link className='nav-link' to={props.to}>
        {props.label}
      </Link>
    </div>
  );
};

export { App };
