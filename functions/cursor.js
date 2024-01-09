var customCursor = document.getElementById('customCursor');
var posX = 0, posY = 0;
var mouseX = 0, mouseY = 0;



document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX - 10;
    mouseY = e.clientY - 10;
});

function animate() {
    // Interpolate the position of the cursor
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    // Apply the position to the custom cursor
    customCursor.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    requestAnimationFrame(animate);
}

document.querySelectorAll('.hoverable').forEach(item => {
    item.addEventListener('mouseover', function() {
        var text = this.getAttribute('data-cursor-text');
        document.getElementById('customCursor').innerHTML = '<span>' + text + '</span>';
        customCursor.classList.add('cursor-text-only');
    });

    item.addEventListener('mouseout', function() {
        document.getElementById('customCursor').innerHTML = '';
        customCursor.classList.remove('cursor-text-only');
    });
});

animate();

// Change cursor size on link hover
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => customCursor.classList.add('cursor-large'));
    link.addEventListener('mouseout', () => customCursor.classList.remove('cursor-large'));
});