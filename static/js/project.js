document.addEventListener('DOMContentLoaded', function() {
  var projectsData = {
    robotics: [
      {  }
    ],
    code: [
      {  }
    ],
    games: [
      {  }
    ]
  };

  const headerData = {
    robotics: { text: "Robotics Projects", iconClass: "bx bx-robot" },
    code: { text: "Coding Projects", iconClass: "bx bx-code-alt" },
    games: { text: "Game Projects", iconClass: "bx bx-gaming" }
  };

  var projectSection = document.getElementById('project-section');
  var projectInstructions = document.getElementById('project-instructions');
  var projectCard = document.getElementById('project-card');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');

  var dots = document.querySelectorAll('.nav-dots .dot');

  var categories = ["robotics", "code", "games"];
  var currentCategory = null;
  var currentIndex = 0;

  function render() {
    if (!currentCategory || !projectsData[currentCategory]) {
      projectSection.style.display = 'none';
      projectInstructions.style.display = 'flex';
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
    if (!item.title || !item.desc) {
      projectCard.innerHTML = '<img src="static/images/construction.png" alt="No project available" style="width:100%;">';
    } else {
      projectCard.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    }

    // Update nav dots
    const activeIndex = categories.indexOf(currentCategory);
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }

  // Prev / Next buttons
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

  // Dot click behavior
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const sectionIndex = parseInt(this.dataset.section);
      const category = categories[sectionIndex];
      if (projectsData[category]) {
        window.location.hash = category; // triggers hashchange
      }
    });
  });

  // Hash change behavior
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
