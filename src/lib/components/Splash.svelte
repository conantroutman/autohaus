<div class="wrapper">
	<div class="splash">
		<img src="./img/ddr-logo.png" alt="" />
		<h1>Autohaus</h1>
	</div>
</div>

<style>
	img {
		height: 200px;
		widows: 200px;
		margin: auto;
	}

	h1 {
		font-size: 10em;
		margin: 0;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.splash {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		animation-name: animateLogo;
		animation-duration: 0.5s;
		animation-delay: 0.1s;
	}

	@keyframes animate {
		from {
			clip-path: inset(100%);
		}
		to {
			clip-path: inset(0%);
		}
	}
</style>
