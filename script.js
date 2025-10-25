'use strict';


{
    document.addEventListener("DOMContentLoaded", () => {
        const targets = document.querySelectorAll(".fade-up, .slide-in , .slide-in-right");
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        targets.forEach(target => io.observe(target));
    });
}

