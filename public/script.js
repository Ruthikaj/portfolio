// 🌟 Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// 🌟 Active Section Highlight in Navbar
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll("section").forEach(section => {
        if (
            scrollPosition >= section.offsetTop - 50 &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            let currentId = section.getAttribute("id");
            document.querySelectorAll("nav ul li a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === currentId) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// 🌟 Dynamic Project Filtering
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        let category = this.getAttribute("data-category");
        document.querySelectorAll(".project").forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

// 🌟 Testimonial Slider (Auto-Sliding)
let testimonialIndex = 0;
function showTestimonials() {
    let testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach(t => (t.style.display = "none"));
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) testimonialIndex = 1;
    testimonials[testimonialIndex - 1].style.display = "block";
    setTimeout(showTestimonials, 4000); // Change every 4 seconds
}
showTestimonials();

// 🌟 Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// 🌟 Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
