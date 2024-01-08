document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');

    // Observer for the first-fold section
    const firstFoldObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                // Play the video when the first-fold section is partially visible
                video.play();
            } 
        });
    }, { threshold: 0.0 });

    // Observer for the what-we-do section
    const whatWeDoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Pause the video when the what-we-do section starts entering the viewport
                video.pause();
            }
        });
    }, { threshold: 0.0 });

    const firstFold = document.getElementById('first-fold');
    const whatWeDo = document.getElementById('latest-work');

    firstFoldObserver.observe(firstFold);
    whatWeDoObserver.observe(whatWeDo);
});
