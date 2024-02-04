export interface TvShowSummary {
	id: number;
	name: string;
	slug: string;
	genres: string[];
	rating: {
		average: number;
	};
	image: {
		medium: string;
		original: string;
	};
}
