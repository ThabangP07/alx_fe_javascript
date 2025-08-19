document.addEventListener('DOMContentLoaded', () => {
    // Create a button to add a quote
    const button = document.createElement('button');
    button.id = 'newQuote';
    button.textContent = 'Add New Quote';
    document.body.appendChild(button); // Append it to the body
});

const quoteDisplay = document.getElementById('quoteDisplay');
const showQuoteButton = document.getElementById('showQuote');

const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        category: "inspirational"},
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        category: "motivational"},
];



//show a random quote
function showRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//add new quote
function createAddQuoteForm() {
    
}

function displayRandomQuote() {
    const quote = showRandomQuote();
    quoteDisplay.innerHTML = `<p>Quote: ${quote.text}.</p>
    </br>
    <p>Category: ${quote.category}.</p>`;
}

showQuoteButton.addEventListener('click', displayRandomQuote);