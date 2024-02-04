<script lang="ts">
	import type {TvShowSummary} from '$lib/types/tv-show-summary.interface';

	export let tvShow: TvShowSummary;
	const { genres, id, image, name, rating, slug } = tvShow;
</script>

<a href="/tv-shows/{id}/{slug}">
	<img height="295" width="210" loading="lazy" src={image.medium} alt="Poster of {name}" />
	<div>
		<h2>{name}</h2>
		<p class="rating">
			⭐ {#if rating.average}<span>{Intl.NumberFormat('fr-FR').format(rating.average)}</span><small
					>/10</small
				>{:else}<em>Inconnue</em>{/if}
		</p>
		{#if genres.length}
			<ul class="genres">
				{#each genres as genre}
					<li>
						<p>{genre}</p>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</a>

<style>
	a {
		background: #03586b;
		border-radius: 0.5rem;
		color: #fff;
		display: flex;
		flex-direction: column;
		max-width: 210px;
		text-decoration: none;
	}

	img {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		display: block;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 1rem;
	}

	p {
		margin: 0;
	}

	.rating > span {
		font-weight: bold;
	}

	h2 {
		font-size: 1rem;
		font-weight: bold;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.genres {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		list-style-type: none;
		padding: 0;
	}

	.genres > li > p {
		background: #5cdb95;
		border-radius: 0.25rem;
		color: #000;
		font-size: 0.75rem;
		padding: 0.25rem;
	}
</style>
