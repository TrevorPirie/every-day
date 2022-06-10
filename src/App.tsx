import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Playground } from './components/Playground';

const App: FC = () => (
  <div className='App'>
    <h1>React Everyday</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playground' element={<Playground />} />
    </Routes>
  </div>
);

function Home() {
  return (
    <div>
      <Link to='/playground'>Playground</Link>
    </div>
  );
}

export { App };
