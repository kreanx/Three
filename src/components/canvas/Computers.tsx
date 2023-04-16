/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'

import CanvasLoader from '../Loader'

interface IComputers {
	isMobile: boolean
}

const Computers: React.FC<IComputers> = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc2/scene.gltf')
	console.log(isMobile)

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[39, 40, 15]}
				angle={0.16}
				penumbra={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 1}
				position={isMobile ? [1, -1, 0.5] : [1, -2, 0.3]}
				rotation={[-0.1, 1.3, 0.1]}
			/>
		</mesh>
	)
}

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)')

		setIsMobile(mediaQuery.matches)

		const handleMediaQueryChange = (e: any) => {
			setIsMobile(e.matches)
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<Canvas
			frameloop="always"
			shadows
			camera={{ position: [30, -20, 10], fov: 20 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enablePan={false}
					autoRotate={true}
					autoRotateSpeed={0.5}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default ComputerCanvas
