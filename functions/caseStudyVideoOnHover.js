document.addEventListener('DOMContentLoaded', (event) => {
    const hoverableElements = document.querySelectorAll('.case-study');
    const backgroundVideo = document.getElementById('case-study-video');

    hoverableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            backgroundVideo.style.display = 'block'; // Show the video
            backgroundVideo.play(); // Start playing the video
        });

        element.addEventListener('mouseleave', () => {
            backgroundVideo.pause(); // Pause the video
            backgroundVideo.style.display = 'none'; // Hide the video
        });
    });
});
