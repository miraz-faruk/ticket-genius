// Function to handle button click event
function handleButtonClick(event) {
    const buttonId = event.target.id;

    // color the selected buttons
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = '#1DD100';

    const currentSeats = getTextElementValueById('current-seats');
    const updateSeats = currentSeats - 1;
    setTextElementValueById('current-seats', updateSeats);
}

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Buying tickets function
function buyTickets() {
    showElementById('main-screen');
}