const date = document.getElementById("date");
const time = document.getElementById("time");
const day = document.getElementById("day");


setInterval(setDate, 1000)

function setDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const sec = formatZero(currentDate.getSeconds());
    const mins = formatZero(currentDate.getMinutes());
    const amOrPm = currentDate.getHours() >= 12 ? "PM" : "AM";

    date.textContent = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    time.textContent = `${currentDate.getHours() % 12 || 12}:${mins}:${sec} ${amOrPm}`;
    day.textContent = `${days[currentDate.getDay()]}`
} 

function formatZero(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
}


let mode = 0;
document.getElementById("mode").onclick = function() {
    // document.documentElement.style.setProperty('--light-bg', '#171717');
    // document.documentElement.style.setProperty('--dark-bg', '#EEEEEE');
    const modes = ["img/gif1.webp", "img/gif2.gif", "img/gif3.gif", "img/gif4.gif"];

    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${modes[mode]})`;
    mode+=1;
    mode >= modes.length ? mode=0 : mode;
};

const audio = document.getElementById("myAudio").autoplay;