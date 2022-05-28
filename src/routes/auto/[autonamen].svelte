<script>
	export const ssr = false;

	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { page } from '$app/stores';

	const model = $page.params.autonamen;
</script>

<h1>{model}</h1>
<Canvas3D {model} />

<style>
</style>
