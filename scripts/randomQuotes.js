let quotes = [
    "Stay Hungry. Stay Foolish.",
    "Good Artists Copy, Great Artists Steal.",
    "Argue with idiots, and you become an idiot.",
    "Be yourself; everyone else is already taken.",
    "Simplicity is the ultimate sophistication."
];
const quoteFormContainer = document.querySelector('.add-quote-container');
const quoteInput = document.querySelector('.add-quote-input');
const quoteForm = document.querySelector('.add-quote-form');
const quoteReset = document.querySelector('.reset-quotes')
const quoteDisplay = document.querySelector('.quotes');
let something = JSON.parse(localStorage.getItem("quotes"));

if (something === null) {
    localStorage.setItem("quotes", JSON.stringify(quotes));
    something = JSON.parse(localStorage.getItem("quotes"));
    displayQuote();
} else {
    displayQuote();
}

function displayQuote() {
    let index = Math.floor(Math.random() * something.length);
    quoteDisplay.innerHTML = `"${something[index]}"`;
}

quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    something.push(quoteInput.value);
    localStorage.setItem("quotes", JSON.stringify(something));
    quoteInput.value = "";
    console.log(something)
})

quoteReset.addEventListener('click', ()=>{
    localStorage.removeItem("quotes");
})


quoteDisplay.addEventListener('click', () => {
    quoteFormContainer.classList.toggle("hide");
})

//displayQuote();