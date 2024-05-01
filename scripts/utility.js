function toggleMainScreenVisibility() {
    const mainScreen = document.getElementById('main-screen');
    mainScreen.classList.toggle('hidden');
}

function scrollToMainScreen() {
    const mainScreen = document.getElementById('main-screen');
    mainScreen.scrollIntoView({ behavior: 'smooth' });
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function changeSeatName(elementId) {
    const seatName = getTextElementValueById(elementId);
    const updatedSeatName = selectedSeats;
    setTextElementValueById(elementId, updatedSeatName);
    return updatedSeatName;
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function changeSeatName(containerId, seatName) {
    const container = document.getElementById(containerId);
    if (container) {
        const seatNameElement = container.querySelector('.seat-name');
        if (seatNameElement) {
            seatNameElement.textContent = seatName;
        }
    }
}