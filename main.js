const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

function gameLoop() {
    gameLogic()

    render()

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)