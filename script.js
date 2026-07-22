// Welcome message
console.log("Welcome to Ocean Network Express");

// Smooth button animation
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Fade in cards when page loads
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});
