// Smooth scrolling for navigation links
document.querySelectorAll("header nav ul li a").forEach(anchor => {
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

