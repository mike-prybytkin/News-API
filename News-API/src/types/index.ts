export interface ILoaderOptions {
    apiKey: string;
}

export interface IResponseObject {
    status: string;
    sources: string[];
    ok: boolean;
    statusText: string;
}

export interface IEndpointSources {
    status: string;
    sources: ISourсeExtended[];
}

export interface IEndpointEverything {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISource {
    id: string;
    name: string;
}

export interface ISourсeExtended extends ISource {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IArticle {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface IItemSourse {
    id: string;
    name: string;
}

export interface IEndpointEverything {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
