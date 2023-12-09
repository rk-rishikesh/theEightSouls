import { RigidBody } from "@react-three/rapier";
import cubes from "./cubes.json";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

// export const Cubes = () => {
//   return cubes.map((coords, index) => <Cube key={index} position={coords} />);
// };

export const Cube = (props:any) => {
  const texture = useLoader(TextureLoader, "./iron.jpeg");

  return (
    <RigidBody {...props}>
      <mesh castShadow receiveShadow>
        <meshStandardMaterial color="white" />
        <boxGeometry />
      </mesh>

      <mesh>
        <boxGeometry />

        <meshStandardMaterial
          attach="material"
          map={texture}
        ></meshStandardMaterial>
      </mesh>
    </RigidBody>
  );
};
