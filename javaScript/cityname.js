const heading = document.querySelector(".AQI-city-heading");
const result = document.querySelector(".AQI-output-heading");
heading.classList.remove("hidden");

const button = document.querySelector(".AQI-search-btn");
button.addEventListener("click", function () {
  heading.classList.add("hidden");
  result.classList.remove("hidden");
});
