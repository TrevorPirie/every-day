import React, { FC } from 'react'
import '../../styles/index.css'
import './BlobShapes.css'

// https://9elements.github.io/fancy-border-radius/
const BlobShapes: FC = () => {
	return (
		<div className='container-center'>
			<div className='blobby'></div>
		</div>
	)
}

export { BlobShapes }
