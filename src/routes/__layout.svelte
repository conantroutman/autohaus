<script>
	import CommandHistory from '$lib/components/CommandHistory.svelte';
	import CommandLine from '$lib/components/CommandLine.svelte';
	import Splash from '$lib/components/Splash.svelte';
	import Header from '$lib/header/Header.svelte';
	import { onMount } from 'svelte';

	let showSplash = true;

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
		}, 3000);
	});
</script>

<div class="autohaus-wrapper">
	<div id="autohaus-bildschirm">
		<img src="./img/scanlines.png" alt="Scanlinen" id="scanlinien" class="noselect" />
		<img src="./img/bezel.png" alt="Lunette" id="lunette" class="noselect" />

		<div id="inhalt">
			{#if showSplash}
				<Splash />
			{:else}
				<Header />
				<slot />

				<div class="ausgang" />
				<div class="ingang">
					<div class="command-history">
						<CommandHistory />
					</div>

					<CommandLine />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.command-history {
		padding-bottom: 50px;
		overflow-y: hidden;
		display: flex;
		flex-direction: column-reverse;
	}
	.autohaus-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff5d1;
	}

	.noselect {
		user-select: none;
	}

	#autohaus-bildschirm {
		position: relative;
		width: 100%;
		height: 100%;
		background: #211f1f;

		/* display: flex; */
		border-radius: 35px;
	}

	#scanlinien,
	#lunette {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		/* border-radius: 35px; */
	}

	#scanlinien {
		opacity: 80%;
		z-index: 10;
	}

	#inhalt {
		height: 75%;
		padding: 100px;
		font-size: 20px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: content-box;
	}
</style>
