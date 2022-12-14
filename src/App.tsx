import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Model } from './models';
import { Html, useProgress } from '@react-three/drei';

type EnvPreset =
  | 'forest'
  | 'sunset'
  | 'dawn'
  | 'night'
  | 'warehouse'
  | 'apartment'
  | 'studio'
  | 'city'
  | 'park'
  | 'lobby'
  | undefined;

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const searchParams = new URLSearchParams(location.search);
const bg = searchParams.get('bg') || 'white';

function App() {
  return (
    <main className="">
      <article
        className="h-screen"
        style={{
          background: bg,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* <TestCanvas /> */}
        <Scene />
      </article>
    </main>
  );
}

const Scene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Suspense fallback={<Loader />}>
        <Model scale={0.001} />
        {/* <Environment preset={environment} background /> */}
        <ambientLight color="white" intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
      </Suspense>
    </Canvas>
  );
};

export default App;
