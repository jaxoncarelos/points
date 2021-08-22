<script>
import Blogs from './comps/Blogs.svelte'
import { fade } from 'svelte/transition';
import Index from './comps/Index.svelte'
	let isEntered = false;
	let blogId = 0;
	function Enter(){
		isEntered = true;
		
	}
</script>
<main>
	<h1>Jaxon's Blog</h1>
	<h2> Please be respectful and keep spam to a minimum. </h2>
	{#if !isEntered}
		<button class="btn" on:click={Enter} transition:fade>Enter</button>
	{/if}
	{#if isEntered}
		<Index />
		<Blogs />
	{/if}
</main>

<style>
	html {
		background: #111;
	}
	main {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		padding: 1em;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	h1 {
		color: white;
		text-shadow: 3px 3px rgba(0,255,255, 1), -3px -3px #fe2c54;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		animation-name: glitchh1;
		animation-duration: 0.25s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
	}
	h2{
		color: white;
		text-shadow: 1px 1px rgba(0,255,255, 1), -1px -1px #fe2c54;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
		animation-name: glitchh2;
		animation-duration: 0.25s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
	}
	@keyframes glitchh2 {
		from{ text-shadow: 1px 1px rgba(0,255,255, 1), -1px -1px #fe2c54; }
		to { text-shadow: 1px 1px #fe2c54, -1px -1px rgba(0,255,255, 1); }
	}
	@keyframes glitchh1 {
		from{ text-shadow: 3px 3px rgba(0,255,255, 1), -3px -3px #fe2c54; }
		to { text-shadow: 3px 3px #fe2c54, -3px -3px rgba(0,255,255, 1); }
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.btn {
		background : #333;
		color: white;
		border-radius: 5px;
		width: 500px;
		text-shadow: 1.5px 1.5px rgba(0,255,255, 1), -1.5px -1.5px #fe2c54;
		animation-name: glitchh2;
		animation-duration: 0.25s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
	}
</style>