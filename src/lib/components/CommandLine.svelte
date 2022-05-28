<script lang="ts">
	import { goto } from '$app/navigation';

	let isFocused = false;
	let input: HTMLSpanElement;
	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);
	const onKeypress = (e: KeyboardEvent) => {
		console.log(e);
		if (e.key !== 'Enter') return;

		goto(`/auto/${input.textContent}`);
	};
</script>

<div class="input-wrap">
	<span>gast@autohaus: </span>

	<div class="user-input">
		<span
			class="user-input-field"
			on:focus={onFocus}
			on:blur={onBlur}
			on:keypress={onKeypress}
			contenteditable="true"
			bind:this={input}
            autofocus
            spellcheck="false"></span
		>

        <div class="cursor-block" />
	</div>
</div>

<style>
	/* span {
        width: 170px;
    } */

	@keyframes fade {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.user-input-field {
		background: transparent;
		border: none;
        caret-color: transparent;        
	}

	.user-input-field:focus {
		outline: none;
	}

	.user-input {
		display: flex;
	}

	.cursor-block {
		width: 12px;
		height: 30px;
		background-color: #00ff00;
		animation: fade 1s infinite;
		margin-left: 5px;
		box-shadow: 1px 1px 2px rgb(124, 167, 129), 0 0 1em rgb(124, 167, 129),
			0 0 0.2em rgb(124, 167, 129);
	}

	.input-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		font-family: VT323;
		color: #00ff00;
		font-size: 30px;
		text-shadow: 1px 1px 2px rgb(124, 167, 129), 0 0 1em rgb(124, 167, 129),
			0 0 0.2em rgb(124, 167, 129);
		position: relative;
	}

	input[type='text'] {
		background: transparent;
		border: none;
		width: 100%;
		font-family: VT323;
		color: #00ff00;
		font-size: 25px;
		text-shadow: 1px 1px 2px rgb(124, 167, 129), 0 0 1em rgb(124, 167, 129),
			0 0 0.2em rgb(124, 167, 129);
	}

	textarea:focus,
	input:focus {
		outline: none;
	}
    
</style>
