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