const text = `I’m a self-taught developer with a strong passion for creating interactive digital experiences.

Beginning with game design at a young age, I later expanded into web development and robotics — always driven by curiosity and a desire to learn.

I’m dedicated to refining my skills and building innovative projects that challenge my creativity and technical ability.`;

let i = 0;
const speed = 20; // ms per character
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");
let hasTyped = false;

function typeEffect() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}


// Start when section scrolls into view (runs once)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      hasTyped = true;
      typeEffect();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

observer.observe(document.getElementById("about-me"));