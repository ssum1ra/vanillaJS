const loginClock = document.querySelector("#login-clock");
const mainClock = document.querySelector("#main-clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    loginClock.innerText = `${hours}:${minutes}:${seconds}`;
    mainClock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //지연없이 바로 호출
setInterval(getClock,1000);