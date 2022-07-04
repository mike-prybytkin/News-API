const buttonsContainer = document.querySelector('.buttons') as HTMLTemplateElement;
const sourceItem = document.querySelectorAll('.source__item');

function tagCurrentNews(): void {
    console.log('ffffffffffffff');
    buttonsContainer.addEventListener('click', (event) => {
        sourceItem.forEach((el) => el.classList.remove('active'));
        (event.target as HTMLInputElement).classList.add('active');
    });
}

export default tagCurrentNews;
