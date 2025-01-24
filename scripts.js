// Select all buttons with the "certificate-button" class
const buttons = document.querySelectorAll('.certificate-button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url'); // Get the URL from the data attribute
        window.open(url, '_blank'); // Open the URL in a new tab
    });
});
