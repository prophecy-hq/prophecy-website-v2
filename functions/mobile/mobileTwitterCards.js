document.addEventListener('touchstart', function addTouchEvent() {
    var cards = document.querySelectorAll('.twitter-quote-container');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        // Move the clicked card to the top
        cards.forEach(function(c) { c.style.zIndex = 1; }); // reset all cards
        card.style.zIndex = 10;
        card.style.transform = 'translateY(-10px)';
      });
    });
    document.removeEventListener('touchstart', addTouchEvent);
  });
  