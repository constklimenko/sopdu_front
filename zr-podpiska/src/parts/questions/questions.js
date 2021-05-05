function openText(e) {
    e.classList.toggle('questions__item__arrow-up');
    e.parentNode.parentNode.querySelector('.questions__item__text').classList.toggle('questions__item__text--full');
}