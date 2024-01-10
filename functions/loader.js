document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById('loader');
    setTimeout(function() {
        loader.style.transform = 'translateY(-100%)';
        document.dispatchEvent(new CustomEvent('loaderFinished')); // Slide the loader upwards
    }, 1000); // Adjust delay as needed
    
});
