<script lang='typescript'>
import CommandLine from "$lib/components/CommandLine.svelte";

import Logo from "$lib/header/logo.svelte";



</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="auto/trabant">Trabant</a> -->
<div class="autohaus-wrapper">
    <div id="autohaus-bildschirm"> 
        <img src="./img/scanlines.png" alt="Scanlinen" id="scanlinien" class="noselect">
        <img src="./img/bezel.png" alt="Lunette" id="lunette" class="noselect">
        <img src="./img/ddr-logo.png" alt="ddr" class="autohaus-logotypen noselect"> 
    
        <div id="inhalt">
            <h1>Willkommen zu Autohaus... </h1> 
            <div class="ausgang">

            </div>
            <div class="ingang">
                <CommandLine></CommandLine>
            </div>
        </div>
    </div>
</div>


<style>

    .autohaus-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background:#FFF5D1;
    }

    .noselect {
        user-select: none;
    }

    .autohaus-logotypen {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 80px;
        top: 80px;
        z-index: 9;
        filter: grayscale(100%);
        transform: rotateY(45deg);
	    animation: rotateAnimation 1s linear infinite;
    }

    #autohaus-bildschirm {
        position: relative;
        width: 100%;
        height: 100%;
        background: rgb(33, 31, 31);
        
        /* display: flex; */
        border-radius: 35px;

    }

    #scanlinien, #lunette {
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
        font-family: VT323;
        padding: 100px;
        color: #00ff00;
        font-size:20px;
        text-shadow: 1px 1px 2px rgb(124, 167, 129), 0 0 1em rgb(124, 167, 129), 0 0 0.2em rgb(124, 167, 129);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: content-box;

    }


    @keyframes rotateAnimation {
	from {transform: rotateY(45deg);}
	to {transform: rotateY(225deg);}
}
</style>

