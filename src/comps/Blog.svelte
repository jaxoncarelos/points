<script>
    import { db } from './firebase.js';
    export let blog = {}

</script>

<!-- ########################### -->

<div class="blog">
    <p class="blogDate">{blog.date}</p>
    <p class="blogText">{blog.text}</p>
</div>

<style>
    	.blogDate{
		font-size: 8px;
		color: #fe2c54;
		right: 10px;
		top: 20px;
	}
	.blogText {
		outline: 5px #333;
		font-size: 12px;
	}
</style>