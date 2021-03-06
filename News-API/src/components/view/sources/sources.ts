import './sources.css';
import { SourcesInterface, InputDataSource } from '../../../types/index';

class Sources implements SourcesInterface {
    draw(data: InputDataSource[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: InputDataSource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
