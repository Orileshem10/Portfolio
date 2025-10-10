document.addEventListener('DOMContentLoaded', function() {
  var projectsData = {
    robotics: [
      { title: "Autonomous Line-Following Robot", desc: "A robot designed to detect and follow a line path using infrared sensors and microcontroller logic." },
      { title: "Obstacle Avoidance Bot", desc: "Uses ultrasonic sensors to detect obstacles and navigate around them autonomously." },
      { title: "Voice-Controlled Rover", desc: "A mobile robot that responds to voice commands using speech recognition." }
    ],
    code: [
      { title: "Portfolio Website", desc: "A single-page site showcasing projects, résumé, and blog posts." },
      { title: "Task Manager App", desc: "A web app to manage tasks using local storage and modern JS." }
    ],
    games: [
      { title: "Pixel Dungeon", desc: "A retro-styled dungeon crawler built with Unity and C#." },
      { title: "Space Shooter", desc: "A top-down 2D shooter made with Phaser.js." }
    ]
  };

  const headerData = {
    robotics: { text: "Robotics Projects", iconClass: "bx bx-robot" },
    code: { text: "Coding Projects", iconClass: "bx bx-code-alt" },
    games: { text: "Game Projects", iconClass: "bx bx-game" }
  };

  var projectSection = document.getElementById('project-section');
  var projectInstructions = document.getElementById('project-instructions');
  var projectCard = document.getElementById('project-card');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');

  // Get nav dots
  var dots = document.querySelectorAll('.nav-dots .dot');

  var categories = ["robotics", "code", "games"]; // Map hash to dot index
  var currentCategory = null;
  var currentIndex = 0;

  function render() {
    if (!currentCategory || !projectsData[currentCategory]) {
      projectSection.style.display = 'none';
      projectInstructions.style.display = 'flex';
      // Reset dots
      dots.forEach(dot => dot.classList.remove('active'));
      return;
    }

    projectInstructions.style.display = 'none';
    projectSection.style.display = 'flex';
    const arr = projectsData[currentCategory];
    currentIndex = ((currentIndex % arr.length) + arr.length) % arr.length;
    const item = arr[currentIndex];

    // Update header and icon
    const header = document.getElementById('project-header');
    const icon = document.getElementById('project-icon');
    if (header && icon && headerData[currentCategory]) {
      header.textContent = headerData[currentCategory].text + ' ';
      icon.className = headerData[currentCategory].iconClass;
      header.prepend(icon);
    }

    // Update project card
    projectCard.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;

    // Update nav dots
    dots.forEach(dot => dot.classList.remove('active'));
    const activeIndex = categories.indexOf(currentCategory);
    if (activeIndex >= 0 && dots[activeIndex]) {
      dots[activeIndex].classList.add('active');
    }
  }

  // Button listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (!currentCategory) return;
      var arr = projectsData[currentCategory];
      currentIndex = (currentIndex - 1 + arr.length) % arr.length;
      render();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (!currentCategory) return;
      var arr = projectsData[currentCategory];
      currentIndex = (currentIndex + 1) % arr.length;
      render();
    });
  }

  // Hash change listener
  window.addEventListener('hashchange', function() {
    var hash = window.location.hash.substring(1);
    currentCategory = projectsData[hash] ? hash : null;
    currentIndex = 0;
    render();
  });

  // Initial render
  var initialHash = window.location.hash.substring(1);
  currentCategory = projectsData[initialHash] ? initialHash : null;
  render();
});