import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat"
import * as TWEEN from "@tweenjs/tween.js";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { usePersonControls } from "./hooks.js";
import { useFrame } from "@react-three/fiber";
import { useAimingStore, Weapon } from "./Weapon.tsx";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const easing = TWEEN.Easing.Quadratic.Out;

export const Player = () => {
    const playerRef = useRef<any>();
    const { forward, backward, left, right, jump } = usePersonControls();
    const objectInHandRef = useRef<any>();

    const swayingObjectRef = useRef<any>();
    const [swayingAnimation, setSwayingAnimation] = useState<any>(null);
    const [swayingBackAnimation, setSwayingBackAnimation] = useState<any>(null);
    const [isSwayingAnimationFinished, setIsSwayingAnimationFinished] = useState<any>(true);
    const [swayingNewPosition, setSwayingNewPosition] = useState<any>(new THREE.Vector3(-0.005, 0.005, 0));
    const [swayingDuration, setSwayingDuration] = useState<any>(1000);
    const [isMoving, setIsMoving] = useState<any>(false);
    const isAiming = useAimingStore((state: any) => state.isAiming);

    const rapier = useRapier();

    useFrame((state) => {
        if (!playerRef.current) return;

        // moving player
        const velocity = playerRef.current.linvel();

        frontVector.set(0, 0, backward  - forward);
        sideVector.set(left - right, 0, 0);
        // frontVector.set(0, 0, 1);
        // sideVector.set(1, 0, 0);

        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
        // if (jump && grounded) doJump();
        if (jump) doJump();
        // moving camera
        const { x, y, z } = playerRef.current.translation();
        state.camera.position.set(x, y, z);

        // moving object in hand for the player
        objectInHandRef.current.rotation.copy(state.camera.rotation);
        objectInHandRef.current.position.copy(state.camera.position).add(state.camera.getWorldDirection(rotation));

        setIsMoving(direction.length() > 0);

        if (swayingAnimation && isSwayingAnimationFinished) {
            setIsSwayingAnimationFinished(false);
            swayingAnimation.start();
        }
    });

    const doJump = () => {
        playerRef.current.setLinvel({ x: 0, y: 8, z: 0 });
    };

    const setSwayingAnimationParams = () => {
        if (!swayingAnimation) return;

        swayingAnimation.stop();
        setIsSwayingAnimationFinished(true);

        if (isMoving) {
            setSwayingDuration(() => 300);
            setSwayingNewPosition(() => new THREE.Vector3(-0.05, 0, 0));
        } else {
            setSwayingDuration(() => 1000);
            setSwayingNewPosition(() => new THREE.Vector3(-0.01, 0, 0));
        }
    };

    const initSwayingObjectAnimation = () => {
        const currentPosition = new THREE.Vector3(0, 0, 0);
        const initialPosition = new THREE.Vector3(0, 0, 0);
        const newPosition = swayingNewPosition;
        const animationDuration = swayingDuration;


        const twSwayingAnimation = new TWEEN.Tween(currentPosition)
            .to(newPosition, animationDuration)
            .easing(easing)
            .onUpdate(() => {
                swayingObjectRef.current.position.copy(currentPosition);
            });

        const twSwayingBackAnimation = new TWEEN.Tween(currentPosition)
            .to(initialPosition, animationDuration)
            .easing(easing)
            .onUpdate(() => {
                swayingObjectRef.current.position.copy(currentPosition);
            })
            .onComplete(() => {
                setIsSwayingAnimationFinished(true);
            });

        twSwayingAnimation.chain(twSwayingBackAnimation);

        setSwayingAnimation(twSwayingAnimation);
        setSwayingBackAnimation(twSwayingBackAnimation);

    };

    useEffect(() => {
        setSwayingAnimationParams();
    }, [isMoving]);

    useEffect(() => {
        initSwayingObjectAnimation();
    }, [swayingNewPosition, swayingDuration]);

    const [aimingAnimation, setAimingAnimation] = useState<any>(null);
    const [aimingBackAnimation, setAimingBackAnimation] = useState<any>(null);

    const initAimingAnimation = () => {
        const currentPosition = swayingObjectRef.current.position;
        const finalPosition = new THREE.Vector3(-0.3, -0.01, 0);

        const twAimingAnimation = new TWEEN.Tween(currentPosition)
            .to(finalPosition, 200)
            .easing(easing);

        const twAimingBackAnimation = new TWEEN.Tween(finalPosition.clone())
            .to(new THREE.Vector3(0, 0, 0), 200)
            .easing(easing)
            .onUpdate((position:any) => {
                swayingObjectRef.current.position.copy(position);
            });

        setAimingAnimation(twAimingAnimation);
        setAimingBackAnimation(twAimingBackAnimation);
    };

    useEffect(() => {
        initAimingAnimation();
    }, [swayingObjectRef]);

    useEffect(() => {
        if (isAiming) {
            swayingAnimation.stop();
            aimingAnimation.start();
        } else if (isAiming === false) {
            aimingBackAnimation?.start()
                .onComplete(() => {
                    setSwayingAnimationParams();
                });
        }
    }, [isAiming, aimingAnimation, aimingBackAnimation]);

    return (
        <>
            <RigidBody colliders={false} mass={1} ref={playerRef} lockRotations>
                <mesh castShadow>
                    <capsuleGeometry args={[0.5, 0.5]} />
                    <CapsuleCollider args={[0.75, 0.5]} />
                </mesh>
            </RigidBody>
            <group ref={objectInHandRef}>
                <group ref={swayingObjectRef}>
                    <Weapon position={[0.3, -0.1, 0.3]} scale={0.3} />
                </group>
            </group>
        </>
    );
};