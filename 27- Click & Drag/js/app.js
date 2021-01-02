const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active')
    // console.log(e);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    // console.log({startX, scrollLeft});
})
slider.addEventListener('mouseup' ,() => {
    isDown  = false;
    slider.classList.remove('active')
})
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return // stop further execution
    // console.count(isDown)
    // console.log(startX);
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    console.log({x, walk});
    slider.scrollLeft = scrollLeft - walk;
})