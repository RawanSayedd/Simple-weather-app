const apiKey = "fae4d7847e7347780ea6f99e7311f439";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status === 200) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "images/snow.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      document.querySelector(".weather-icon").src = "images/thunderstorm.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    }
  } else {
    alert("City not found, please try again.");
  }
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
//for hiting Enter on keyboard not just clicking on the btn
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
