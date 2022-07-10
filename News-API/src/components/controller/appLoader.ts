import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/v2/', {
            // link for deploy -> nodenews.herokuapp.com
            // link for work with code -> newsapi.org
            apiKey: 'b6b262ef6eb24c6595a4197633967d94', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
