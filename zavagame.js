const ROWS = 5;
const COLS = 7;
const GOAL = 1000;
let score = 0;
let selectedBall = null;

// Emoji bumbiņu simboli
const emojiMap = {
    1: "🟡",
    2: "🔵",
    3: "🔴",
    4: "🟢"
};

// Funkcija, kas izveido laukumu
function createField() {
    const field = document.getElementById('field');
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            field.appendChild(cell);
        }
    }
}

// Funkcija, kas ģenerē nejaušas bumbiņas
function generateBalls() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (Math.random() < 0.3) {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.dataset.color = Math.floor(Math.random() * 4) + 1; // Katram krāsas tipam ir sava vērtība
            ball.textContent = emojiMap[ball.dataset.color];
            ball.addEventListener('click', ballClickHandler);
            cell.appendChild(ball);
        }
    });
}

// Funkcija, kas apstrādā klikšķus uz bumbiņām
function ballClickHandler(event) {
    const ball = event.currentTarget;
    if (selectedBall) {
        moveBall(selectedBall, ball.parentNode);
        selectedBall = null;
    } else {
        selectedBall = ball;
    }
}

// Funkcija, kas pārvieto bumbiņu uz norādīto laukumu šūnu
function moveBall(ball, cell) {
    cell.appendChild(ball);
    checkForMatches();
    checkForGoal();
}

// Funkcija, kas pārbauda, vai ir veidojusies trīs vai vairāk vienādu bumbiņu grupa
function checkForMatches() {
    // Implementēt šo funkciju
}

// Funkcija, kas pārbauda, vai ir sasniegts mērķis
function checkForGoal() {
    if (score >= GOAL) {
        // Spēle beidzas
    }
}

// Funkcija, kas apstrādā klikšķus uz laukuma šūnām
function cellClickHandler(event) {
    const cell = event.currentTarget;
    const selectedCell = selectedBall ? selectedBall.parentNode : null;
    if (selectedCell && isAdjacent(selectedCell, cell)) {
        moveBall(selectedBall, cell);
        selectedBall = null;
    }
}

// Funkcija, kas pārbauda, vai norādītās šūnas ir blakus esošas
function isAdjacent(cell1, cell2) {
    const row1 = parseInt(cell1.dataset.row);
    const col1 = parseInt(cell1.dataset.col);
    const row2 = parseInt(cell2.dataset.row);
    const col2 = parseInt(cell2.dataset.col);
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
}

// Funkcija, kas atgriež lietotāju atpakaļ uz galveno lapu
function goToMainMenu() {
    // Implementēt šo funkciju
}

// Izveidojam laukumu un bumbiņas, un pievienojam klausītājus
createField();
generateBalls();
document.getElementById('mainMenuButton').addEventListener('click', goToMainMenu);