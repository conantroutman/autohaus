import { MeshBasicMaterial, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

export const addModel = (model: string) => {
	return new Promise<Object3D>((resolve, reject) => {
		loader.load(
			`/models/${model}.glb`,
			(gltf) => {
				const gltfScene = gltf.scene;
				gltfScene.traverse((object) => {
					// @ts-ignore
					if (object.isObject3D)
						object.material = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
				});

				resolve(gltf.scene);
			},
			(event) => console.log(event),
			(error) => {
				reject(error);
			}
		);
	});
};
