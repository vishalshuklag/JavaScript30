const nav = document.querySelector('#main');
const topNav = nav.offsetTop;
function fixNav() {
    // console.log(topNav, window.scrollY);
    if (window.scrollY >= topNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav)