// Get references to the dark mode toggle button and the body element
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is already set in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');  // Enable dark mode if previously set
}

// Toggle dark mode when the button is clicked
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
