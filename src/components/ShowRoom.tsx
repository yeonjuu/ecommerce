import * as THREE from "three";

export default function ShowRoom() {
  return (
    <>
      <directionalLight position={[3, 3, 3]} />
      <mesh rotation={[THREE.MathUtils.degToRad(45), THREE.MathUtils.degToRad(45), 0]}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
