import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import CanvasLoader from '../Loader'

const Ball = (props: any) => {
	const [decal] = useTexture([props.imgUrl])

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					flatShading
					polygonOffsetFactor={-5}
					polygonOffset
				/>
				<Decal
					map={decal}
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
				/>
			</mesh>
		</Float>
	)
}

const BallCanvas: React.FC<any> = ({ icon }) => {
	return (
		<Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} enablePan={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default BallCanvas
