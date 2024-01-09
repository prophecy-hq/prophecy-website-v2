document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animated-text').forEach(element => {
        // Split the text by spaces and filter out empty strings
        let words = element.textContent.split(/\s+/).filter(word => word.length > 0);
        let wrappedWords = words.map((word, index) => {
            return `<span class="animated-word" style="--delay:${index * 0.05}s;"><span>${word}</span></span>`;
        }).join(' '); // Join with a space to maintain original spacing
        element.innerHTML = wrappedWords;
    });

    let observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('triggered');
            }
        });
    }, { threshold: [0.1] });

    document.querySelectorAll('.animated-section').forEach(section => {
        observer.observe(section);
    });
});
