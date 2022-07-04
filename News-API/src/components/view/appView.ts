import News from './news/news';
import Sources from './sources/sources';
import { EndpointSources } from '../../types/index';
import { EndpointEverything } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: EndpointEverything) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: EndpointSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
