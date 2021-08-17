<script>
import { fade } from 'svelte/transition';
import { create_bidirectional_transition } from "svelte/internal";
import Index from './comps/Index.svelte'
	let isEntered = false;
	let blogId = 0;
	let blogPosts = [{
		id: 1,
		text: "",
	}];
	function Enter(){
		isEntered = true;
		
	}
</script>

<main>
	<h1>Jaxon's Blog</h1>
	{#if !isEntered}
		<button class="btn" on:click={Enter} transition:fade>Enter</button>
	{/if}
	{#if isEntered}
		<Index />
	{/if}
</main>

<style>
	main {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		background: #333;
		padding: 1em;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #fe2c54;
		text-shadow: 0.5px 0.5px rgba(0,255,255, 0.5);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.btn {
		background : #222;
		color: #fe2c54;
		border-radius: 5px;
		width: 500px;
		text-shadow: 0.5px 0.5px rgba(0,255,255, 0.5);
	}
</style>