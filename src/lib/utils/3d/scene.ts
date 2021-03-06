import { PerspectiveCamera, Scene, WebGLRenderer, Object3D, Vector2 } from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

import { addModel } from './loader';

const scene = new Scene();
const camera = new PerspectiveCamera(55, 1, 0.1, 1000);
let renderer: WebGLRenderer;
let composer: EffectComposer;
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

	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
};

const addBloom = () => {
	if (!renderer) return;

	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	const renderScene = new RenderPass(scene, camera);
	const bloomPass = new UnrealBloomPass(new Vector2(width, height), 1.5, 0.4, 0.85);
	composer = new EffectComposer(renderer);
	composer.addPass(renderScene);
	composer.addPass(bloomPass);
};

export const createScene = async (canvas: HTMLCanvasElement, model: string) => {
	renderer = new WebGLRenderer({ antialias: false, canvas });
	renderer.setClearColor(0x211f1f);
	try {
		carModel = await addModel(model);
		carModel.position.setY(-0.6);
		scene.add(carModel);

		//addBloom();

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
