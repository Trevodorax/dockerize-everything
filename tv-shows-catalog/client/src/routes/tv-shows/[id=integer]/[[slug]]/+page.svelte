<script lang="ts">
	import type {PageData} from './$types';

	export let data: PageData;
	const {
		tvShow: {
			ended,
			externals,
			genres,
			image,
			name,
			network,
			officialSite,
			premiered,
			slug,
			status,
			summary
		}
	} = data;
</script>

<svelte:head>
	<title>{name} | Make Me Watch</title>
	<meta
		name="description"
		content="Apprenez-en plus sur {name}, l'une des meilleures séries TV du moment ! À consommer sans modération."
	/>
</svelte:head>

<main>
	<img src={image.original} alt="Original poster of {name}" />
	<article>
		<div>
			<h1>{name}</h1>
			<a href="/" title="Retourner au catalogue de séries TV">⬅️ Retour au catalogue</a>
		</div>
		<section class="information">
			<h2>Informations</h2>
			<dl>
				<dt>
					Genre{#if genres.length > 1}s{/if}
				</dt>
				<dd>
					{#if genres.length}
						{genres.join(', ')}
					{:else}
						<em>Non renseigné</em>
					{/if}
				</dd>
				<dt>Statut</dt>
				<dd>
					{#if status === 'To Be Determined'}À déterminer{/if}
					{#if status === 'Running'}En cours{/if}
					{#if status === 'Ended'}Terminée{/if}
				</dd>
				{#if premiered}
					<dt>Date de première diffusion</dt>
					<dd>
						<time datetime={premiered}
							>{Intl.DateTimeFormat('fr-FR', {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							}).format(Date.parse(premiered))}</time
						>
					</dd>
				{/if}
				{#if ended}
					<dt>Date de dernière diffusion</dt>
					<dd>
						<time datetime={ended}
							>{Intl.DateTimeFormat('fr-FR', {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							}).format(Date.parse(ended))}</time
						>
					</dd>
				{/if}
				{#if network}
					<dt>Produite par</dt>
					<dd><a href={network.officialSite} target="_blank">{network.name}</a></dd>
				{/if}
				{#if officialSite}
					<dt>Site officiel de la série</dt>
					<dd>
						<a
							href={officialSite}
							title="Visiter le site officiel de la série {name}"
							target="_blank">{new URL(officialSite).hostname}</a
						>
					</dd>
				{/if}
			</dl>
		</section>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html summary}
		<div class="externals">
			{#if externals.thetvdb}
				<a
					class="button thetvdb"
					href="https://thetvdb.com/series/{slug}"
					target="_blank"
					title="Voir la fiche de {name} sur TVDb"
				>
					{name} sur TVDb
				</a>
			{/if}
			{#if externals.imdb}
				<a
					class="button imdb"
					href="https://imdb.com/title/{externals.imdb}"
					target="_blank"
					title="Voir la fiche de {name} sur IMDb">{name} sur IMDb</a
				>
			{/if}
		</div>
	</article>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}

	img {
		aspect-ratio: auto;
		display: block;
		width: 100%;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	h1,
	h2 {
		margin: 0;
	}

	.information {
		background: #8ee4af;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	dl {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin: 0;
	}

	dt {
		font-size: 0.75rem;
		font-style: italic;
	}

	dt:not(:first-of-type) {
		margin-top: 0.5rem;
	}

	dd {
		margin: 0;
	}

	article > :global(p) {
		margin: 0;
	}

	.externals {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.button {
		border-radius: 0.5rem;
		font-weight: bold;
		padding: 0.5rem 1rem;
		text-decoration: none;
	}

	.button.thetvdb {
		background: #6cd591;
		color: #1b2626;
	}

	.button.imdb {
		background: #f5c518;
		color: #000;
	}

	@media screen and (min-width: 1024px) {
		main {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			height: 100vh;
		}

		img {
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}
</style>
