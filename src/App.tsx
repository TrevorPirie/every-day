import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { BlobShapes } from './components/BlobShapes/BlobShapes';
import { GlassMorph } from './components/GlassMorph/GlassMorph';
import { GlowingCube } from './components/GlowingCube/GlowingCube';
import { MoveAround } from './components/MoveAround/MoveAround';
import { Playground } from './components/Playground';
import { ResponsiveCardHover } from './components/ResponsiveCardHover/ResponsiveCardHover';

const App: FC = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playground' element={<Playground />} />
      <Route path='blobshapes' element={<BlobShapes />} />
      <Route path='responsive-card-hover' element={<ResponsiveCardHover />} />
      <Route path='move-around' element={<MoveAround />} />
      <Route path='glowing-cube' element={<GlowingCube />} />
      <Route path='glass-morph' element={<GlassMorph />} />
    </Routes>
  </div>
);

function Home() {
  return (
    <>
      <div className='main-menu-container'>
        <h1>Every Day</h1>
      </div>
      <div className='main-menu-grid'>
        <Card label='Playground' to='/playground'></Card>
        <Card label='Blobshapes' to='/blobshapes'></Card>
        <Card label='Responsive Card Hover' to='/responsive-card-hover'></Card>
        <Card label='Move Around' to='/move-around'></Card>
        <Card label='Glowing Cube' to='/glowing-cube'></Card>
        <Card label='Glass Morph' to='/glass-morph'></Card>
      </div>
    </>
  );
}

interface CardProps {
  label: string;
  to: string;
}
const Card = (props: CardProps) => (
  <div className='main-menu-card'>
    <Link className='nav-link' to={props.to}>
      {props.label}
    </Link>
  </div>
);
export { App };
