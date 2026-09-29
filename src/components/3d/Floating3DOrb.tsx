"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Floating3DOrbProps {
  color?: "orange" | "amber";
  size?: number;
}

export function Floating3DOrb({ color = "orange", size = 180 }: Floating3DOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      color === "orange" ? 0xff5e3a : 0xff7a45,
      3.5,
      10
    );
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.2, 1);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    const innerGeo = new THREE.SphereGeometry(0.65, 24, 24);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      roughness: 0.1,
      metalness: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mesh.rotation.x = time * 0.4 + mouseY;
      mesh.rotation.y = time * 0.5 + mouseX;
      innerMesh.rotation.y = -time * 0.3;

      group.position.y = Math.sin(time * 1.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      geo.dispose();
      mat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, size]);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className="pointer-events-none select-none drop-shadow-2xl"
    />
  );
}
