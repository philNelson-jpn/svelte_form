<script>
	import { onMount, onDestroy } from "svelte"
	import { fade } from "svelte/transition"
	import { user } from "../stores"

	let waveState = true
	let waveInterval = null

	onMount(() => {
		waveInterval = setInterval(() => {
			waveState = !waveState
		}, 500)
	})

	onDestroy(() => {
		clearInterval(waveInterval)
	})
</script>

<section class="flex flex-col justify-center items-center">
	<h1 class="text-2xl m-3">
		{#if waveState}
			<span transition:fade="{{ duration: 250 }}">👋</span>
		{/if}
		Hi, I'm {$user.name}
		{#if waveState}
			<span transition:fade="{{ duration: 250 }}">👋</span>
		{/if}
	</h1>
	<p>{$user.about}</p>
</section>
