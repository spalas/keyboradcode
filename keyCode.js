let code = document.getElementById('code');
document.addEventListener("keydown", function (e) {
    e.preventDefault
    let altKey = e.altKey, 
        metaKey = e.metaKey,
        shiftKey = e.shiftKey,
        ctrlKey = e.ctrlKey,
        spaceKey = e.spaceKey,
        keyPressed = e.key,
        keycode = e.keycode,
        msg = " You pressed ✔ " 
    if (altKey && keyPressed != "Alt") {
        msg += "Alt + ";
    }
    if (shiftKey && keyPressed != "Shift") {
        msg += "Shift + ";
    }
    if (metaKey && keyPressed != "Meta") {
        msg += "Window + ";
    }
    if (spaceKey && keyPressed != "space") {
        msg += "Space + ";
    }
    if (ctrlKey && keyPressed != "Control") {
        msg += "Ctrl + ";
    }

    msg += keyPressed + " " + "  💚 Follow me"
    code.innerHTML = msg;
    
    
})