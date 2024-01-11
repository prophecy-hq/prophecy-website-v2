document.addEventListener('loaderFinished', (event) => {
    let videos = document.querySelectorAll('.video-snippet');
    playVideosSequentially(videos, 0);
});

function playVideosSequentially(videos, index) {
    if (index >= videos.length) {
        index = 0; // Reset to the first video after the last one
    }

    let video = videos[index];
    fadeIn(video, () => {
        let duration = video.duration;
        let fadeOutStart = duration - 1.5; // Adjust as needed

        setTimeout(() => {
            fadeOut(video, () => {
                playVideosSequentially(videos, index + 1); // Proceed to the next video
            });
        }, fadeOutStart * 1000);
    });
}


function fadeIn(element, callback) {
    element.play();
    let opacity = 0;
    let interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            callback();
        }
    }, 80);
}

function fadeOut(element, callback) {
    let opacity = 1;
    let interval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.pause(); // Pause the video after fading out
            callback();
        }
    }, 80);
}
