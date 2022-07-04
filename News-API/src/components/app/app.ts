import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { EndpointSources } from '../../types/index';
import { EndpointEverything } from '../../types/index';

class App {
    private _controller: AppController;
    private _view: AppView;
    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this._controller.getNews(e, (data: EndpointEverything) => this._view.drawNews(data))
        );
        this._controller.getSources((data: EndpointSources) => this._view.drawSources(data));
    }
}

export default App;
