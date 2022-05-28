<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from '$lib/utils/3d/scene';

	export let model: string;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		createScene(canvas, model);
	});
</script>

<canvas bind:this={canvas} />
