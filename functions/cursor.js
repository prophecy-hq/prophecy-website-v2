var customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', function(e) {
    // Update the position of the custom cursor directly
    customCursor.style.transform = 'translate(' + (e.clientX - 10) + 'px, ' + (e.clientY - 10) + 'px)';
});

document.querySelectorAll('.hoverable').forEach(item => {
    item.addEventListener('mouseover', function() {
        var text = this.getAttribute('data-cursor-text');
        customCursor.innerHTML = '<span>' + text + '</span>';
        customCursor.classList.add('cursor-text-only');
    });

    item.addEventListener('mouseout', function() {
        customCursor.innerHTML = '';
        customCursor.classList.remove('cursor-text-only');
    });
});

// Change cursor size and appearance on link hover
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        customCursor.classList.add('cursor-large');
        customCursor.classList.remove('cursor-text-only'); // Ensure text-only style is removed
    });
    link.addEventListener('mouseout', () => {
        customCursor.classList.remove('cursor-large');
        customCursor.innerHTML = ''; // Clear any text
    });
});
