// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .glass, .mockup-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
});

// Update styles on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.animate');
    reveals.forEach(reveal => {
        reveal.style.opacity = "1";
        reveal.style.transform = "translateY(0)";
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple pulsing effect for the CTA button on mobile
const ctaBtn = document.querySelector('.btn-primary');
if (ctaBtn) {
    ctaBtn.addEventListener('touchstart', () => {
        ctaBtn.style.transform = "scale(0.95)";
    });
    ctaBtn.addEventListener('touchend', () => {
        ctaBtn.style.transform = "scale(1)";
    });
}
