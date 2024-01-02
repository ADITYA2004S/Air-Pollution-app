const cityName = document.querySelector(".AQI-city-heading");
const generalText = document.querySelector(".AQI-result-heading");
cityName.classList.add("hidden");
generalText.classList.remove("hidden");
function cityname() {
  generalText.classList.add("hidden");
  cityName.classList.remove("hidden");
}
