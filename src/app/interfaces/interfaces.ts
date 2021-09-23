export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface ResponseTopHeadlines {
  pagination: Pagination;
  data: Article[];
}
