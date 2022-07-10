import AppLoader from './appLoader';
import { AppControllerInterface } from '../../types/index';

class AppController extends AppLoader implements AppControllerInterface {
    getSources<T>(callback: (data: T) => void) {
        super.getResponse(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: (data: T) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResponse(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
