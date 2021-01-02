const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

function handleMove (e) {
    const y = e.pageY - speed.offsetTop;
    const percent = (y / this.offsetHeight);
    const [min, max] = [0.4, 4];
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove)

