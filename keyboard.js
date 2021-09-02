let keyboard = {}

document.addEventListener(
    "keydown",
    event => 
        keyboard[event.code] = true
)

document.addEventListener(
    "keyup",
    event => 
        keyboard[event.code] = false
)
