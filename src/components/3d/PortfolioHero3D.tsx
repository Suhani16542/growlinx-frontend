"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface PortfolioHero3DProps {
  className?: string;
}

export function PortfolioHero3D({ className = "" }: PortfolioHero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMetric, setActiveMetric] = useState<"roas" | "traffic" | "revenue">("roas");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.2, 7.2);
    camera.lookAt(0, 0.2, 0);

    // 2. WebGL Renderer
    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lights
    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.8);
    scene.add(ambientLight);

    const orangePointLight = new THREE.PointLight(0xff5e3a, 7.0, 35, 1.2);
    orangePointLight.position.set(3, 4, 3);
    scene.add(orangePointLight);

    const amberLight = new THREE.PointLight(0xffaa44, 4.5, 30, 1.4);
    amberLight.position.set(-3.5, -1, 2.5);
    scene.add(amberLight);

    const topDirectional = new THREE.DirectionalLight(0xffffff, 1.2);
    topDirectional.position.set(0, 8, 4);
    scene.add(topDirectional);

    // 4. Root & Interactive Groups
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const darkNavyMat = new THREE.MeshStandardMaterial({
      color: 0x0a0f1d,
      roughness: 0.2,
      metalness: 0.9,
    });

    const orangeGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.85,
      roughness: 0.15,
      metalness: 0.4,
    });

    const amberGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffa834,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.5,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      thickness: 0.5,
    });

    // 5. High-Tech Multi-Tier Base Plinth
    const basePlinthGeo = new THREE.CylinderGeometry(2.8, 3.1, 0.22, 10);
    const basePlinth = new THREE.Mesh(basePlinthGeo, darkNavyMat);
    basePlinth.position.y = -1.35;
    mainGroup.add(basePlinth);

    const innerRingGeo = new THREE.TorusGeometry(2.6, 0.03, 16, 64);
    const innerRing = new THREE.Mesh(innerRingGeo, orangeGlowMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = -1.22;
    mainGroup.add(innerRing);

    // 6. Dynamic 3D Growth Bars (Climbing Exponential Campaign Graph)
    const growthBars: { mesh: THREE.Mesh; baseHeight: number; speed: number; phase: number }[] = [];
    const barCount = 6;
    const barWidth = 0.28;
    const startX = -1.5;
    const stepX = 0.6;

    for (let i = 0; i < barCount; i++) {
      const h = 0.7 + Math.pow(i, 1.45) * 0.45;
      const barGeo = new THREE.BoxGeometry(barWidth, h, barWidth);
      const isTopPeak = i >= barCount - 2;
      const barMesh = new THREE.Mesh(
        barGeo,
        isTopPeak ? orangeGlowMat : i % 2 === 0 ? darkNavyMat : amberGlowMat
      );
      barMesh.position.set(startX + i * stepX, -1.2 + h / 2, (i - 2.5) * 0.12);
      mainGroup.add(barMesh);

      // Top Cap on each bar
      const capGeo = new THREE.BoxGeometry(barWidth * 1.08, 0.05, barWidth * 1.08);
      const capMesh = new THREE.Mesh(capGeo, orangeGlowMat);
      capMesh.position.y = h / 2 + 0.03;
      barMesh.add(capMesh);

      growthBars.push({
        mesh: barMesh,
        baseHeight: h,
        speed: 1.5 + i * 0.3,
        phase: i * 0.8,
      });
    }

    // 7. Spline Growth Vector with Pulsing Signal Particles
    const curvePoints = [
      new THREE.Vector3(-1.8, -0.9, 0.2),
      new THREE.Vector3(-1.1, -0.6, 0.1),
      new THREE.Vector3(-0.4, -0.1, 0.3),
      new THREE.Vector3(0.3, 0.5, 0.0),
      new THREE.Vector3(1.0, 1.1, 0.2),
      new THREE.Vector3(1.7, 1.8, 0.1),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.035, 12, false);
    const tubeMesh = new THREE.Mesh(tubeGeo, orangeGlowMat);
    mainGroup.add(tubeMesh);

    // Glowing Peak Beacon (Apex of Growth Curve)
    const peakBeaconGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const peakBeacon = new THREE.Mesh(peakBeaconGeo, orangeGlowMat);
    peakBeacon.position.copy(curvePoints[curvePoints.length - 1]);
    mainGroup.add(peakBeacon);

    const peakBeaconRingGeo = new THREE.TorusGeometry(0.35, 0.02, 16, 32);
    const peakBeaconRing = new THREE.Mesh(peakBeaconRingGeo, amberGlowMat);
    peakBeaconRing.position.copy(peakBeacon.position);
    mainGroup.add(peakBeaconRing);

    // 8. Orbiting Hologram Rings & Attribution Satellites
    const orbitRing1Geo = new THREE.TorusGeometry(2.0, 0.018, 16, 64);
    const orbitRing1 = new THREE.Mesh(orbitRing1Geo, orangeGlowMat);
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = Math.PI / 6;
    mainGroup.add(orbitRing1);

    const orbitRing2Geo = new THREE.TorusGeometry(2.4, 0.015, 16, 64);
    const orbitRing2 = new THREE.Mesh(orbitRing2Geo, amberGlowMat);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.z = Math.PI / 5;
    mainGroup.add(orbitRing2);

    // Satellites orbiting around the core
    const satellites: { group: THREE.Group; radius: number; speed: number; angle: number; yOffset: number }[] = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satGroup = new THREE.Group();
      const nodeGeo = new THREE.OctahedronGeometry(0.12);
      const nodeMesh = new THREE.Mesh(nodeGeo, i === 0 ? orangeGlowMat : glassMat);
      satGroup.add(nodeMesh);
      mainGroup.add(satGroup);

      satellites.push({
        group: satGroup,
        radius: 1.8 + (i % 2) * 0.6,
        speed: (i % 2 === 0 ? 0.9 : -0.7) * (0.8 + i * 0.15),
        angle: (i * (Math.PI * 2)) / satCount,
        yOffset: -0.2 + i * 0.4,
      });
    }

    // 9. Floating Particle Field (Data Attribution Dust)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.0;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4.0;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff5e3a,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Tilt
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.25;
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05 + 0.003;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Oscillate Growth Bars
      growthBars.forEach((bar) => {
        const scaleY = 1 + Math.sin(elapsedTime * bar.speed + bar.phase) * 0.12;
        bar.mesh.scale.set(1, scaleY, 1);
        bar.mesh.position.y = -1.2 + (bar.baseHeight * scaleY) / 2;
      });

      // Peak Ring Animation
      peakBeaconRing.rotation.x = elapsedTime * 1.5;
      peakBeaconRing.rotation.y = elapsedTime * 2.0;
      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.15;
      peakBeacon.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate Rings
      orbitRing1.rotation.z = elapsedTime * 0.35;
      orbitRing2.rotation.y = elapsedTime * 0.25;

      // Orbit Satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed * 0.015;
        sat.group.position.x = Math.cos(sat.angle) * sat.radius;
        sat.group.position.z = Math.sin(sat.angle) * sat.radius;
        sat.group.position.y = sat.yOffset + Math.sin(elapsedTime * 2 + sat.angle) * 0.2;
        sat.group.rotation.x += 0.02;
        sat.group.rotation.y += 0.03;
      });

      // Float Particles
      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${className}`}>
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] relative cursor-grab active:cursor-grabbing rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0A0F1D] via-[#0F172A] to-[#141C2E] border border-white/15 shadow-2xl"
      >
        {/* Top Floating Glassmorphism Telemetry Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-2 bg-[#0A0F1D]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <span className="h-2 w-2 rounded-full bg-[#FF5E3A] animate-pulse" />
            <span className="text-[11px] font-black text-[#FAF6F0] uppercase tracking-wider">
              3D Campaign Attributor
            </span>
          </div>

          <div className="bg-[#0A0F1D]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#FF5E3A]">
            LIVE ENGINE
          </div>
        </div>

        {/* Floating Interactive Metric Badges */}
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 z-20">
          <button
            type="button"
            onClick={() => setActiveMetric("roas")}
            className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
              activeMetric === "roas"
                ? "bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-lg shadow-[#FF5E3A]/30 scale-[1.02]"
                : "bg-[#0A0F1D]/85 backdrop-blur-md border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-wider block opacity-80">
              Avg ROAS
            </span>
            <span className="text-xs sm:text-sm font-black leading-tight block mt-0.5">
              4.8X Return
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetric("traffic")}
            className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
              activeMetric === "traffic"
                ? "bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-lg shadow-[#FF5E3A]/30 scale-[1.02]"
                : "bg-[#0A0F1D]/85 backdrop-blur-md border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-wider block opacity-80">
              Organic Lift
            </span>
            <span className="text-xs sm:text-sm font-black leading-tight block mt-0.5">
              +240% Speed
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetric("revenue")}
            className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
              activeMetric === "revenue"
                ? "bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-lg shadow-[#FF5E3A]/30 scale-[1.02]"
                : "bg-[#0A0F1D]/85 backdrop-blur-md border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-wider block opacity-80">
              Client Pipe
            </span>
            <span className="text-xs sm:text-sm font-black leading-tight block mt-0.5">
              $32M+ ARR
            </span>
          </button>
        </div>

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF5E3A]/15 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
}
