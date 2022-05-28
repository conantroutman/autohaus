import { PerspectiveCamera, Scene, WebGLRenderer, Object3D } from 'three';

import { addModel } from './loader';

const width = 800;
const height = 500;

const scene = new Scene();
const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
let renderer: WebGLRenderer;
let carModel: Object3D;
camera.position.z = 5;

const animate = () => {
	if (!renderer) return;
	if (!carModel) return;
	requestAnimationFrame(animate);
	carModel.rotation.y += 0.007;
	renderer.render(scene, camera);
};

const resize = () => {
	if (!renderer) return;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
};

export const createScene = async (canvas: HTMLCanvasElement, model: string) => {
	renderer = new WebGLRenderer({ antialias: false, canvas });
	renderer.setClearColor(0x211f1f);
	try {
		carModel = await addModel(model);
		carModel.position.setY(-0.5);
		scene.add(carModel);

		resize();
		animate();
	} catch (error) {
		console.error(error.message);
	}
};

export const destroyScene = () => {
	scene.clear();
	renderer.dispose();
};

window.addEventListener('resize', resize);
