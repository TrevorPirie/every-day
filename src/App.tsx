import React, { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { BlobShapes } from './components/BlobShapes/BlobShapes'
import { GlowingCube } from './components/GlowingCube/GlowingCube'
import { Playground } from './components/Playground'
import { ResponsiveCardHover } from './components/ResponsiveCardHover/ResponsiveCardHover'

const App: FC = () => (
	<div className='App'>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='playground' element={<Playground />} />
			<Route path='blobshapes' element={<BlobShapes />} />
			<Route path='responsive-card-hover' element={<ResponsiveCardHover />} />
			<Route path='glowing-cube' element={<GlowingCube />} />
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
				<Card label='Playground' to='/playground'></Card>
				<Card label='Blobshapes' to='/blobshapes'></Card>
				<Card label='Responsive Card Hover' to='/responsive-card-hover'></Card>
				<Card label='Glowing Cube' to='/glowing-cube'></Card>
			</div>
		</>
	)
}

interface CardProps {
	label: string
	to: string
}
const Card = (props: CardProps) => (
	<div className='main-menu-card'>
		<Link className='nav-link' to={props.to}>
			{props.label}
		</Link>
	</div>
)
export { App }
