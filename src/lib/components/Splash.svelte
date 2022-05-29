<div class="wrapper">
	<h1>Autohaus</h1>
</div>

<style>
	h1 {
		font-size: 10em;
		animation-name: animateLogo;
		animation-duration: 0.5s;
		animation-delay: 0.1s;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
