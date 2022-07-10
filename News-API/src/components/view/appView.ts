import News from './news/news';
import Sources from './sources/sources';
import { AppViewInterface, SourcesResponse, ArticlesResponse } from '../../types/index';

export class AppView implements AppViewInterface {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
