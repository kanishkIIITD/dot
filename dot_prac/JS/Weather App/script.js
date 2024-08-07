// API Key for openweather
// const API_KEY = "90be982170d93221ebe0f736b95e0b76";

// function renderWeatherDetails(data) {
//   let newPara = document.createElement("p");
//   newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
//   document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails() {
//   const location = "delhi";
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
//   );
//   const data = await response.json();
//   console.log("Weather: ", data);
//   renderWeatherDetails(data);
// }
// fetchWeatherDetails();

// async function fetchCustomWeatherDetails() {
//   const lat = 14.222;
//   const lon = 15.24;
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//   );
//   const data = await response.json();
//   console.log("Weather: ", data);
//   renderWeatherDetails(data);
// }
// fetchCustomWeatherDetails();

// Using tomorrow api for weather
// const API_KEY = "YjiFtmJPQW5cLcKpyNJqdXlK1XQz5g0H";

// async function fetchWeatherDetails() {
//   let location = "delhi";
//   const response = await fetch(
//     `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`
//   );
//   const data = await response.json();
//   console.log("Weather: ", data);
//   renderWeatherDetails(data);
// }

// function renderWeatherDetails(data) {
//   let newPara = document.createElement("p");
//   newPara.textContent = `${data?.timelines?.minutely[0]?.values?.temperature.toFixed(
//     2
//   )} °C`;
//   document.body.appendChild(newPara);
// }

// fetchWeatherDetails();

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(
    ".grant-location-container"
);
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
