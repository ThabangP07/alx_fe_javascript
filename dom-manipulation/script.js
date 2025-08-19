document.addEventListener('DOMContentLoaded', () => {
    // Create a button to add a quote
    const button = document.createElement('button');
    button.id = 'addNewQuote';
    button.textContent = 'Add New Quote';
    document.body.appendChild(button); // Append it to the body
});

// Get elements from the DOM
const quoteDisplay = document.getElementById('quoteDisplay');
const showQuoteButton = document.getElementById('newQuote');

const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        category: "inspirational"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        category: "motivational"
    },
    { 
        text: "Stay positive!", 
        category: "Motivation" 
    },
    { 
        text: "Code is like humor.", 
        category: "Programming" 
    },
    { 
        text: "Simplicity is the soul of efficiency.", 
        category: "Wisdom" 
    },
];



//show a random quote
function showRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//add new quote
function createAddQuoteForm() {

    quoteDisplay.style.display = 'none'; // Hide the quote display
    showQuoteButton.style.display = 'none'; // Hide the show quote button
    document.getElementById("addNewQuote").style.display = "none";


    // Create a form to add a new quote
    const formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <h2>Add a New Quote</h2>
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" /></br>
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" /></br>
        <button onclick="addQuote()">Add Quote</button>
    `;

    document.body.appendChild(formContainer);
}

function displayRandomQuote() {
    const quote = showRandomQuote();
    quoteDisplay.innerHTML = `<p>Quote: ${quote.text}</p>
    <p>Category: ${quote.category}.</p>`;
}

showQuoteButton.addEventListener('click', displayRandomQuote);