<script>
	import { posts } from "../stores"
	import { navigate } from "svelte-navigator"
	let author = ""
	let post = ""
	let date = ""

	let arrayInc = 3

	function addPost() {
		const _post = {
			id: ++arrayInc,
			author: author,
			post: post,
			date: date,
		}
		$posts.push(_post)
		$posts = $posts
		author = ""
		post = ""
		date = ""
		navigate("/posts")
	}
</script>

<div class="form-control w-80">
	<label for="author" class="label">
		<span class="label-text">Tell us your name</span>
	</label>
	<input
		bind:value="{author}"
		name="author"
		type="text"
		placeholder="Your name"
		class="input input-primary input-bordered" />

	<label for="post" class="label">
		<span class="label-text">Write your post!</span>
	</label>
	<textarea
		bind:value="{post}"
		name="post"
		class="textarea h-24 textarea-bordered textarea-primary"
		placeholder="New post"></textarea>
	<label for="date" class="label">
		<span class="label-text">What day is it?</span>
	</label>
	<input
		bind:value="{date}"
		name="date"
		type="date"
		class="textarea h-14 textarea-bordered textarea-primary" />
	<button
		on:click="{addPost}"
		class="btn btn-primary mt-4"
		role="button"
		aria-pressed="true">submit</button>
</div>
