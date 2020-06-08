const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = document.querySelector('.countdown');
const loading = document.querySelector('.loading');

const then = new Date('07/02/2020 10:00 AM').getTime();

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