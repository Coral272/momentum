const quotes = [
    {
        quote: "They must often change who would be constant in happiness or wisdom.", 
        author: "Confucius"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.", 
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.", 
        author: "Helen Keller"
    },
    {
        quote: "This too shall pass.", 
        author: "Et hoc transibit"
    },
    {
        quote: "Only I can change me life, no one can do it for me.", 
        author: "Carol Burnett"
    },
    {
        quote: "Turn your wounds into wisdom.", 
        author: "Oprah Gail Winfrey"
    },
    {
        quote: "Great minds have purposes, others have wishes.", 
        author: "Washington Irving"
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.", 
        author: "Albert Einstein"
    },
    {
        quote: "We must believe in luck. For how else can we explain the success of those we don’t like?", 
        author: "Jean Cocteau"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;