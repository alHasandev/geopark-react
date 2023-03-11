import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Html, useProgress } from '@react-three/drei';
import GLTFViewer from './viewers/gltf';

// type EnvPreset =
//   | 'forest'
//   | 'sunset'
//   | 'dawn'
//   | 'night'
//   | 'warehouse'
//   | 'apartment'
//   | 'studio'
//   | 'city'
//   | 'park'
//   | 'lobby'
//   | undefined;

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const searchParams = new URLSearchParams(location.search);
const bg = searchParams.get('bg') || 'white';

const model = searchParams.get('model');
const MODEL_PATH = model || './examples/gltf/ceksa.gltf';

// const environment = searchParams.get('env') as EnvPreset;
// const ENVIRONMENT: EnvPreset = environment || undefined;

const scale = searchParams.get('scale');
const SCALE = scale && !Number.isNaN(Number(scale)) ? Number(scale) : 1;

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
        {/* <Model scale={0.001} /> */}
        <GLTFViewer url={MODEL_PATH} scale={[SCALE, SCALE, SCALE]} />
        {/* {ENVIRONMENT && <Environment preset={ENVIRONMENT} background />} */}
        <ambientLight color="white" intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
      </Suspense>
    </Canvas>
  );
};

export default App;
