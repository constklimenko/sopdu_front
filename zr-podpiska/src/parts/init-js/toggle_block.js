function ToggleBlock(trigger, selector, target_class) {
    if (trigger == 'on') {
        document.querySelector(selector).parentNode.classList.remove(target_class);
    } else {
        document.querySelector(selector).parentNode.classList.add(target_class);
    }

}