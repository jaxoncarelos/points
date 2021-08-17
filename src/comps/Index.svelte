<script>
	import { fade } from 'svelte/transition';
	let text = " ";
	let blogHasBeenPosted = false;

	let blogId = 0;
	let blogPosts = [{
		id: 0,
		text: '0',
		author: ' ',
		date: ' ',
	}];
	function submitText(){
		blogId += 1;
		var now = new Date().toISOString().slice(0, 10);
		console.log(now)
		let info = {
			id: {blogId},
			text: {text},
			author: 'Jaxon',
			date: {now},
		}
		console.log(info);
		blogPosts.push(info);
		blogPosts = blogPosts;
		console.log(info.text)
		text = "";
		blogHasBeenPosted = true;
		db
	}
</script>

<div transition:fade class="text">
	<audio autoplay>
		<source src="https://www.youtube.com/watch?v=GN-0fffOoXY" type="audio/mp3">
	</audio>
	<div class="text">
		<textarea bind:value={text} class="textarea"></textarea>
	</div>
	<div class="submit">
		<button class="btn"f on:click={submitText}>Submit</button>
	</div>
	<div class="blogposts">
	{#if blogHasBeenPosted}
		{#if blogId >0}
		{#each blogPosts as blog}
			{#if typeof blog.text.text !== "undefined"}
			{#if blog.text.text.length > 10}
			<p class="blogDate">{blog.date.now}</p>
			<p class="blogText">{blog.text.text}</p>
			{/if}
			{/if}
		{/each}
		{/if}
	{/if}
	</div>
</div>

<style>
	.text{
	color: white;
		
	}
	.textarea{
		background: #222;
		color: white;
	}
	.btn{
		background: #222;
		color: white;
	}
	.blogDate{
		font-size: 8px;
		color: #fe2c54;
		text-shadow: 0.5px 0.5px rgba(0,255,255, 0.5);
		right: 10px;
		top: 20px;
	}
	.blogText {
		outline: 5px #333;
		font-size: 12px;
	}
</style>
