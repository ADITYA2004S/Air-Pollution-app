const card = document.querySelectorAll(".air-pollution-soln");
const component = document.querySelectorAll(".pollution-components-info");

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

component.forEach((component) => {
  observer.observe(component);
});
card.forEach((card) => {
  observer.observe(card);
});
