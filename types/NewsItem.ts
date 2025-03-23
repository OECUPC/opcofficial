export interface NewsItem{
	id: string;
	title: string;
	updated_at: Date;
	eyecatch: {
		url: string;
	}
	content: string;
	path: string;
};