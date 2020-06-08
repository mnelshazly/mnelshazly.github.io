const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = document.querySelector('.countdown');
const loading = document.querySelector('.loading');
const quoteText = document.querySelector(".text q");
const quoteAuthor = document.querySelector(".author span");

const then = new Date('07/02/2020 10:00 AM').getTime();

const quotes = [
    {author: "John Wooden", text: "Don’t let what you cannot do interfere with what you can do."},
    {author: "John Maxwell", text: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential."},
    {author: "Unknown", text: "Strive for progress, not perfection."},
    {author: "Beverly Sills", text: "There are no shortcuts to any place worth going."},
    {author: "Henry Ford", text: "Failure is the opportunity to begin again more intelligently."},
    {author: "Thomas A. Edison", text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."},
    {author: "George Lorimer", text: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction."},
];

// Motivational quoutes function

function displayQuote () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerHTML = randomQuote.text;
    quoteAuthor.innerHTML = randomQuote.author;
}

// Counter

function displayTimeLeft () {
    const now = new Date().getTime();
    const distance = then - now;

    // Calculating the time left (days, hours, minutes, seconds)
    const d = Math.floor(distance / (24*60*60*1000));
    const h = Math.floor((distance % (24*60*60*1000)) / (60*60*1000));
    const m = Math.floor((distance % (60*60*1000)) / (60*1000));
    const s = Math.floor((distance % (60*1000)) / (1000));
    // console.log(days, hours, minutes, seconds);

    // Add values to the DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

// displayTimeLeft();
setInterval(displayTimeLeft, 1000);

// Display the motivational quote
displayQuote();