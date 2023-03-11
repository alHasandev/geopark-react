import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group, MeshStandardMaterial, Object3D, Vector3 } from 'three';

// interface GLTFNode extends Object3D {
//   name: string;
//   position: Vector3;
//   rotation: [number, number, number];
//   scale: [number, number, number];
//   geometry: any;
//   material: MeshStandardMaterial;
// }

type GLTFViewerProps = {
  url: string;
} & JSX.IntrinsicElements['group'];
function GLTFViewer({ url, ...props }: GLTFViewerProps) {
  const gltf = useLoader(GLTFLoader, url);
  const group = useRef<Group>(null);

  return (
    <group ref={group} {...props} dispose={null}>
      {gltf.scenes.map((scene) => {
        // console.log(scene.scale);
        // return <primitive key={scene.id} object={scene} scale={scene.scale} />;
        return <SceneGroup key={scene.id} object={scene} />;
      })}
      {/* Add the meshes from the gltf file to the scene */}
    </group>
  );
}

type SceneProps = {
  object: Group;
};
const SceneGroup = (props: SceneProps) => {
  return <primitive object={props.object} />;
};

export default GLTFViewer;
