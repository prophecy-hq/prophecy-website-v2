document.getElementById('latest-work-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var targetSection = document.getElementById('latest-work');
    
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('partner-with-us-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var targetSection = document.getElementById('partner-with-us');
    
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
});