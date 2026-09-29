"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // 2. WebGL Renderer with High Performance & Antialiasing
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Vibrant Orange & Amber Dual Accent)
    const ambientLight = new THREE.AmbientLight(0x0a0f1d, 2.0);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xff5e3a, 4.5, 50);
    orangeLight.position.set(4, 3, 4);
    scene.add(orangeLight);

    const amberLight = new THREE.PointLight(0xff7a45, 4.0, 50);
    amberLight.position.set(-4, -3, 3);
    scene.add(amberLight);

    const topLight = new THREE.DirectionalLight(0xfff5eb, 1.2);
    topLight.position.set(0, 8, 4);
    scene.add(topLight);

    // 4. Main 3D Interactive Centerpiece: Layered Geometric Core
    const group = new THREE.Group();
    scene.add(group);

    // Outer Torus Knot (Wireframe Structure)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.5, 0.35, 128, 32, 2, 3);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: true,
      emissive: 0x0a0f1d,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    group.add(torusKnot);

    // Inner Glowing Core Sphere (Orange)
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 3);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.5,
      metalness: 0.3,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.8,
      transparent: true,
      opacity: 0.9,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerCore);

    // Orbital Orbit Rings
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff5e3a,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xff7a45,
      transparent: true,
      opacity: 0.7,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // 5. Constellation Floating Particle Field
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 320;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xff5e3a);
    const amberColor = new THREE.Color(0xff7a45);
    const whiteColor = new THREE.Color(0xfaf6f0);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const colorPick = Math.random();
      const chosenColor = colorPick > 0.6 ? orangeColor : colorPick > 0.3 ? amberColor : whiteColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // 6. Smooth Mouse Interaction (Lerp Dampening)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse interaction
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate 3D elements smoothly
      torusKnot.rotation.x = elapsedTime * 0.25 + mouseY * 0.5;
      torusKnot.rotation.y = elapsedTime * 0.35 + mouseX * 0.5;

      innerCore.rotation.y = -elapsedTime * 0.4;
      innerCore.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.x = elapsedTime * 0.18;

      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      // Dynamic light orbit
      orangeLight.position.x = Math.sin(elapsedTime * 0.8) * 4 + 1;
      orangeLight.position.y = Math.cos(elapsedTime * 0.6) * 3;
      amberLight.position.x = -Math.cos(elapsedTime * 0.7) * 4 - 1;
      amberLight.position.y = -Math.sin(elapsedTime * 0.5) * 3;

      // Group tilt based on mouse
      group.rotation.y = mouseX * 0.4;
      group.rotation.x = -mouseY * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[540px] flex items-center justify-center pointer-events-none select-none"
    />
  );
}
