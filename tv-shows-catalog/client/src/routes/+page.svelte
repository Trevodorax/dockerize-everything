<script lang="ts">
	import TvShowCard from '$lib/components/TvShowCard.svelte';
	import type {PageData} from './$types';

	export let data: PageData;
	const { tvShows } = data;
</script>

<svelte:head>
	<title>All TV shows | Make Me Watch</title>
	<meta name="description" content="Consultez la liste des meilleures séries TV, à consommer sans modération !" />
</svelte:head>

<main class="container">
	<hgroup>
		<h1>Catalogue de séries</h1>
		<p>À consommer sans modération !</p>
	</hgroup>
	<ul>
		{#each tvShows as tvShow}
			<li>
				<TvShowCard {tvShow} />
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding: 1rem 0;
	}

	main > * {
		margin: 0 1rem;
	}

	hgroup {
		display: flex;
		color: #03586b;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	hgroup > * {
		margin: 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		list-style-type: none;
		padding: 0;
	}

	@media screen and (min-width: 768px) {
		ul {
			justify-content: space-between;
		}
	}
</style>
