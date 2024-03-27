document.addEventListener('DOMContentLoaded', () => {
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
    const scoreDisplay = document.getElementById('score');
    let snakeX = 0;
    let snakeY = 0;
    let foodX;
    let foodY;
    let score = 0;

    function randomizeFoodPosition() {
        foodX = Math.floor(Math.random() * 20) * 20;
        foodY = Math.floor(Math.random() * 20) * 20;
        food.style.left = foodX + 'px';
        food.style.top = foodY + 'px';
    }

    function moveSnake() {
        snake.style.left = snakeX + 'px';
        snake.style.top = snakeY + 'px';
    }

    function checkCollision() {
        if (snakeX === foodX && snakeY === foodY) {
            score++;
            scoreDisplay.innerText = 'Score: ' + score;
            randomizeFoodPosition();
        }
    }

    function gameLoop() {
        snakeX += 20;
        checkCollision();
        moveSnake();
    }

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                snakeY -= 20;
                break;
            case 'ArrowDown':
                snakeY += 20;
                break;
            case 'ArrowLeft':
                snakeX -= 20;
                break;
            case 'ArrowRight':
                snakeX += 20;
                break;
        }
    });

    randomizeFoodPosition();
    setInterval(gameLoop, 200);
});
