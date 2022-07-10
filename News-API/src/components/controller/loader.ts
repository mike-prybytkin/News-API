import { LoaderInterface, LoaderOptions, GetResponseInput } from '../../types/index';

class Loader implements LoaderInterface {
    constructor(private baseLink: string, private options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResponse<T>({ endpoint, options = {} }: GetResponseInput, callback: (data: T) => void): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(response: Response): Response {
        if (!response.ok) {
            if (response.status === 401 || response.status === 404)
                console.log(`Sorry, but there is ${response.status} error: ${response.statusText}`);
            throw Error(response.statusText);
        }

        return response;
    }

    makeUrl(options: LoaderOptions | object, endpoint: string): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: object = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
