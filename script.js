// Smooth entrance animations on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

// Smooth scroll effect
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// SMOKE CURSOR EFFECT
document.addEventListener("mousemove", function(e) {

    const smoke = document.createElement("div");
    smoke.classList.add("smoke");

    smoke.style.left = e.clientX + "px";
    smoke.style.top = e.clientY + "px";

    document.body.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 1000);

});
