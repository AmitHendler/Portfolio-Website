document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const startAgainButton = document.getElementById('startAgain');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    
    function setupCellListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const index = parseInt(cell.dataset.index);
            cell.addEventListener('click', () => handleCellClick(index));
        });
    }

    // Function to initialize the game board
    function initializeBoard() {
        board.innerHTML = ''; // Clear the existing board
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            board.appendChild(cell);
        }

       
        setupCellListeners();
    }

    // Initialize the game board
    initializeBoard();

    
    function handleCellClick(index) {
        if (!gameActive || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        renderBoard();

        if (checkWinner()) {
            message.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            showStartAgainButton();
        } else if (isBoardFull()) {
            message.textContent = 'It\'s a draw!';
            gameActive = false;
            showStartAgainButton();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // Check for a winner
    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    // Check if the board is full
    function isBoardFull() {
        return gameBoard.every(cell => cell !== '');
    }

    // Render the current state of the board
    function renderBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
            cell.style.backgroundColor = gameBoard[index] === 'X' ? '#673ab7' : '#009688';
        });
    }

    // Show the "Start Again" button
    function showStartAgainButton() {
        startAgainButton.style.display = 'block';
    }

    // Function to reset the game state
    function resetGame() {
        message.textContent = '';
        startAgainButton.style.display = 'none';
        gameActive = true;
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        initializeBoard();
    }

    // Attach a click event listener to the "Start Again" button
    startAgainButton.addEventListener('click', resetGame);
});
