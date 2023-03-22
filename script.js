// Nav Bar

const sections = document.querySelectorAll('.nav_scroll');
const navLi = document.querySelectorAll('nav li');

window.addEventListener('scroll', navHighlight);

function navHighlight() {
  let current = 'header';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(window.scrollY >= (sectionTop - sectionHeight / 2 )){
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( li => {
    li.classList.remove('active');
    if(
      li.classList.contains(current)){
        li.classList.add('active')
      }
  })
};

// Script for lateral movement of containers while scrolling

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
