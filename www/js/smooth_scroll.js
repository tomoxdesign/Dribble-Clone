document.addEventListener("DOMContentLoaded", function () {
    var smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");

    smoothScrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                var targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 62; // Adjust offset if necessary
                var originalOffset = window.pageYOffset;
                var duration = 800; // Duration of scroll in milliseconds
                var startTime = null;

                function scrollToTarget(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    var progress = currentTime - startTime;
                    var ease = function (t) {
                        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    };

                    var scrollY = ease(progress / duration) * (targetOffset - originalOffset) + originalOffset;
                    window.scrollTo(0, scrollY);

                    if (progress < duration) {
                        requestAnimationFrame(scrollToTarget);
                    }
                }

                requestAnimationFrame(scrollToTarget);
            } else {
                console.error("Target element not found:", targetId);
            }
        });
    });
});
