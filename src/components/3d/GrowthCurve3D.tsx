"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GrowthCurve3D() {
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
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 6.2);
    camera.lookAt(0, 0.1, 0);

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
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Navy Ambient + Focused Orange / Amber Specular Lights)
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambientLight);

    const orangePoint = new THREE.PointLight(0xff5e3a, 6.0, 30, 1.2);
    orangePoint.position.set(2.5, 3.5, 3.0);
    scene.add(orangePoint);

    const amberPoint = new THREE.PointLight(0xff8c42, 4.0, 25, 1.5);
    amberPoint.position.set(-2.5, -1.0, 2.0);
    scene.add(amberPoint);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 4. Materials
    const curveMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5e3a,
      emissive: 0xe8502b,
      emissiveIntensity: 0.8,
      metalness: 0.6,
      roughness: 0.2,
    });

    const nodeGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff7a45,
      emissive: 0xff5e3a,
      emissiveIntensity: 0.9,
      metalness: 0.4,
      roughness: 0.15,
    });

    const dropLineMat = new THREE.LineDashedMaterial({
      color: 0xff5e3a,
      dashSize: 0.1,
      gapSize: 0.08,
      transparent: true,
      opacity: 0.45,
    });

    // 5. Exponential Growth Trajectory Curve (Ascending from bottom-left to top-right)
    const curvePoints: THREE.Vector3[] = [];
    const segments = 30;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = (t - 0.5) * 4.6; // from -2.3 to +2.3
      const y = Math.pow(t, 2.3) * 2.4 - 1.1; // starts at -1.1 and climbs to +1.3
      const z = Math.sin(t * Math.PI) * 0.35;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const growthCurve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(growthCurve, 80, 0.055, 12, false);
    const tubeMesh = new THREE.Mesh(tubeGeo, curveMaterial);
    rootGroup.add(tubeMesh);

    // 6. Glowing Waypoint Telemetry Nodes & Vertical Metric Drop Lines
    const waypointGeo = new THREE.SphereGeometry(0.12, 20, 20);
    const waypoints: { mesh: THREE.Mesh; ring: THREE.Mesh; baseScale: number }[] = [];
    const dropLineGroup = new THREE.Group();
    rootGroup.add(dropLineGroup);

    const milestoneFractions = [0.15, 0.38, 0.62, 0.84, 1.0];
    const floorY = -1.25;

    milestoneFractions.forEach((frac, idx) => {
      const pt = growthCurve.getPoint(frac);

      // Node Orb
      const orb = new THREE.Mesh(waypointGeo, nodeGlowMat);
      orb.position.copy(pt);
      rootGroup.add(orb);

      // Surrounding Orbital Halo Ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.2, 0.015, 12, 32),
        new THREE.MeshBasicMaterial({ color: 0xff5e3a, transparent: true, opacity: 0.7 })
      );
      ring.position.copy(pt);
      ring.rotation.x = Math.PI / 3;
      rootGroup.add(ring);

      waypoints.push({ mesh: orb, ring, baseScale: 1.0 });

      // Vertical Drop Line to Floor
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(pt.x, pt.y, pt.z),
        new THREE.Vector3(pt.x, floorY, pt.z),
      ]);
      const line = new THREE.Line(lineGeo, dropLineMat);
      line.computeLineDistances();
      dropLineGroup.add(line);

      // Ground Anchor Dot
      const anchor = new THREE.Mesh(
        new THREE.CircleGeometry(0.06, 16),
        new THREE.MeshBasicMaterial({ color: 0xff5e3a, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
      );
      anchor.rotation.x = -Math.PI / 2;
      anchor.position.set(pt.x, floorY, pt.z);
      dropLineGroup.add(anchor);
    });

    // 7. Depth Grid Floor Plane
    const gridGeo = new THREE.PlaneGeometry(5.4, 3.4, 12, 8);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2.4;
    grid.position.set(0, floorY, 0);
    rootGroup.add(grid);

    // 8. Subtle Floating Ambient Data Telemetry Particles
    const pCount = isMobile ? 25 : 45;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 5.0;
      pPos[i * 3 + 1] = Math.random() * 2.5 - 1.0;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3.0;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff5e3a,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(pGeo, pMat);
    rootGroup.add(particles);

    // 9. Mouse Parallax & Scroll Integration
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.45;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.35;
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

    // 10. Animation Loop (Slow, elegant, always preserving upward-right trajectory)
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle tilt maintaining clear ascending trajectory
      rootGroup.rotation.y = Math.sin(time * 0.4) * 0.12 + mouseX * 0.4;
      rootGroup.rotation.x = Math.cos(time * 0.3) * 0.04 + mouseY * 0.3;

      // Animate pulsing waypoints
      waypoints.forEach((wp, i) => {
        const pulse = 1.0 + Math.sin(time * 2.5 + i * 1.3) * 0.18;
        wp.mesh.scale.set(pulse, pulse, pulse);
        wp.ring.rotation.z = time * 0.8 + i;
        wp.ring.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      tubeGeo.dispose();
      waypointGeo.dispose();
      gridGeo.dispose();
      pGeo.dispose();
      curveMaterial.dispose();
      nodeGlowMat.dispose();
      dropLineMat.dispose();
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
      className="relative w-full h-[320px] sm:h-[380px] pointer-events-none select-none flex items-center justify-center"
      aria-label="3D Compounding Revenue Acceleration Curve"
    />
  );
}
