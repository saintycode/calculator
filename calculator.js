// calculator.js

/* Logic to handle Calculator operations */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Function to evaluate an expression safely
function evaluateExpression(expression) {
    // Logic to parse and evaluate the expression safely without using eval()
}

// Improved UI Functionality
function updateUI() {
    // Code to improve mobile responsiveness and style changes using Tailwind CSS
}

// Function to handle button clicks
function handleButtonClick(value) {
    // Logic for handling button clicks with better error handling
}

// Call updateUI on resize to adjust layout
window.addEventListener('resize', updateUI);

// Initial UI setup
updateUI();