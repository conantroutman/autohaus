<script>
	import DDRLogo from '$lib/header/DDRLogo.svelte';
</script>

<header>
	<h1>Autohaus</h1>
	<DDRLogo />
</header>

<style>
	header {
		z-index: 8;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	h1 {
		font-size: 3em;
		margin: 0;
	}
</style>
