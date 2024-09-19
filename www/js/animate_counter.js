document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Rychlost animace
    const delayBetweenCounters = 66; // Zpoždění mezi začátkem animace jednotlivých čísel

    const animateCounter = (counter, delay) => {
        setTimeout(() => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        }, delay);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach((counter, index) => {
                    animateCounter(counter, index * delayBetweenCounters);
                });
                observer.disconnect();
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
