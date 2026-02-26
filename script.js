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
//new new new
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
let particles = [];

document.addEventListener("mousemove", e => {
    particles.push({
        x: e.clientX,
        y: e.clientY,
        size: 4,
        alpha: 1
    });
});

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p, index) => {
        p.size *= 0.96;
        p.alpha *= 0.95;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197,157,95,${p.alpha})`;
        ctx.fill();

        if(p.alpha < 0.05) particles.splice(index,1);
    });

    requestAnimationFrame(animate);
}
animate();

