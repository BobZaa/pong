function gameLogic() {
    if (keyboard["KeyA"])
        gameData.paddle.x -= gameData.paddle.s

    if (keyboard["KeyD"])
        gameData.paddle.x += gameData.paddle.s



    gameData.ba7ll.x += gameData.ball.s.x
    gameData.ball.y += gameData.ball.s.y



    if (gameData.ball.y <= 0)
        gameData.ball.s.y *= -1

    if (gameData.ball.x >= canvas.width - gameData.ball.w)
        gameData.ball.s.x *= -1

    if (gameData.ball.x <= 0)
        gameData.ball.s.x *= -1

    if (gameData.ball.y >= canvas.height) {
        gameData.ball.s.y *= -1
        gameData.ball.x = canvas.width / 2
        gameData.ball.y = canvas.height / 2
    }



    if (
        gameData.ball.x >= gameData.paddle.x &&
        gameData.ball.x <= gameData.paddle.x + gameData.paddle.w &&
        gameData.ball.y + gameData.ball.h >= gameData.paddle.y &&
        gameData.ball.y <= gameData.paddle.y + gameData.paddle.h 
        
    )
    {
        gameData.ball.s.y *= -1.01
        gameData.ball.s.x *= 1.01   
    }
}