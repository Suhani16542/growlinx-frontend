"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Analytics3DChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 7.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x0a0f1d, 2.0);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xff5e3a, 5.0, 30);
    orangeLight.position.set(3, 4, 3);
    scene.add(orangeLight);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Bar Chart Grid (representing Marketing Attribution & Revenue Velocity)
    const bars: { mesh: THREE.Mesh; baseHeight: number; speed: number }[] = [];
    const barGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
    const barMatDark = new THREE.MeshStandardMaterial({
      color: 0x162035,
      metalness: 0.8,
      roughness: 0.2,
    });
    const barMatOrange = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.6,
      metalness: 0.4,
      roughness: 0.1,
    });

    const rows = 4;
    const cols = 7;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isHighlight = (r === 2 && c === 4) || (r === 1 && c === 5) || (r === 3 && c === 6);
        const mesh = new THREE.Mesh(barGeo, isHighlight ? barMatOrange : barMatDark);
        const x = (c - cols / 2 + 0.5) * 0.65;
        const z = (r - rows / 2 + 0.5) * 0.65;
        const baseHeight = 0.5 + Math.sin(c * 0.8 + r * 0.5) * 0.6 + (c * 0.25);
        mesh.position.set(x, baseHeight / 2, z);
        mesh.scale.set(1, baseHeight, 1);
        group.add(mesh);
        bars.push({ mesh, baseHeight, speed: 1 + (r + c) * 0.2 });
      }
    }

    // Connective Data Points
    const particleGeo = new THREE.BufferGeometry();
    const pCount = 60;
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 6;
      pPositions[i * 3 + 1] = Math.random() * 3;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff5e3a,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const pPoints = new THREE.Points(particleGeo, pMat);
    group.add(pPoints);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      bars.forEach((b, idx) => {
        const dynamicScale = Math.max(0.2, b.baseHeight + Math.sin(time * 2 + idx) * 0.25);
        b.mesh.scale.set(1, dynamicScale, 1);
        b.mesh.position.y = dynamicScale / 2;
      });

      group.rotation.y = time * 0.15 + mouseX * 0.6;
      group.rotation.x = 0.2 + mouseY * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      barGeo.dispose();
      barMatDark.dispose();
      barMatOrange.dispose();
      particleGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[360px] pointer-events-none select-none flex items-center justify-center"
    />
  );
}
