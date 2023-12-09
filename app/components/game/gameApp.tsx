import * as TWEEN from "@tweenjs/tween.js";
import {
  PointerLockControls,
  Environment
} from "@react-three/drei";
import { Ground } from "./Ground.tsx";
import { Physics } from "@react-three/rapier";
import { Player } from "./Player.tsx";
import { Cube } from "./Cube.tsx";
import { useFrame } from "@react-three/fiber";
import { create } from "zustand";
import React from "react";
import { Target } from "./Target.tsx";
const shadowOffset = 50;

export const usePointerLockControlsStore = create(() => ({
  isLock: false,
}));

export const App = () => {
  useFrame(() => {
    TWEEN.update();
  });

  const pointerLockControlsLockHandler = () => {
    usePointerLockControlsStore.setState({ isLock: true });
  };

  const pointerLockControlsUnlockHandler = () => {
    usePointerLockControlsStore.setState({ isLock: false });
  };

  return (
    <>
      <PointerLockControls
        onLock={pointerLockControlsLockHandler}
        onUnlock={pointerLockControlsUnlockHandler}
      />
      <Environment files="/map.hdr" ground={{ scale: 100 }} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={1.5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[100, 100, 0]}
      />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cube position={[1, 0, 10]} />
        <Cube position={[2, 0, 7]} />
        <Cube position={[6, 0, 3]} />
        <Cube position={[10, 0, 10]} />
        <Cube position={[24, 0, 10]} />
        <Target position={[10, 0, 15]} />

      </Physics>
    </>
  );
};

export default App;
