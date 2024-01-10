document.addEventListener('DOMContentLoaded', () => {
    // ... existing code for text animation ...
    let serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-border');
            }
        });
    }, { threshold: [0.1] });

    document.querySelectorAll('.service').forEach(service => {
        serviceObserver.observe(service);
    });

    // Add observer for both red-divider and white-divider
    let lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-line');
            }
        });
    }, { threshold: [0.1] });  // Adjust the threshold as needed

    // Observe both red and white dividers
    document.querySelectorAll('.red-divider, .white-divider').forEach(line => {
        lineObserver.observe(line);
    });

    
});
