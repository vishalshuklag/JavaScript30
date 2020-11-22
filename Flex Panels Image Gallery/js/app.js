const panelDiv = document.querySelectorAll('.panel');

function toggleOpen () {
    this.classList.toggle('open');
}

function toggleActive (e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panelDiv.forEach( panel => panel.addEventListener('click', toggleOpen))
panelDiv.forEach( panel => panel.addEventListener('transitionend', toggleActive))
