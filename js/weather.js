const API_KEY = config.apikey;


function onGeoOk(position) {
    const lat = position.coords.latitude;   //  37.2518649 
    const lon = position.coords.longitude;  //  127.0292881
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const weather = document.querySelector(".weather span:first-child");
            const city = document.querySelector(".weather span:last-child");

            weather.innerHTML = `${data.weather[0].main} / ${parseInt(data.main.temp)}°C`;
            city.innerHTML = `@${data.name}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you. ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);