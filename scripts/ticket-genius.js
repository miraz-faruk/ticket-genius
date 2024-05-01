// Function to handle the click event on the "Buy Tickets" button
function buyTickets() {
    toggleMainScreenVisibility();
    scrollToMainScreen();
    showElementById('coupon-code-section');
}

// Disable the coupon code field and apply button initially
document.getElementById('coupon-code-field').disabled = true;
document.getElementById('apply-coupon-button').disabled = true;

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

                const lastIndex = selectedSeats.length - 1;
                const containerId = `selected-seats-container${lastIndex + 1}`;
                const seatName = this.id;
                showElementById(containerId);
                changeSeatName(containerId, seatName);

                const totalPrice = 550 * selectedSeats.length;
                setTextElementValueById('total-price', totalPrice);
            }
            else {
                this.style.backgroundColor = '';
                const index = selectedSeats.indexOf(this.id);
                selectedSeats.splice(index, 1);
                const currentSeats = getTextElementValueById('current-seats');
                const updatedSeats = currentSeats + 1;
                setTextElementValueById('current-seats', updatedSeats);

                const currentSeatFromPurchase = getTextElementValueById('selected-seat-count');
                const updatedSeatsFromPurchase = currentSeatFromPurchase - 1;
                setTextElementValueById('selected-seat-count', updatedSeatsFromPurchase);

                // Hide the corresponding container when seat is deselected
                const containerId = `selected-seats-container${index + 1}`;
                hideElementById(containerId);
            }

            const totalPrice = 550 * selectedSeats.length;
            setTextElementValueById('total-price', totalPrice);
            setTextElementValueById('grand-total', totalPrice);

            if (selectedSeats.length === 4) {
                document.getElementById('coupon-code-field').disabled = false;
                document.getElementById('apply-coupon-button').disabled = false;

                const applyCouponButton = document.getElementById('apply-coupon-button');
                applyCouponButton.addEventListener('click', function () {
                    const couponCheck = applyCoupon();
                    // console.log(couponCheck);

                    if (couponCheck === 'NEW15') {
                        showElementById('discounted-amount-field');
                        setTextElementValueById('discounted-amount', 330);
                        const grandTotal = 2200 - 330;
                        setTextElementValueById('grand-total', grandTotal);
                        hideElementById('coupon-code-section');
                    }
                    else if (couponCheck === 'Couple 20') {
                        showElementById('discounted-amount-field');
                        setTextElementValueById('discounted-amount', 440);
                        const grandTotal = 2200 - 440;
                        setTextElementValueById('grand-total', grandTotal);
                        hideElementById('coupon-code-section');
                    }
                    else {
                        alert('Please Enter The Valid Coupon Code');
                    }
                });
            }
            // console.log('Selected seats:', selectedSeats);
        } else {
            // Message if the maximum number of seats is reached
            alert('You have already selected the maximum number of seats (4).');
        }
    });
});
