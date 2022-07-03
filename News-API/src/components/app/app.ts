import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IEndpointSources } from '../../types/index';
import { IEndpointEverything } from '../../types/index';

class App {
    private _controller: AppController;
    private _view: AppView;
    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this._controller.getNews(e, (data: IEndpointEverything) => this._view.drawNews(data))
        );
        this._controller.getSources((data: IEndpointSources) => this._view.drawSources(data));
    }
}

export default App;
