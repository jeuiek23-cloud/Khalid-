'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const FloatingBooks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const books: THREE.Mesh[] = [];
    const bookCount = 15;

    for (let i = 0; i < bookCount; i++) {
      const geometry = new THREE.BoxGeometry(0.6, 0.8, 0.1);
      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x8B7538 }),
        new THREE.MeshBasicMaterial({ color: 0x8B7538 }),
        new THREE.MeshBasicMaterial({ color: 0xC3AE75 }),
        new THREE.MeshBasicMaterial({ color: 0xC3AE75 }),
        new THREE.MeshBasicMaterial({ color: 0xAF9347 }),
        new THREE.MeshBasicMaterial({ color: 0xAF9347 }),
      ];
      
      const book = new THREE.Mesh(geometry, materials);
      
      book.position.x = (Math.random() - 0.5) * 10;
      book.position.y = (Math.random() - 0.5) * 8;
      book.position.z = (Math.random() - 0.5) * 10;
      
      book.rotation.x = Math.random() * Math.PI;
      book.rotation.y = Math.random() * Math.PI;
      book.rotation.z = Math.random() * Math.PI;
      
      books.push(book);
      scene.add(book);
    }

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);

      books.forEach((book, index) => {
        book.rotation.x += 0.001;
        book.rotation.y += 0.002;
        
        book.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        book.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};
