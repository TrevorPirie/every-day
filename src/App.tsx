import React, { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { BlobShapes } from './components/BlobShapes/BlobShapes'
import { Playground } from './components/Playground'

const App: FC = () => (
	<div className='App'>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='playground' element={<Playground />} />
			<Route path='blobshapes' element={<BlobShapes />} />
		</Routes>
	</div>
)

function Home() {
	return (
		<>
			<div className='container'>
				<h1>Every Day</h1>
			</div>
			<div className='menu-grid'>
				<div className='card'>
					<Link className='nav-link' to='/playground'>
						Playground
					</Link>
				</div>
				<div className='card'>
					<Link className='nav-link' to='/blobshapes'>
						Blobshapes
					</Link>
				</div>
			</div>
		</>
	)
}

export { App }
