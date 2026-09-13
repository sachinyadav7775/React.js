import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
  <Canvas>
    <OrbitControls/>
    <MacContainer/>

    {/* <mesh>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh> */}
  </Canvas>
  )
}

export default App 