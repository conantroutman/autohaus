<script>
	import carsData from '../lib/data/autos.json';
</script>

<div class="auto-selector">
	Bitte wählen Sie das Auto aus, das Sie sich ansehen möchten.

	<ul>
		{#each carsData as carData, index}
			<li>
				[{index + 1}] {carData.brand}
				{carData.model}
			</li>
		{/each}
	</ul>
</div>

<style>
	.auto-selector {
		font-size: 30px;
	}

	ul {
		list-style: none;
		padding: 0;
	}
</style>
