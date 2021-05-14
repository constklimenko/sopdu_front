function ToggleBlock(e){
if(e.getAttribute('data-trigger') == 'on'){
    document.querySelector(e.getAttribute('data-selector')).parentNode.classList.remove('hide');
}else{
    document.querySelector(e.getAttribute('data-selector')).parentNode.classList.add('hide');
}
   
}