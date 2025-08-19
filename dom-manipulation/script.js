document.addEventListener('DOMContentLoaded', () => {
    // Create a button to add a quote
    const button = document.createElement('button');
    button.id = 'newQuote';
    button.textContent = 'Add New Quote';
    document.body.appendChild(button); // Append it to the body
});

const quoteDisplay = document.getElementById('displayQuote');
const showQuoteButton = document.getElementById('showQuote');
const addQuoteButton = document.getElementById('newQuote');

const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        category: "inspirational"},
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        category: "motivational"},
]

//show a random quote
function showRandomQuote() {
    pass;
}

//add new quote
function createAddQuoteForm() {
    pass;
}

