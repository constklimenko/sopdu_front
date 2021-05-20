function LkOffAll() {
    var lk = document.querySelector('.lk__right');
    for (var i = 0; i < lk.childNodes.length; i++) {
        lk.childNodes[i].classList.add('hide');
    }

    var aside = document.querySelector('.lk__aside__container');
    for (var i = 0; i < aside.childNodes.length; i++) {
        aside.childNodes[i].classList.remove('lk__aside__link--active');
    }
}

function LkActivateThis(e) {
    e.classList.add('lk__aside__link--active');
}