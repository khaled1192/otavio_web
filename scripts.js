document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.transform = "translateY(0)";
            section.style.opacity = "1";
        } else {
            section.style.transform = "translateY(100px)";
            section.style.opacity = "0";
        }
    });
});

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// التبديل بين الوضع الفاتح والداكن
const toggleButton = document.querySelector('.dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // التبديل بين الوضعين
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
