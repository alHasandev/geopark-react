/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Areasbuilding: THREE.Mesh;
    EXPORT_ESRI_AERIAL_WM001: THREE.Mesh;
    EXPORT_ESRI_AERIAL_WM: THREE.Mesh;
  };
  materials: {
    ['rastMat.001']: THREE.MeshStandardMaterial;
    ['rastMat.002']: THREE.MeshStandardMaterial;
  };
};

const searchParams = new URLSearchParams(location.search);
console.log('query', searchParams.get('model'));

const model = searchParams.get('model');
const MODEL_PATH = model || './examples/gltf/ceksa.gltf';

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(MODEL_PATH) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding.geometry}
        material={nodes.Areasbuilding.material}
        userData={{ name: 'Areas:building' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXPORT_ESRI_AERIAL_WM001.geometry}
        material={materials['rastMat.001']}
        userData={{ name: 'EXPORT_ESRI_AERIAL_WM.001' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXPORT_ESRI_AERIAL_WM.geometry}
        material={materials['rastMat.002']}
        userData={{ name: 'EXPORT_ESRI_AERIAL_WM' }}
      />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
