function setClock() {
    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    console.log(element)
    element.style.setProperty('--rotation', rotationRatio * 360)
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(setClock, 1000)
})