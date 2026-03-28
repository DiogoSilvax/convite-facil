document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = question.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Custom VSL Player
    const video = document.getElementById('vslVideo');
    const container = document.getElementById('vslContainer');
    const overlay = document.getElementById('vslOverlay');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    if (video && container) {
        const togglePlay = () => {
            if (video.paused) {
                video.play();
                overlay.classList.add('hidden');
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                overlay.classList.remove('hidden');
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        };

        const toggleMute = () => {
            video.muted = !video.muted;
            muteBtn.innerHTML = video.muted ?
                '<i class="fas fa-volume-mute"></i>' :
                '<i class="fas fa-volume-up"></i>';
        };

        container.addEventListener('click', (e) => {
            if (e.target.closest('.control-btn')) return;
            togglePlay();
        });

        playPauseBtn.addEventListener('click', togglePlay);
        muteBtn.addEventListener('click', toggleMute);

        // Hide overlay on play start (just in case)
        video.onplay = () => overlay.classList.add('hidden');
    }

    // Scroll reveal (Simple implementation)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
