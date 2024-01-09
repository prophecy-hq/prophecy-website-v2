window.addEventListener('scroll', function() {
    var video = document.getElementById('video');
    // var overlay = this.document.getElementById('purple-overlay')
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Get the position of the start and end sections
    var startSection = document.getElementById('scrolling-text');
    var endSection = document.getElementById('what-we-do');
    // var overlayStartSection = document.getElementById('scroll')

    // Calculate the start and end positions for the effect
    var startScroll = startSection.offsetTop;
    var endScroll = endSection.offsetTop;

    // Calculate the current scale
    var scale = 1;
    var opacity = 0.4;
    if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
        scale = Math.max(0, 1 - (scrollPosition - startScroll) / (endScroll - startScroll));
        // opacity = Math.max(0, (scrollPosition - startScroll) / (endScroll - startScroll));
    }

    // Apply the scale to the video
    video.style.transform = 'scale(' + scale + ')';
    // overlay.style.transform = 'opacity(' + opacity + ')';
});
