'use strict';
const signupButton = document.querySelector('.input button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupMessage = document.getElementById('popup-message');
const nameInput = document.querySelector('.input input[type="text"]');
const emailInput = document.querySelector('.input input[type="email"]');

function showPopup() {
    // Check if both name and email are submitted
    if (nameInput.value && emailInput.value) {
        // Set the popup message including the user's name
        popupMessage.textContent = `Thank you, ${nameInput.value} for signing up, your magic link has been sent to the email: ${emailInput.value}!`;
        popup.style.display = 'flex';

        // Close the popup after 3 seconds (3000 milliseconds)
        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);

        // Clear the input fields after displaying the popup
        nameInput.value = '';
        emailInput.value = '';
    }
}

signupButton.addEventListener('click', function() {
    showPopup();
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});