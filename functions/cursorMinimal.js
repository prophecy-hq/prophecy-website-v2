var customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', function(e) {
    // Update the position of the custom cursor directly based on mouse coordinates
    customCursor.style.transform = 'translate(' + (e.clientX - 10) + 'px, ' + (e.clientY - 10) + 'px)';
});

// Your existing code for updating the cursor text
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
