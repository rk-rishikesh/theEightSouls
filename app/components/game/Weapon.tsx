import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import {WeaponModel} from "./WeaponModel.tsx";
import {useEffect, useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {usePointerLockControlsStore} from "./gameApp.tsx";
import {create} from "zustand";
import { TextureLoader } from "three";

const VITE_SHOOT_BUTTON:string = "0";
const VITE_AIM_BUTTON:string = "2";
const SHOOT_BUTTON = parseInt(VITE_SHOOT_BUTTON);
const AIM_BUTTON = parseInt(VITE_AIM_BUTTON);
const recoilAmount = 0.03;
const recoilDuration = 50;
const easing = TWEEN.Easing.Quadratic.Out;

export const useAimingStore = create((set) => ({
    isAiming: null,
    setIsAiming: (value:any) => set(() => ({ isAiming: value }))
}));

export const Weapon = (props:any) => {
    const [recoilAnimation, setRecoilAnimation] = useState<any>(null);
    const [isRecoilAnimationFinished, setIsRecoilAnimationFinished] = useState<any>(true);
    const [isShooting, setIsShooting] = useState<any>(false);
    const setIsAiming = useAimingStore((state:any) => state.setIsAiming);
    const weaponRef = useRef<any>();

    let audio = new Audio("https://gateway.lighthouse.storage/ipfs/QmaBDBAYLJGGERDKf2JZNoibWgwhs39VXUgZZKCZLy5qwZ/single-shoot-ak47.wav");
    const texture = useLoader(TextureLoader, "https://gateway.lighthouse.storage/ipfs/QmTtd2M5WqJDtijv35jQ8zT2EHfPapynS1NZ8Go9ftHCMx");
    const [flashAnimation, setFlashAnimation] = useState<any>(null);

    useEffect(() => {
        document.addEventListener('mousedown', (ev) => {
            ev.preventDefault();
            mouseButtonHandler(ev.button, true);
        });

        document.addEventListener('mouseup', (ev) => {
            ev.preventDefault();
            mouseButtonHandler(ev.button, false);
        });
    }, []);

    const mouseButtonHandler = (button:any, state:any) => {
        if (!usePointerLockControlsStore.getState().isLock) return;

        switch (button) {
            case SHOOT_BUTTON:
                setIsShooting(state);
                break;
            case AIM_BUTTON:
                setIsAiming(state);
                break;
        }
    };

    const generateRecoilOffset = () => {
        return new THREE.Vector3(
            Math.random() * recoilAmount,
            Math.random() * recoilAmount,
            Math.random() * recoilAmount,
        );
    };

    const generateNewPositionOfRecoil = (currentPosition = new THREE.Vector3(0, 0, 0)) => {
        const recoilOffset = generateRecoilOffset();
        return currentPosition.clone().add(recoilOffset);
    };

    const initRecoilAnimation = () => {
        const currentPosition = new THREE.Vector3(0, 0, 0);
        const newPosition = generateNewPositionOfRecoil(currentPosition);

        const twRecoilAnimation = new TWEEN.Tween(currentPosition)
            .to(newPosition, recoilDuration)
            .easing(easing)
            .repeat(2)
            .yoyo(true)
            .onUpdate(() => {
                weaponRef.current.position.copy(currentPosition);
            })
            .onStart(() => {
                setIsRecoilAnimationFinished(false);
            })
            .onComplete(() => {
                setIsRecoilAnimationFinished(true);
            });

        setRecoilAnimation(twRecoilAnimation);
    };

    const startShooting = () => {
        if (!recoilAnimation && !flashAnimation) return;
        audio.play();
        recoilAnimation.start();
        flashAnimation.start();
    };

    useEffect(() => {
        initRecoilAnimation();
    }, []);

    useEffect(() => {
        if (isShooting) {
            startShooting();
        }
    }, [isShooting]);

    useFrame(() => {
        if (isShooting && isRecoilAnimationFinished) {
            startShooting();
        }
    });

    const [flashOpacity, setFlashOpacity] = useState(0);

    const initFlashAnimation = () => {
        const currentFlashParams = { opacity: 0 };

        const twFlashAnimation = new TWEEN.Tween(currentFlashParams)
            .to({ opacity: 1 }, recoilDuration)
            .easing(easing)
            .onUpdate(() => {
                setFlashOpacity(() => currentFlashParams.opacity);
            })
            .onComplete(() => {
                setFlashOpacity(() => 0);
            });

        setFlashAnimation(twFlashAnimation);
    };

    useEffect(() => {
        initFlashAnimation();
    }, []);

    return (
        <group {...props}>
            <group ref={weaponRef}>
                <mesh position={[0, 0.05, -2]} scale={[1, 1, 0]}>
                    <planeGeometry attach="geometry" args={[1, 1]} />
                    <meshBasicMaterial attach="material" map={texture} transparent={true} opacity={flashOpacity} />
                </mesh>
                <WeaponModel />
            </group>
        </group>
    );
};