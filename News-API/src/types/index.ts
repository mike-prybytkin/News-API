export interface ILoaderOptions {
    apiKey: string;
}

export interface IResponseObject {
    status: string;
    sources: string[];
    ok: boolean;
    statusText: string;
}

//export type Callback<T> = (data: T) => void;

export interface IEndpointSources {
    status: string;
    sources: ISourseExtended[];
}

export interface ISource {
    id: string;
    name: string;
}

export interface ISourseExtended extends ISource {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

//     id: string;
//     name: string;
//     description: string;
//     url: string;
//     category: string;
//     language: string;
//     country: string;
