import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { BlobShapes } from './components/BlobShapes/BlobShapes';
import { Playground } from './components/Playground';

const App: FC = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playground' element={<Playground />} />
      <Route path='blobshapes' element={<BlobShapes />} />
    </Routes>
  </div>
);

function Home() {
  return (
    <div>
      <Link to='/playground'>Playground</Link>
      <Link to='/blobshapes'>Blobshapes</Link>
    </div>
  );
}

export { App };
