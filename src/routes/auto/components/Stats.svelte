<script lang="ts">
	import Stat from './Stat.svelte';

	export let data: any;
	const { brand, model, stats } = data;
</script>

<aside>
	<h1>{brand} {model}</h1>
	<ul>
		<Stat label="Ursprung" value={stats.country} />
		<Stat label="Jahr" value={stats.year} />
		<Stat label="Sitze" value={stats.seats} />
		<Stat label="Motor" value={stats.engine} />
		<Stat label="Pferdkraften" value={stats.horsepower} />
		<Stat label="Gewicht (kg)" value={stats.weight} />
		<Stat label="Radstand" value={stats.wheelbase} />
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
		outline: var(--border-thickness) solid var(--primary-color);
		margin: 0;
		padding: 10px;
		font-size: 2em;
	}

	ul {
		font-size: 1.5em;
		list-style: none;
		margin: 0;
		padding: 0;
		outline: var(--border-thickness) solid var(--primary-color);
		/* box-shadow: var(--glow);
		box-shadow: inset var(--glow); */
	}
</style>
