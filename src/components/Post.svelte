<script>
	import { onMount, onDestroy } from "svelte"
	import { fade } from "svelte/transition"
	import { posts } from "../stores"
	export let author
	export let post
	export let date
	export let id

	let timeOnScreen = 0
	let timeInterval = null
	let waveState = true
	let waveInterval = null

	onMount(() => {
		timeInterval = setInterval(() => {
			++timeOnScreen
		}, 1000)
		waveInterval = setInterval(() => {
			waveState = !waveState
		}, 500)
	})

	onDestroy(() => {
		clearInterval(timeInterval)
		clearInterval(waveInterval)
	})

	function deletePost() {
		const deleteIndex = $posts.findIndex((post) => post.id === id)
		$posts.splice(deleteIndex, 1)
		$posts = $posts
	}
</script>

<div class="overflow-auto space-y-4 p-4">
	<div class="card shadow-lg w-80 bg-green-500">
		<div
			on:click="{deletePost}"
			class="absolute right-0 pr-2 text-error text-2xl">
			x
		</div>
		<div class="absolute left-0 pl-2 text-white text-2xl">
			{timeOnScreen}
		</div>
		<div class="absolute right-0 bottom-0 pr-2 pb-2 text-white text-2xl">
			{#if waveState}
				<span transition:fade="{{ duration: 250 }}">👋</span>
			{/if}
		</div>
		<div class="card-body">
			<h2 class="card-title">{author}</h2>
			<p>{post}</p>
			<p>{date}</p>
		</div>
	</div>
</div>
