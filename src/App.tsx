import React, { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { BlobShapes } from './components/BlobShapes/BlobShapes'
import { Playground } from './components/Playground'
import { ResponsiveCardHover } from './components/ResponsiveCardHover/ResponsiveCardHover'

const App: FC = () => (
	<div className='App'>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='playground' element={<Playground />} />
			<Route path='blobshapes' element={<BlobShapes />} />
			<Route path='responsive-card-hover' element={<ResponsiveCardHover />} />
		</Routes>
	</div>
)

function Home() {
	return (
		<>
			<div className='main-menu-container'>
				<h1>Every Day</h1>
			</div>
			<div className='main-menu-grid'>
				<div className='main-menu-card'>
					<Link className='nav-link' to='/playground'>
						Playground
					</Link>
				</div>
				<div className='main-menu-card'>
					<Link className='nav-link' to='/blobshapes'>
						Blobshapes
					</Link>
				</div>
				<div className='main-menu-card'>
					<Link className='nav-link' to='/responsive-card-hover'>
						Responsive Card Hover
					</Link>
				</div>
			</div>
		</>
	)
}

export { App }
