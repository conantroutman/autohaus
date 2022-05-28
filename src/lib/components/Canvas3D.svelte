<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { createScene, destroyScene } from '$lib/utils/3d/scene';

	export let model: string;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		createScene(canvas, model);
	});

	onDestroy(() => {
		destroyScene();
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		outline: 1px solid white;
		width: 100%;
	}
</style>
