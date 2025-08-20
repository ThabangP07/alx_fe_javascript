document.addEventListener('DOMContentLoaded', () => {
    
    // Create a button to add a quote
    const button = document.createElement('button');
    button.id = 'addNewQuote';
    button.textContent = 'Add New Quote';
    document.body.appendChild(button); // Append it to the body
    
    button.addEventListener('click', createAddQuoteForm);
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

// load quotes from localStorage if available
let storedQuotes = JSON.parse(localStorage.getItem('localQuotes'));

//add new quote
function createAddQuoteForm() {

    quoteDisplay.style.display = 'none'; // Hide the quote display
    showQuoteButton.style.display = 'none'; // Hide the show quote button
    document.getElementById("addNewQuote").style.display = "none";


    // Create a form to add a new quote
    const formContainer = document.createElement('div');
    formContainer.id = 'quoteForm';
    formContainer.innerHTML = `
        <h2>Add a New Quote</h2>
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" /></br>
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" /></br>
        <button onclick="addQuote()">Add Quote</button>
    `;

    document.body.appendChild(formContainer);
}

// Function to add a new quote to the quotes array
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        /*
        quotes.push({
            text: newQuoteText,
            category: newQuoteCategory
        });
        */

        let storedQuotes = JSON.parse(localStorage.getItem('localQuotes')) || [];

        storedQuotes.push({ newQuoteText, newQuoteCategory });

        localStorage.setItem('localQuotes', JSON.stringify(storedQuotes)); // Save the updated quotes to localStorage
        
        // Clear the input fields
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        // Remove the form from the DOM
        const formContainer = document.getElementById('quoteForm');
        formContainer.remove();

        // Return to the home page
        quoteDisplay.style.display = 'block';
        showQuoteButton.style.display = 'inline-block'; 
        document.getElementById("addNewQuote").style.display = "inline-block";

    } else {
        alert('Please fill in both fields.');
    }
}

//show a random quote
function showRandomQuote(objArray) {
    return objArray[Math.floor(Math.random() * objArray.length)];
}

// Function to display the chosen quote
function displayRandomQuote() {
    const quote = showRandomQuote(storedQuotes || quotes); // Use storedQuotes if available, otherwise use the default quotes array
    
    if (storedQuotes) {
        quote.text = quote.newQuoteText;
        quote.category = quote.newQuoteCategory;
    }

    quoteDisplay.innerHTML = `<p>Quote: ${quote.text}</p>
    <p>Category: ${quote.category}.</p>`;
}

showQuoteButton.addEventListener('click', displayRandomQuote); // trigger the display of a random quote when the button is clicked

//Read the file and update the quotes array and local storage accordingly.
function importFromJsonFile(event) {
    const fileReader = new FileReader();
        fileReader.onload = function(event) {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        saveQuotes();
        alert('Quotes imported successfully!');
    };
    
    fileReader.readAsText(event.target.files[0]);
  }