const secondHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    console.log(`HRS: ${hours} Min: ${minutes} Sec: ${seconds}`);
    const secondsDegree = ((seconds / 60) * 360);
    const minutesDegree = (minutes / 60) *360;
    const hoursDegree = (hours / 12) *24;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);