import type { TvShowSummary } from '$lib/types/tv-show-summary.interface';

export interface TvShow extends TvShowSummary {
	ended?: string;
	externals: {
		imdb?: string;
		thetvdb?: number;
		tvrage?: number;
	};
	network?: {
		name: string;
		officialSite: string;
	};
	officialSite: string;
	premiered: string;
	status: string;
	summary: string;
}
