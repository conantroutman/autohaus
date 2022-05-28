<script>
	export const ssr = false;

	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { page } from '$app/stores';
	import data from '../../lib/data/autos.json';
	import Stats from './components/Stats.svelte';

	const model = $page.params.autonamen;
	const autoData = data.find((car) => car.id === model);
</script>

<main>
	<Canvas3D {model} />
	<Stats data={autoData} />
</main>

<style>
	main {
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 10px;
	}
</style>
