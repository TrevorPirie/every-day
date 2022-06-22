import React, { FC } from 'react'
import './GlowingCube.css'

const GlowingCube: FC = () => {
	const style0 = { '--i': 0 } as React.CSSProperties
	const style1 = { '--i': 1 } as React.CSSProperties
	const style2 = { '--i': 2 } as React.CSSProperties
	const style3 = { '--i': 3 } as React.CSSProperties

	return (
		<div className='glow-box-container'>
			<div className='cube'>
				<div className='top'></div>
				<div>
					<span style={style0}></span>
					<span style={style1}></span>
					<span style={style2}></span>
					<span style={style3}></span>
				</div>
			</div>
		</div>
	)
}

export { GlowingCube }
