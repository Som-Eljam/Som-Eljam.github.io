// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
  
    // Show the popup as soon as the page loads
    popup.classList.add('active');

    // Close the popup when the button is clicked
    closePopup.addEventListener('click', () => {
      popup.classList.remove('active');
    });
});