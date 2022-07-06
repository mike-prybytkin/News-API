import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppInterface, SourcesResponse, ArticlesResponse } from '../../types/index';

class App implements AppInterface {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    drawNews() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ArticlesResponse) => this.view.drawNews(data))
        );
    }

    drawSources() {
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }

    start() {
        this.drawNews();
        this.drawSources();
    }
}

export default App;
