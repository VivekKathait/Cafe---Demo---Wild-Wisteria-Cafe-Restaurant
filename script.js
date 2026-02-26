const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    follower.style.left = posX + "px";
    follower.style.top = posY + "px";

    requestAnimationFrame(animate);
}
animate();

// Magnetic effect
document.querySelectorAll("a, .reserve-btn").forEach(el => {
    el.addEventListener("mouseenter", () => {
        follower.style.transform = "translate(-50%, -50%) scale(2)";
    });
    el.addEventListener("mouseleave", () => {
        follower.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
