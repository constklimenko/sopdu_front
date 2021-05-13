document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.date-picker__row__month');
    for(var x = 0; x < elems.length; x++){
        elems[x].querySelector('input').addEventListener( 'change', function(){
            this.parentNode.classList.toggle('date-picker__row__month--active');
        } )
    }
  });