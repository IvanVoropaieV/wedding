document.addEventListener('DOMContentLoaded', function() {
    let times = document.querySelectorAll('.time');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        times.forEach(time => {
            let TimePosition = time.getBoundingClientRect().top;

            if (TimePosition < windowHeight - 100) {
                time.style.opacity = "1";
                time.style.transform = "translateY(0)";
        }
    });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});