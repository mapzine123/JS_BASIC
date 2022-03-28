const quotes = [
    {quote : "ABCD", author: "DISNEY"},
    {quote : "BBC", author: "JOCKER"},
    {quote : "DDAD", author: "HACKERS"},
    {quote : "BPAD", author: "PYTHON"},
    {quote : "PPAP", author: "C++"},
    {quote : "LDFU", author: "JAVA"},
    {quote : "SNV", author: "JS"},
    {quote : "QQRSDF", author: "DISNEY"},
    {quote : "CVXZX", author: "NETFLIX"},
    {quote : "ABCDQQW", author: "SQL"},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;