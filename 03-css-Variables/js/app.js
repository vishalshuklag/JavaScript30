const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const baseInput = document.getElementById('base');

spacingInput.addEventListener('change', handleUpdate)
blurInput.addEventListener('change', handleUpdate)
baseInput.addEventListener('change', handleUpdate)

spacingInput.addEventListener('mousemove', handleUpdate)
blurInput.addEventListener('mousemove', handleUpdate)
baseInput.addEventListener('mousemove', handleUpdate)

function handleUpdate () {
    
    const suffix = this.dataset.sizing || '';
    const value = this.value;
    const name = this.name;
    document.documentElement.style.setProperty(`--${name}`, value+suffix)
}