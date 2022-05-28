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

<div>
	<canvas bind:this={canvas} />
</div>

<style>
	canvas {
		outline: var(--border-thickness) solid var(--primary-color);
		width: 100%;
		height: 100%;
		/* box-shadow: var(--glow); */
	}
</style>
