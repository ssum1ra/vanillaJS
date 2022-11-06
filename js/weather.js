const weatherForm = document.querySelector("#main-weather");
const API_KEY = "a2749be98d68354bbbee3d393c00eca4";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    
    fetch(url)
    .then(response => response.json())
    .then((data)=>{  
        const weather = document.querySelector("#main-weather span:first-child");    
        const city = document.querySelector("#main-weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);