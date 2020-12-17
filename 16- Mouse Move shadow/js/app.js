const hero = document.querySelector('.hero')
const h1 = hero.querySelector('h1')
const walk = 40; // 50px
function shadow (e){
    // console.log(e.offsetX, e.offsetY)
    // const x = hero.offsetWidth
    // const y = hero.offsetHeight
    // console.log(x,y)

    //destructuring
    const {offsetHeight : height, offsetWidth : width} = hero;
    let {offsetX: x, offsetY : y} = e;
    // console.log(x,y)

    if (this !== e.target ){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
        // console.log(x, y)
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk,yWalk);

    h1.style.textShadow = `
        ${xWalk}px ${yWalk}px 0   rgb(33, 105, 238)
    `
}

hero.addEventListener('mousemove', shadow)
