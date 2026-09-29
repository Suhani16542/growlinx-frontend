"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export type Marketing3DVariant =
  | "seo"
  | "paid-advertising"
  | "social-media-management"
  | "app-marketing"
  | "influencer-management"
  | "influencer-marketing"
  | "youtube-monetization"
  | "youtube-marketing"
  | "general";

interface MarketingDashboard3DProps {
  variant?: Marketing3DVariant | string;
}

export function MarketingDashboard3D({
  variant = "paid-advertising",
}: MarketingDashboard3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animId: number;
    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.2, 7.0);
    camera.lookAt(0, 0.2, 0);

    // 2. WebGL Renderer with Filmic Color Grading
    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting System (Dark Navy + High Contrast Neon Orange)
    const ambientLight = new THREE.AmbientLight(0x0e172a, 3.5);
    scene.add(ambientLight);

    const primaryOrangeLight = new THREE.PointLight(0xff5e3a, 8.0, 45, 1.2);
    primaryOrangeLight.position.set(3.5, 4.0, 3.0);
    scene.add(primaryOrangeLight);

    const secondaryAmberLight = new THREE.PointLight(0xff9933, 5.0, 35, 1.3);
    secondaryAmberLight.position.set(-3.5, -0.5, 2.5);
    scene.add(secondaryAmberLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 1.3);
    topRimLight.position.set(0, 8, 4);
    scene.add(topRimLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Premium Materials
    const navyPlinthMat = new THREE.MeshStandardMaterial({
      color: 0x0a0f1d,
      roughness: 0.15,
      metalness: 0.92,
    });

    const navyPlinthAccentMat = new THREE.MeshStandardMaterial({
      color: 0x141d30,
      roughness: 0.12,
      metalness: 0.95,
    });

    const orangeGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xff451a,
      emissiveIntensity: 0.95,
      roughness: 0.1,
      metalness: 0.4,
    });

    const amberGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffaa44,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.5,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.55,
      thickness: 0.5,
    });

    // 4. Futuristic Multi-Tier Hexagonal Base Platform
    const basePlinthGeo = new THREE.CylinderGeometry(2.7, 3.0, 0.22, 12);
    const basePlinth = new THREE.Mesh(basePlinthGeo, navyPlinthMat);
    basePlinth.position.y = -1.35;
    rootGroup.add(basePlinth);

    const midPlinthGeo = new THREE.CylinderGeometry(2.3, 2.5, 0.16, 12);
    const midPlinth = new THREE.Mesh(midPlinthGeo, navyPlinthAccentMat);
    midPlinth.position.y = -1.18;
    rootGroup.add(midPlinth);

    const baseRingGeo = new THREE.TorusGeometry(2.45, 0.03, 16, 64);
    const baseRing = new THREE.Mesh(baseRingGeo, orangeGlowMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -1.12;
    rootGroup.add(baseRing);

    // 5. Central Global Attribution Network Sphere
    const sphereGroup = new THREE.Group();
    sphereGroup.position.set(0, 0.35, 0);
    rootGroup.add(sphereGroup);

    // Holographic Network Wireframe Sphere
    const sphereWireGeo = new THREE.IcosahedronGeometry(1.25, 2);
    const sphereWireMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.4,
    });
    const sphereWireMesh = new THREE.Mesh(sphereWireGeo, sphereWireMat);
    sphereGroup.add(sphereWireMesh);

    // Inner Glowing Core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.55);
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, orangeGlowMat);
    sphereGroup.add(innerCoreMesh);

    // Dual Multi-Axis Gyroscope Rings
    const gyroRing1Geo = new THREE.TorusGeometry(1.65, 0.025, 16, 64);
    const gyroRing1 = new THREE.Mesh(gyroRing1Geo, orangeGlowMat);
    gyroRing1.rotation.x = Math.PI / 3;
    gyroRing1.rotation.y = Math.PI / 6;
    sphereGroup.add(gyroRing1);

    const gyroRing2Geo = new THREE.TorusGeometry(1.95, 0.02, 16, 64);
    const gyroRing2 = new THREE.Mesh(gyroRing2Geo, amberGlowMat);
    gyroRing2.rotation.x = -Math.PI / 4;
    gyroRing2.rotation.z = Math.PI / 5;
    sphereGroup.add(gyroRing2);

    // 6. Dynamic Rising Multi-Channel Analytics Bar Matrix
    const analyticsBars: { mesh: THREE.Mesh; baseHeight: number; speed: number; phase: number }[] = [];
    const barCount = 6;
    const barRadius = 0.18;
    for (let i = 0; i < barCount; i++) {
      const angle = (i * Math.PI * 2) / barCount;
      const h = 0.65 + Math.sin(i * 1.5) * 0.3 + i * 0.15;
      const barGeo = new THREE.CylinderGeometry(barRadius, barRadius * 1.05, h, 16);
      const isLeadBar = i % 2 === 0;
      const barMesh = new THREE.Mesh(barGeo, isLeadBar ? orangeGlowMat : amberGlowMat);

      const rad = 1.65;
      barMesh.position.set(Math.cos(angle) * rad, -1.18 + h / 2, Math.sin(angle) * rad);
      rootGroup.add(barMesh);

      // Glowing Bar Head Beacon
      const capGeo = new THREE.SphereGeometry(barRadius * 1.15, 12, 12);
      const capMesh = new THREE.Mesh(capGeo, orangeGlowMat);
      capMesh.position.y = h / 2 + 0.02;
      barMesh.add(capMesh);

      analyticsBars.push({
        mesh: barMesh,
        baseHeight: h,
        speed: 1.6 + i * 0.35,
        phase: i * 0.9,
      });
    }

    // 7. Orbiting Attribution Satellite Beacons (Representing Global Signals)
    const satellites: { group: THREE.Group; radius: number; speed: number; angle: number; yOffset: number }[] = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satGroup = new THREE.Group();
      const nodeGeo = new THREE.DodecahedronGeometry(0.14);
      const nodeMesh = new THREE.Mesh(nodeGeo, i === 0 ? orangeGlowMat : glassMat);
      satGroup.add(nodeMesh);

      const ringG = new THREE.TorusGeometry(0.24, 0.015, 12, 24);
      const ringM = new THREE.Mesh(ringG, amberGlowMat);
      ringM.rotation.x = Math.PI / 2;
      satGroup.add(ringM);

      rootGroup.add(satGroup);

      satellites.push({
        group: satGroup,
        radius: 2.1 + (i % 2) * 0.5,
        speed: (i % 2 === 0 ? 0.9 : -0.7) * (0.85 + i * 0.15),
        angle: (i * (Math.PI * 2)) / satCount,
        yOffset: -0.1 + i * 0.35,
      });
    }

    // 8. Connecting Laser Trajectory Spline Arc
    const curvePoints = [
      new THREE.Vector3(-1.6, -0.8, 0.4),
      new THREE.Vector3(-0.8, 0.2, 0.2),
      new THREE.Vector3(0, 0.8, 0.5),
      new THREE.Vector3(0.9, 0.3, -0.2),
      new THREE.Vector3(1.6, 1.4, 0.3),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.028, 8, false);
    const tubeMesh = new THREE.Mesh(tubeGeo, orangeGlowMat);
    rootGroup.add(tubeMesh);

    // 9. Floating Signal Dust Particles
    const particleCount = 65;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5.2;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4.2;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff5e3a,
      size: 0.055,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // Mouse Move Interaction for Smooth Tilting
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
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

    // Intersection Observer
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // 10. Master Animation Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax & Continuous Cinematic Drift
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.25;
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.04 + 0.003;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.04;

      // Sphere & Gyroscope Motions
      sphereWireMesh.rotation.y = elapsedTime * 0.4;
      sphereWireMesh.rotation.x = elapsedTime * 0.2;

      innerCoreMesh.rotation.x = -elapsedTime * 0.6;
      innerCoreMesh.rotation.y = elapsedTime * 0.8;
      const corePulse = 1 + Math.sin(elapsedTime * 2.8) * 0.12;
      innerCoreMesh.scale.set(corePulse, corePulse, corePulse);

      gyroRing1.rotation.z = elapsedTime * 0.45;
      gyroRing2.rotation.y = elapsedTime * 0.35;

      // Oscillating Multi-Channel Bar Heights
      analyticsBars.forEach((bar) => {
        const scaleY = 1 + Math.sin(elapsedTime * bar.speed + bar.phase) * 0.14;
        bar.mesh.scale.set(1, scaleY, 1);
        bar.mesh.position.y = -1.18 + (bar.baseHeight * scaleY) / 2;
      });

      // Orbiting Satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed * 0.015;
        sat.group.position.x = Math.cos(sat.angle) * sat.radius;
        sat.group.position.z = Math.sin(sat.angle) * sat.radius;
        sat.group.position.y = sat.yOffset + Math.sin(elapsedTime * 2 + sat.angle) * 0.18;
        sat.group.rotation.x += 0.02;
        sat.group.rotation.y += 0.03;
      });

      // Ambient Particle Float
      particleSystem.rotation.y = elapsedTime * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[440px] relative cursor-grab active:cursor-grabbing"
    />
  );
}
