function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
    //   context : refers to the window on which the event is called
    // args : refers to the event i.e., scroll which triggers the event to happen
    //   console.log(args)
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

function checkSlide (e){
    sliderImages.forEach( sliderImage  => {
        const slideInAt = ( window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;
        // console.log(` SlideInAt = ${slideInAt}, scrollY = ${window.scrollY}, innerHeight = ${window.innerHeight}, sliderImage.height = ${sliderImage.height}`)
        // console.log(`imageBottom = ${sliderImage.offsetTop}, sliderIMage offsetTop = ${sliderImage.offsetTop}`)
        // console.log(isHalfShown, isNotScrollPast)
        if (isHalfShown && isNotScrollPast){
            sliderImage.classList.add('active')
        } else{
            sliderImage.classList.remove('active');
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide, 500));
const sliderImages = document.querySelectorAll('.slide-in');
