// ==========================
// Snowflakes
// ==========================
const snowContainer = document.getElementById('snowflakes');
const snowCount = 60; // more flakes
for (let i = 0; i < snowCount; i++) {
    let snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.fontSize = 12 + Math.random() * 10 + 'px'; // 12-22px
    snow.style.animationDuration = 5 + Math.random() * 10 + 's';
    snow.innerHTML = '❄';
    snowContainer.appendChild(snow);
}

// ==========================
// Animate Skills
// ==========================
const skills = [95, 70, 80]; // HTML/CSS, JS, Python
document.querySelectorAll('.skill-circle .progress').forEach((circle, i) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (skills[i]/100)*circumference;
});

// ==========================
// Scroll Active Nav
// ==========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});
