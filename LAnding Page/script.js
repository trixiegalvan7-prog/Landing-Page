function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll Animation
const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Animate skill bars
                const skillLevels = entry.target.querySelectorAll(".skill-level");
                skillLevels.forEach(skill => {
                    skill.style.width = skill.dataset.level;
                });
            }
        });
    },
    { threshold: 0.3 }
);

animatedSections.forEach(section => {
    observer.observe(section);
});
