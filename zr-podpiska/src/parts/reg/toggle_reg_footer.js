// Получаем нужный элемент
var element = document.querySelector('#submit1');



function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}




var Visible = function(target) {


    if (isScrolledIntoView(element)) {


        document.querySelector('.reg__footer').classList.add('hide');


    } else {
        // Если элемент не видно, то запускаем этот код


        document.querySelector('.reg__footer').classList.remove('hide');
    };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    Visible(element);
});


Visible(element);