function render() {
    // Clear/fill the screen.
    ctx.fillStyle = "#222"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Render the paddle
    ctx.fillStyle = "#eef"
    ctx.fillRect(gameData.paddle.x, gameData.paddle.y, gameData.paddle.w, gameData.paddle.h)

    // Render the ball
    ctx.fillRect(gameData.ball.x, gameData.ball.y, gameData.ball.w, gameData.ball.h)
}