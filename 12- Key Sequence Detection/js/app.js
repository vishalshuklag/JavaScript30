const pressed = [];
const secretCode = 'vishal';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    console.log(pressed);

    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

    if (pressed.join('').includes(secretCode)) {
        console.log('secret code matched !! ');
    }
})