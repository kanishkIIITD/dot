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
const errorContainer = document.querySelector(".error-container");
const apiErrorImg = document.querySelector("[data-notFoundImg]");
const apiErrorMessage = document.querySelector("[data-apiErrorText]");
const apiErrorBtn = document.querySelector("[data-apiErrorBtn]");

const API_KEY = "90be982170d93221ebe0f736b95e0b76";

let currentTab = userTab;
currentTab.classList.add("current-tab");

// If we have coordinates saved in session, then use the coordinates and display your weather section
getFromSessionStorage();

function switchTab(clickedTab) {
    errorContainer.classList.remove("active");
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        clickedTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

// If user tab is clicked then switch the tab
userTab.addEventListener("click", () => {
    switchTab(userTab);
});

// If search tab is clicked then switch the tab
searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

// Checks if coordinates are already present in session storage
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } catch (err) {
        // HW
        loadingScreen.classList.remove("active");
        errorContainer.classList.add("active");
        console.log("Unable to fetch your weather. Error: " + err);
        apiErrorImg.style.display = "none";
        apiErrorMessage.innerText = `Error: ${error?.message}`;
        apiErrorBtn.addEventListener("click", fetchUserWeatherInfo);
    }
}

function renderWeatherInfo(weatherInfo) {
    // Fetching elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // Fetching value from api and putting in UI
    cityName.innerText = `${weatherInfo?.name}`;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = `${weatherInfo?.weather?.[0]?.description}`;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // HW - show an alert for no geolocation support available
        errorContainer.classList.add("active");
        console.log("Error: Unable to get geolocation.");
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    if (cityName == "") return;

    fetchSearchWeatherInfor(cityName);
});

async function fetchSearchWeatherInfor(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    errorContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } catch (err) {
        // HW
        loadingScreen.classList.remove("active");
        errorContainer.classList.add("active");
        console.log("Error: Unable to get geolocation.");
        apiErrorMessage.innerText = `${error?.message}`;
        apiErrorBtn.style.display = "none";
    }
}
