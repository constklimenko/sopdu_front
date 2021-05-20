function ToggleBlock(trigger, selector, target_class) {
    if (trigger == 'on') {
        document.querySelector(selector).parentNode.classList.remove(target_class);
    } else {
        document.querySelector(selector).parentNode.classList.add(target_class);
    }

}

function ToggleBlockActual(trigger, selector, target_class) {
    if (trigger == 'on') {
        document.querySelector(selector).classList.remove(target_class);
    } else {
        document.querySelector(selector).classList.add(target_class);
    }

}