import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b6b262ef6eb24c6595a4197633967d94', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
