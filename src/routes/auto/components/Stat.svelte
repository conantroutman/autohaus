<script lang="ts">
	export let label: string;
	export let value: any;
</script>

<li>
	<span>{label}</span>
	<span>{value}</span>
</li>

<style>
	li {
		margin: none;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	span {
		height: 100%;
		width: 100%;
		outline: var(--border-thickness) solid var(--primary-color);
		padding: 10px;
	}
</style>
