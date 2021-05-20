function HeaderActivateThis(e) {
    var parent = e.parentNode;

    for (var i = 0; i < parent.childNodes.length; i++) {
        parent.childNodes[i].classList.remove('index-modal__container__title--active');
    }
    e.classList.add('index-modal__container__title--active');
}