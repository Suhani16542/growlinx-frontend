"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Services3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.5;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting (Orange & Amber)
    const ambientLight = new THREE.AmbientLight(0x0a0f1d, 2.0);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xff5e3a, 4.5, 30);
    orangeLight.position.set(3, 2, 4);
    scene.add(orangeLight);

    const amberLight = new THREE.PointLight(0xff7a45, 4.0, 30);
    amberLight.position.set(-3, -2, 3);
    scene.add(amberLight);

    // 4. Central 3D Network Hub
    const group = new THREE.Group();
    scene.add(group);

    // Central Polyhedron Core
    const coreGeo = new THREE.DodecahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner Glowing Core (Orange)
    const innerGeo = new THREE.OctahedronGeometry(0.7, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Surrounding Node Satellites (Orange & Amber)
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMatOrange = new THREE.MeshBasicMaterial({ color: 0xff5e3a });
    const nodeMatAmber = new THREE.MeshBasicMaterial({ color: 0xff7a45 });

    const nodes: THREE.Mesh[] = [];
    const nodeCount = 8;
    const radius = 2.2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const y = Math.sin(i * 1.5) * 0.8;
      const mesh = new THREE.Mesh(nodeGeo, i % 2 === 0 ? nodeMatOrange : nodeMatAmber);
      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      group.add(mesh);
      nodes.push(mesh);
    }

    // Connective Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xff5e3a,
      transparent: true,
      opacity: 0.45,
    });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(nodeCount * 6);

    for (let i = 0; i < nodeCount; i++) {
      linePositions[i * 6] = 0;
      linePositions[i * 6 + 1] = 0;
      linePositions[i * 6 + 2] = 0;
      linePositions[i * 6 + 3] = nodes[i].position.x;
      linePositions[i * 6 + 4] = nodes[i].position.y;
      linePositions[i * 6 + 5] = nodes[i].position.z;
    }

    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreMesh.rotation.x = time * 0.2 + mouseY * 0.5;
      coreMesh.rotation.y = time * 0.3 + mouseX * 0.5;

      innerMesh.rotation.y = -time * 0.5;
      innerMesh.rotation.x = time * 0.3;

      group.rotation.y = time * 0.15 + mouseX * 0.3;
      group.rotation.x = mouseY * 0.3;

      for (let i = 0; i < nodeCount; i++) {
        const baseAngle = (i / nodeCount) * Math.PI * 2;
        const currentAngle = baseAngle + time * 0.2;
        const y = Math.sin(time + i) * 0.3 + (i % 2 === 0 ? 0.4 : -0.4);
        nodes[i].position.set(Math.cos(currentAngle) * radius, y, Math.sin(currentAngle) * radius);
      }

      const posAttr = lineGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < nodeCount; i++) {
        posAttr.setXYZ(i * 2 + 1, nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMatOrange.dispose();
      nodeMatAmber.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none select-none flex items-center justify-center"
    />
  );
}
