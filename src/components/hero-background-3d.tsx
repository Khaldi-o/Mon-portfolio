"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PointsContent() {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const mousePosition = useRef(new THREE.Vector2(0, 0));

    const count = 9000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const r = 3.2;
            pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    const colors = useMemo(() => {
        const col = new Float32Array(count * 3);
        const colorPalette = [
            new THREE.Color("#06b6d4"), // Cyan
            new THREE.Color("#8b5cf6"), // Purple
            new THREE.Color("#CBD5E1"), // Smokey White (Slate 300)
        ];
        for (let i = 0; i < count; i++) {
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            col[i * 3] = color.r;
            col[i * 3 + 1] = color.g;
            col[i * 3 + 2] = color.b;
        }
        return col;
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
    }), []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse to -1, 1 range across the entire window
            // This ensures it works even when hovering over text/images
            mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        if (!materialRef.current) return;
        uniforms.uTime.value = state.clock.getElapsedTime();
        // Using our global normalized coordinates
        uniforms.uMouse.value.lerp(new THREE.Vector2(mousePosition.current.x * 2, mousePosition.current.y * 2), 0.15);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aColor"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                transparent
                vertexColors
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          attribute vec3 aColor;
          varying vec3 vColor;
          varying float vDist;
          void main() {
            vColor = aColor;
            vec3 pos = position;
            
            // Subtle rotation / noise
            pos.x += sin(uTime * 0.4 + pos.y) * 0.1;
            pos.y += cos(uTime * 0.4 + pos.z) * 0.1;
            pos.z += sin(uTime * 0.4 + pos.x) * 0.1;

            // Mouse deformation - STRONGER
            float d = distance(pos.xy, uMouse);
            vDist = d;
            if (d < 2.5) {
              float force = (2.5 - d) / 2.5;
              pos += normalize(pos) * force * 1.2;
            }

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 15.0 * (1.0 / -mvPosition.z); // Kept 15.0 per user edit
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
                fragmentShader={`
          varying vec3 vColor;
          varying float vDist;
          void main() {
            float strength = distance(gl_PointCoord, vec2(0.5));
            strength = 1.0 - strength;
            strength = pow(strength, 2.5);
            
            gl_FragColor = vec4(vColor, strength);
          }
        `}
            />
        </points>
    );
}

export default function HeroBackground3D() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-10 h-full w-full pointer-events-none" style={{ minHeight: '100%' }}>
            <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <PointsContent />
            </Canvas>
        </div>
    );
}
