const options = {
  threshold: 0.3,
};

function intersect(entry) {
  if (entry.isIntersecting) {
    entry.target.classList.add("show");
  } else {
    entry.target.classList.remove("show");
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach(intersect);
  },
  options
);

const targets = document.querySelectorAll(".hidden");

targets.forEach((target) => {
  observer.observe(target);
});
