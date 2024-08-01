document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const scoreElement = document.getElementById('score');
    const clickButton = document.getElementById('clickButton');

    clickButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    });
});