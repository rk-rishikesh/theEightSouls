import { useRef, useState } from 'react'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Target = (props:any) => {
  
  const meshRef = useRef<any>()
  const [clicked, click] = useState<any>(false)
  const [clickCount, clickCounter] = useState<number>(0)

  const shoot = () => {
    console.log("Shooted Target One")
    clickCounter(clickCount + 1);
    if(clickCount > 5) {
      click(true)
    }
  }

  const burntTexture = useLoader(TextureLoader, "./burnt.jpeg");
  const tntTexture = useLoader(TextureLoader, "./tnt.jpg");

  return (
    <group {...props}>

      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1.5}
        onClick={() => shoot()}
        // onPointerOver={() => hover(true)}
        // onPointerOut={() => hover(false)}
        >
        <boxGeometry/>
        {/* <meshStandardMaterial color={hovered ? 'pink' : '#5de4c7'} /> */}
        <meshStandardMaterial
          attach="material"
          map={!clicked ? tntTexture : burntTexture}
        ></meshStandardMaterial>
      </mesh>
      
    </group>
  )
}

