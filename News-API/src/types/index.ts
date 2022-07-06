// interfaces for classes
export interface AppViewInterface {
    drawNews(data: ArticlesResponse): void;
    drawSources(data: SourcesResponse): void;
}

export interface LoaderInterface {
    getResponse<T>({ endpoint, options }: GetResponseInput, callback: (data: T) => void): void;
    makeUrl(options: LoaderOptions | object, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: (data: T) => void, options?: object): void;
}

export interface AppControllerInterface {
    getSources<T>(callback: (data: T) => void): void;
    getNews<T>(e: Event, callback: (data: T) => void): void;
}

export interface AppInterface {
    drawNews(): void;
    drawSources(): void;
    start(): void;
}

export interface SourcesInterface {
    draw(data: InputDataSource[]): void;
}

export interface NewsInterface {
    draw(data: Article[]): void;
}

// interfaces for incoming data from API

export interface LoaderOptions {
    apiKey: string;
}

export interface SourcesResponse {
    status: string;
    sources: InputDataSource[];
}

export interface InputDataSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

type Source = Pick<InputDataSource, 'id' | 'name'>;

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

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export type GetResponseInput = {
    endpoint: string;
    options?: { sources?: string };
};
