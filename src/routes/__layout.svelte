<script>
	import CommandHistory from '$lib/components/CommandHistory.svelte';
	import CommandLine from '$lib/components/CommandLine.svelte';
	import Header from '$lib/header/Header.svelte';
</script>

<div class="autohaus-wrapper">
	<div id="autohaus-bildschirm">
		<img src="./img/scanlines.png" alt="Scanlinen" id="scanlinien" class="noselect" />
		<img src="./img/bezel.png" alt="Lunette" id="lunette" class="noselect" />

		<div id="inhalt">
			<Header />
			<slot />

			<div class="ausgang">
            </div>
			<div class="ingang">

                <div class="command-history">
                    <CommandHistory />
                </div>

				<CommandLine />
			</div>
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
