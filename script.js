// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset for sticky header height
                behavior: "smooth"
            });
        }
    });
});

// Basic form submission handling (prevents default for now)
// In a real scenario, this would send data to a server or email service.
const contactForm = document.querySelector("#contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message! Form submission is not fully implemented in this demo.");
        // Optionally clear the form
        // contactForm.reset();
    });
}

// Animate elements on page load and when scrolled into view
document.addEventListener("DOMContentLoaded", () => {
    // Grab most content elements within the page
    const animatedEls = document.querySelectorAll("header * , section *");
    animatedEls.forEach(el => el.classList.add("animate-on-scroll"));

    // Apply varied animation classes to headings
    const headings = document.querySelectorAll("h1, h2, h3");
    const variations = ["slide-up", "slide-left", "slide-right", "zoom-in"];
    headings.forEach((h, idx) => {
        h.classList.add(variations[idx % variations.length]);
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedEls.forEach(el => observer.observe(el));
});

