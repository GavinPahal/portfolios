import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const ThreeDScene = () => {
  return (
    <Canvas
      style={{ width: "150px", height: "150px", cursor: "pointer" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default ThreeDScene;