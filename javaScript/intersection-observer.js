const card = document.querySelectorAll(".air-pollution-soln");
const rankings = document.querySelectorAll(".pollution-rankings");
const soln_heading = document.querySelectorAll(".solution-heading");
const rankings_heading = document.querySelectorAll(".pollution-rank-heading");
const component = document.querySelectorAll(".pollution-components-info");
const aqi_detail = document.querySelectorAll(".aqi-detail");
const component_heading = document.querySelectorAll(
  ".pollution-components-heading"
);
const aqi_picture = document.querySelectorAll(".aqi-pictorial-representation");

// const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // if(entry.classList.con)
      entry.target.classList.toggle("hidden", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

soln_heading.forEach((soln_heading) => {
  observer.observe(soln_heading);
});

card.forEach((card) => {
  observer.observe(card);
});

rankings.forEach((rankings) => {
  observer.observe(rankings);
});

rankings_heading.forEach((rankings_heading) => {
  observer.observe(rankings_heading);
});

component.forEach((component) => {
  observer.observe(component);
});

aqi_detail.forEach((aqi_detail) => {
  observer.observe(aqi_detail);
});

component_heading.forEach((component_heading) => {
  observer.observe(component_heading);
});

aqi_picture.forEach((aqi_picture) => {
  observer.observe(aqi_picture);
});
