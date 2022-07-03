import './news.css';
import { IArticle } from '../../../types/index';

class News {
    draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLUListElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLUListElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLTimeElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLTimeElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent =
                item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLParagraphElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).append(fragment);
    }
}

export default News;
