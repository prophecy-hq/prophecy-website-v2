document.addEventListener("DOMContentLoaded", function() {
  // Intersection Observer callback
  function handleIntersection(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Get the Lottie player
              var lottiePlayer = document.getElementById('lottie-animation');

              // Play the Lottie animation
              lottiePlayer.play();

              // Stop observing the section
              observer.unobserve(entry.target);
          }
      });
  }

  // Setting up the Intersection Observer
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
  var target = document.getElementById('video-container');
  observer.observe(target);
});
