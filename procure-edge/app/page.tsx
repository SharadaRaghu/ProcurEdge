'use client'

import { Model } from "./Gearbox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}>
          <Canvas camera={{ position: [0, 0, 100], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </main>
    </div>
  );
}