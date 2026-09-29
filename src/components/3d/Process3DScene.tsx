"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Process3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animId: number;
    const clock = new THREE.Clock();

    // 1. Scene & Perspective Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.2, 7.2);
    camera.lookAt(0, 0, 0);

    // 2. Responsive WebGL Renderer
    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting (Navy Ambient + Dual Focused Orange / Amber Speculars)
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.8);
    scene.add(ambientLight);

    const primaryOrangeLight = new THREE.PointLight(0xff5e3a, 6.5, 35, 1.2);
    primaryOrangeLight.position.set(3.0, 4.0, 3.5);
    scene.add(primaryOrangeLight);

    const secondaryAmberLight = new THREE.PointLight(0xff8c42, 4.5, 25, 1.5);
    secondaryAmberLight.position.set(-3.5, -1.0, 2.5);
    scene.add(secondaryAmberLight);

    const topDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    topDirectionalLight.position.set(0, 6, 3);
    scene.add(topDirectionalLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 4. Materials
    const navyPlinthMat = new THREE.MeshStandardMaterial({
      color: 0x0c1220,
      roughness: 0.3,
      metalness: 0.85,
    });

    const navyAccentMat = new THREE.MeshStandardMaterial({
      color: 0x162035,
      roughness: 0.25,
      metalness: 0.9,
    });

    const orangeGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.5,
    });

    const amberGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff8c42,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.6,
    });

    const wireMat = new THREE.LineBasicMaterial({
      color: 0xff5e3a,
      transparent: true,
      opacity: 0.4,
    });

    // 5. Isometric Growth Process Base Platform
    const baseGeo = new THREE.BoxGeometry(6.6, 0.2, 2.6);
    const baseMesh = new THREE.Mesh(baseGeo, navyPlinthMat);
    baseMesh.position.y = -1.1;
    rootGroup.add(baseMesh);

    // Neon Accent Border on Base
    const borderGeo = new THREE.BoxGeometry(6.64, 0.04, 2.64);
    const borderMesh = new THREE.Mesh(borderGeo, orangeGlowMat);
    borderMesh.position.y = -1.0;
    rootGroup.add(borderMesh);

    // Grid coordinate lines on platform
    const gridGeo = new THREE.PlaneGeometry(6.2, 2.3, 12, 6);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2;
    gridMesh.position.y = -0.98;
    rootGroup.add(gridMesh);

    // 6. The 4 Progressive Marketing Stages (Audit -> Blueprint -> Execution -> Scale)
    const stageConfigs = [
      {
        x: -2.25,
        y: -0.65,
        z: 0,
        label: "01 AUDIT",
        type: "radar",
        scale: 0.75,
        mat: amberGlowMat,
      },
      {
        x: -0.75,
        y: -0.35,
        z: 0.15,
        label: "02 BLUEPRINT",
        type: "funnel",
        scale: 0.85,
        mat: orangeGlowMat,
      },
      {
        x: 0.75,
        y: 0.05,
        z: -0.15,
        label: "03 EXECUTION",
        type: "broadcast",
        scale: 1.0,
        mat: amberGlowMat,
      },
      {
        x: 2.25,
        y: 0.65,
        z: 0,
        label: "04 REVENUE SCALE",
        type: "pinnacle",
        scale: 1.25,
        mat: orangeGlowMat,
      },
    ];

    const stageNodes: {
      group: THREE.Group;
      type: string;
      spinMesh?: THREE.Mesh;
      pulseRings?: THREE.Mesh[];
      pinnacleMesh?: THREE.Mesh;
    }[] = [];

    stageConfigs.forEach((cfg) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(cfg.x, cfg.y, cfg.z);
      rootGroup.add(nodeGroup);

      // Pedestal Cylinder
      const pedestalHeight = cfg.y - (-1.0);
      const pedestalGeo = new THREE.CylinderGeometry(0.35 * cfg.scale, 0.45 * cfg.scale, pedestalHeight, 16);
      const pedestal = new THREE.Mesh(pedestalGeo, navyAccentMat);
      pedestal.position.y = -pedestalHeight / 2;
      nodeGroup.add(pedestal);

      if (cfg.type === "radar") {
        // Stage 1: Radar/Audit Node
        const core = new THREE.Mesh(new THREE.DodecahedronGeometry(0.24 * cfg.scale), cfg.mat);
        nodeGroup.add(core);

        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.42 * cfg.scale, 0.02, 16, 32),
          orangeGlowMat
        );
        ring.rotation.x = Math.PI / 2.5;
        nodeGroup.add(ring);

        stageNodes.push({ group: nodeGroup, type: cfg.type, spinMesh: ring });
      } else if (cfg.type === "funnel") {
        // Stage 2: Strategy Funnel Blueprint
        const funnelMesh = new THREE.Mesh(
          new THREE.ConeGeometry(0.35 * cfg.scale, 0.6 * cfg.scale, 16, 1, true),
          orangeGlowMat
        );
        funnelMesh.rotation.x = Math.PI;
        nodeGroup.add(funnelMesh);

        const innerOrb = new THREE.Mesh(new THREE.SphereGeometry(0.14 * cfg.scale, 16, 16), amberGlowMat);
        innerOrb.position.y = 0.1;
        nodeGroup.add(innerOrb);

        stageNodes.push({ group: nodeGroup, type: cfg.type, spinMesh: funnelMesh });
      } else if (cfg.type === "broadcast") {
        // Stage 3: Multichannel Execution Node
        const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.28 * cfg.scale), cfg.mat);
        nodeGroup.add(core);

        const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.46 * cfg.scale, 0.02, 12, 32), amberGlowMat);
        const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.6 * cfg.scale, 0.015, 12, 32), orangeGlowMat);
        ring1.rotation.x = Math.PI / 3;
        ring2.rotation.y = Math.PI / 4;
        nodeGroup.add(ring1, ring2);

        stageNodes.push({ group: nodeGroup, type: cfg.type, spinMesh: ring1, pulseRings: [ring1, ring2] });
      } else {
        // Stage 4: Compounding Revenue Scale Pinnacle
        const pinnacleGeo = new THREE.IcosahedronGeometry(0.42 * cfg.scale, 0);
        const pinnacle = new THREE.Mesh(pinnacleGeo, orangeGlowMat);
        nodeGroup.add(pinnacle);

        const crown = new THREE.Mesh(new THREE.TorusGeometry(0.68 * cfg.scale, 0.03, 16, 32), amberGlowMat);
        crown.rotation.x = Math.PI / 2.2;
        nodeGroup.add(crown);

        stageNodes.push({ group: nodeGroup, type: cfg.type, spinMesh: pinnacle, pinnacleMesh: crown });
      }
    });

    // 7. Connecting Revenue Data Highway Track (Ascending smooth spline)
    const trackPoints: THREE.Vector3[] = stageConfigs.map((c) => new THREE.Vector3(c.x, c.y, c.z));
    const trackCurve = new THREE.CatmullRomCurve3(trackPoints);

    const trackTubeGeo = new THREE.TubeGeometry(trackCurve, 64, 0.04, 12, false);
    const trackMesh = new THREE.Mesh(trackTubeGeo, orangeGlowMat);
    rootGroup.add(trackMesh);

    // 8. Streaming Real-Time Marketing Data Packets (Flowing from Stage 1 to 4)
    const packetCount = 6;
    const packetGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const packets: { mesh: THREE.Mesh; progress: number; speed: number }[] = [];

    for (let i = 0; i < packetCount; i++) {
      const pMesh = new THREE.Mesh(packetGeo, i % 2 === 0 ? orangeGlowMat : amberGlowMat);
      rootGroup.add(pMesh);
      packets.push({
        mesh: pMesh,
        progress: i / packetCount,
        speed: 0.16 + (i % 3) * 0.03,
      });
    }

    // 9. Floating Ambient Marketing Particles
    const pCount = isMobile ? 25 : 50;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 6.5;
      pPos[i * 3 + 1] = Math.random() * 2.8 - 0.8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff5e3a,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const ambientPoints = new THREE.Points(pGeo, pMat);
    rootGroup.add(ambientPoints);

    // 10. Mouse Interaction & Viewport Observer
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.55;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.45;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 11. Animation Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Slow, majestic root parallax
      rootGroup.rotation.y = time * 0.1 + mouseX * 0.4;
      rootGroup.rotation.x = 0.15 + mouseY * 0.25;

      // Animate Stage Nodes
      stageNodes.forEach((node, idx) => {
        if (node.spinMesh) {
          node.spinMesh.rotation.y = time * (0.8 + idx * 0.2);
          node.spinMesh.rotation.x = time * 0.4;
        }
        if (node.pinnacleMesh) {
          node.pinnacleMesh.rotation.z = -time * 0.6;
          const pulse = 1.0 + Math.sin(time * 3) * 0.1;
          node.pinnacleMesh.scale.set(pulse, pulse, pulse);
        }
      });

      // Animate Flowing Data Packets along the 4-Stage Pathway
      packets.forEach((p) => {
        p.progress = (p.progress + delta * p.speed) % 1.0;
        const pt = trackCurve.getPoint(p.progress);
        p.mesh.position.copy(pt);
        // Packets grow larger as they reach Stage 4 (Revenue scale)
        const scale = 0.8 + p.progress * 0.9;
        p.mesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      baseGeo.dispose();
      borderGeo.dispose();
      gridGeo.dispose();
      trackTubeGeo.dispose();
      packetGeo.dispose();
      pGeo.dispose();

      navyPlinthMat.dispose();
      navyAccentMat.dispose();
      orangeGlowMat.dispose();
      amberGlowMat.dispose();
      wireMat.dispose();
      gridMat.dispose();
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
      className="relative w-full h-[320px] sm:h-[400px] pointer-events-none select-none flex items-center justify-center"
      aria-label="3D 4-Step Performance Marketing & Revenue Scaling Engine"
    />
  );
}
