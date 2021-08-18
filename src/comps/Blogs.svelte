<script>
    import { db } from './firebase.js';
    import Blog from './Blog.svelte'
    let blogs = []

    db.collection('blogs').orderBy("blogId", "desc").onSnapshot( data => {
        blogs = data.docs
    })

</script>

<!-- ########################### -->
<div id="blogs">
    {#each blogs as blog}
        <Blog blog={blog.data()}/>
    {/each}

</div>


<style>
    div {
        color: white;
        font-size: 15;
    }
</style>