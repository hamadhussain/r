import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from 'globe.gl';

const RotatingGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.01; // Adjust speed as needed
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Globe
        ref={globeRef}
        height={326}
        width={326}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 40,
            lng: -100,
            text: "Rijeka, Croatia",
            color: "white",
            size: 15,
          },
        ]}
      />
      {/* /> */}
    </Canvas>
  );
};

export default RotatingGlobe;
