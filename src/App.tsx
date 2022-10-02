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
const environment = (searchParams.get('environment') as EnvPreset) || 'forest';

function App() {
  return (
    <main className="border">
      <article className="border h-screen p-4">
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
        <Environment preset={environment} background />
      </Suspense>
    </Canvas>
  );
};

export default App;
