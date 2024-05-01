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

function getTextElement(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    return elementValueText;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function changeSeatName(elementId) {
    const seatName = getTextElementValueById(elementId);
    const updatedSeatName = selectedSeats;
    setTextElementValueById(elementId, updatedSeatName);
    return updatedSeatName;
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

function applyCoupon() {
    const couponInput = document.getElementById('coupon-code-field');
    const couponCode = couponInput.value;
    return couponCode;
}

function validatePassengerNumber() {
    const passengerInput = document.getElementById('passenger-input');
    const passengerNumber = passengerInput.value.trim();

    if (passengerNumber && !isNaN(passengerNumber)) {
        // Show the modal
        document.getElementById('myModal').classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    } else {
        alert('Please enter a valid phone number.');
    }
}

// Close modal function
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    window.location.href = '/';
});