export interface LoaderOptions {
    apiKey: string;
}

export interface EndpointSources {
    status: string;
    sources: InputDataSource[];
}

export interface Source {
    id: string;
    name: string;
}

export interface InputDataSource extends Source {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface EndpointEverything {
    status: string;
    totalResults: number;
    articles: Article[];
}
