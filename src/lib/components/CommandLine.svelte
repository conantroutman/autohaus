<script lang="ts">
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { userCommands} from '$lib/stores'


	enum Commands {
		GO_BACK = 'zurück',
		HELP = 'hilfe',
        DISPLAY_AUTOS = 'autos',
        TEST = 'test'
	}

	let isFocused = false;
	let input: HTMLSpanElement;

	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);
	const onChange = () => {
		if (!input.textContent) return;
		input.textContent = input.textContent?.toLocaleUpperCase();
	};

	const onKeypress = (e: KeyboardEvent) => {
        input.focus();
		if (e.key !== 'Enter') return;

        e.preventDefault();

        userCommands.update((commands: string[]) => {
            if (!input.textContent) return commands
            return [...commands, input.textContent]
        })
        console.log(userCommands);

		switch (input.textContent) {
			case Commands.GO_BACK:
				goto('/');
                input.textContent = '';
				return;

            case Commands.DISPLAY_AUTOS:
                goto('/autos');
                input.textContent = '';
                return;
            
            case Commands.TEST:
                logCommand('Testbefehl');
                input.textContent = '';
                return;

            case Commands.HELP:
                goto('/hilfe');
                input.textContent = '';
                return;

			default:
                logCommand('Fehler: unbekannte oder unvollständige Befehlszeile.');
                logCommand('Verwenden Sie "Hilfe" für die richtigen Befehle');
                return;
          
		}


	};

    function logCommand(command:any) {
        userCommands.update((commands: string[]) => {
            input.textContent = '';
            return [...commands, command]
        })
        
    }
  

    onMount(async () => {
        document.onclick = function(){
        input.textContent = '';
        input.focus();

        }
	});

    onMount(() => input.focus())



 
</script>

<div class="input-wrap">
	<span>gast@autohaus: </span>

	<div class="user-input">
		<span
			class="user-input-field"
            id="user-commandline-input"
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
        max-height: 30px;   
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
