<script>
	import { fade } from 'svelte/transition';
	import { db } from './firebase.js';
    import Blog from './Blog.svelte';
    let blogs = []
	db.collection('blogs').orderBy("blogId", "desc").onSnapshot( data => {
        blogs = data.docs
    })
	let text = " ";
	let blogHasBeenPosted = false;

	let blogId = 0;
	function submitText(){
		if(text.length < 10){
			return;
		}
		let date = new Date().toISOString().slice(0, 10)
		blogId += 1;
		db.collection('blogs').add({text, date, blogId})
		text = "";
		
	}
</script>

<div transition:fade class="text">
	<div class="text">
		<textarea bind:value={text} class="textarea"></textarea>
	</div>
	<div class="submit">
		<button class="btn" on:click={submitText}>Submit</button>
	</div>
</div>

<style>
	textarea{ width: 50%; height: 200px; }
	.text{
	color: white;
		
	}
	.textarea{
		background: #333;
		color: white;
		border-radius: 10px;
	}
	.btn{
		background: #333;
		color: white;
		border-radius: 10px;
	}
</style>
