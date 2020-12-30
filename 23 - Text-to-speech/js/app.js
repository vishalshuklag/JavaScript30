const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.getElementById('speak');
const stopButton = document.getElementById('stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices =  speechSynthesis.getVoices()
    // console.log(voices);
    const voiceOptions = voices
        .map(voice => `<option value="${voice.name}"> ${voice.name} (${voice.lang}) </option>`)
        .join('');
    // console.log(voiceOptions);
    voiceDropdown.innerHTML = voiceOptions
}

function setVoice() {
    // find the selected voice from dropdown and set it to msg.voice
    // console.log(voices.find(voice => voice.name === this.name));
    msg.voice = voices.find(voice => voice.name === this.name);
    toggle();
}

function toggle(startOver = true) {
    // Stop the speech and start over again
    speechSynthesis.cancel();

    if (startOver) {
        // restart the speech
        speechSynthesis.speak(msg);
    }
}

function setOptions() {
    // console.log(this.name, this.value)
    msg[this.name] = this.value;
    toggle()
}

// speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceDropdown.addEventListener('change', setVoice)
options.forEach( option => option.addEventListener('change', setOptions));

speakButton.addEventListener('click', toggle);


// stopButton.addEventListener('click', toggle(false)) // this method won't work

// ways to pass in argument to function are : 
// stopButton.addEventListener('click', function () {
//     toggle(false)
// })
// stopButton.addEventListener('click',()=> toggle(false));
stopButton.addEventListener('click', toggle.bind(null, false))