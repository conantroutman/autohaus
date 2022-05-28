<script lang="ts">
	import Stat from './Stat.svelte';

	export let stats: any;
</script>

<aside>
	<h1>Statistik</h1>
	<ul>
		<Stat label="Ursprung" value={stats.country} />
		<Stat label="Jahr" value={stats.year} />
		<Stat label="Motor" value={stats.engine} />
		<Stat label="Pferdkraften" value={stats.horsepower} />
		<Stat label="Gewicht (kg)" value={stats.weight} />
		<Stat label="Schalter" value={stats.gears} />
		<Stat label="0-100" value={stats['0-100']} />
	</ul>
</aside>

<style>
	aside {
		margin: 0;
		padding: 0;
	}

	h1 {
		outline: 1px solid white;
		margin: 0;
		padding: 10px;
		font-size: 2em;
	}

	ul {
		font-size: 1.5em;
		list-style: none;
		margin: 0;
		padding: 0;
		outline: 1px solid white;
	}
</style>
