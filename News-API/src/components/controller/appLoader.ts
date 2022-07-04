import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f99f0012c2934a9aaa523c62c46b1fca', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
