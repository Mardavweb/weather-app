const apiKey = "8f0a3d61857718685460dbb965efb389";
const search = document.querySelector('.search-bt');

async function checkWeather (city)
{
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    let weather;
    if(response.ok) {
        const data = await response.json();
    const condition = data.weather[0].main;
  

let weatherIcon = "images/clear.png";
if (condition === "Clouds") {
        weatherIcon = "images/clouds.png";
        document.body.style.backgroundColor = "#A9A9A9";
    } else if (condition === "Clear") {
        weatherIcon = "images/clear.png";
        document.body.style.backgroundColor = "#87CEEB";
    } else if (condition === "Rain") {
        weatherIcon = "images/rain.png";
        document.body.style.backgroundColor = "#4682B4";
    } else if (condition === "Drizzle") {
        weatherIcon = "images/drizzle.png";
        document.body.style.backgroundColor = "#708090";
    } else if (condition === "Thunderstorm") {
        weatherIcon = "images/thunderstorm.png";
        document.body.style.backgroundColor = "#3E3E3E";
    } else if (condition === "Snow") {
        weatherIcon = "images/snow.png";
        document.body.style.backgroundColor = "#E0FFFF";
    } else if (condition === "Mist") {
        weatherIcon = "images/mist.png";
        document.body.style.backgroundColor = "#E5E5E5";
    }
const cityInput = data.name;
const temp = data.main.temp;
weather = `<div class="full-search">
        <input class="my-city" type = "text" placeholder="Enter city name"
        spellcheck="false">
        <button class="search-bt"><img src="images/search.png"></button>
    </div>
    <div class="city">
    <img class="weather-icon" src="${weatherIcon}">
    <h1 class="temp">${(temp).toFixed(0)}°C</h1>
    <br>
    <h2 class="city-name">${cityInput}</h2>
    </div>    
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="humidity-wind">
        <div class="humidity">
            <img src="images/humidity.png">
            <div class="humidity-text">
            <p>Humidity ${data.main.humidity}%</p>
            </div>
        </div>
        <div class="wind-speed">
            <img src="images/wind.png">
            <div class="wind-text">
                <p>Wind speed</p>
                <p>${data.wind.speed} km/h</p>
            </div>
        </div>
    </div>`;

document.querySelector('.full-code').innerHTML = weather;
}
else {
    document.querySelector('.full-code').innerHTML = `
            <div class="full-search">
                <input class="my-city" type="text" placeholder="Enter city name" spellcheck="false">
                <button class="search-bt"><img src="images/search.png"></button>
            </div>
            <p style="text-align:center; margin-top:20px;">
                Invalid city name. Please try again.
            </p>
        `;
}

}

document.addEventListener('click', function (e) {
  const button = e.target.closest('.search-bt');
  if (button) {
    const input = document.querySelector('.my-city');
    if (input) {
      const city = input.value.trim();
      if (city !== "") {
        checkWeather(city);
      }
    }
  }
});