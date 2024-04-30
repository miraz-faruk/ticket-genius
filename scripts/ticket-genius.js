// Function to handle the click event on the "Buy Tickets" button
function buyTickets() {
    toggleMainScreenVisibility();
    scrollToMainScreen();
}

// Get all seat buttons
const seatButtons = document.querySelectorAll('.seat-button');
const selectedSeats = [];

seatButtons.forEach(seatButton => {
    seatButton.addEventListener('click', function () {
        // Check if the selectedSeats array length is less than or equal to 4
        if (selectedSeats.length < 4) {
            // Toggle the color of the button and update current seats
            if (!selectedSeats.includes(this.id)) {
                this.style.backgroundColor = '#1DD100';
                selectedSeats.push(this.id);
                const currentSeats = getTextElementValueById('current-seats');
                const updatedSeats = currentSeats - 1;
                setTextElementValueById('current-seats', updatedSeats);

                const currentSeatsFromPurchase = getTextElementValueById('selected-seat-count');
                const updatedSeatsFromPurchase = currentSeatsFromPurchase + 1;
                setTextElementValueById('selected-seat-count', updatedSeatsFromPurchase);
            } else {
                this.style.backgroundColor = '';
                selectedSeats.splice(selectedSeats.indexOf(this.id), 1);
                const currentSeats = getTextElementValueById('current-seats');
                const updatedSeats = currentSeats + 1;
                setTextElementValueById('current-seats', updatedSeats);

                const currentSeatFromPurchase = getTextElementValueById('selected-seat-count');
                const updatedSeatsFromPurchase = currentSeatFromPurchase - 1;
                setTextElementValueById('current-seats', updatedSeatsFromPurchase);
            }

            console.log('Selected seats:', selectedSeats);
        } else {
            // Message if the maximum number of seats is reached
            alert('You have already selected the maximum number of seats (4).');
        }
    });
});
