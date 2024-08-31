import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ShowRoom from "./ShowRoom";

export default function Home() {
  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <axesHelper args={[5]} />
        <gridHelper />
        <OrbitControls />
        <ShowRoom />
      </Canvas>
    </>
  );
}
