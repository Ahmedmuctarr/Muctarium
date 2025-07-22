class CustomAlert
{
    constructor() {
        this.isAuthenticated = false;
    }

    showPopup(message, code) {
        // Create the popup element dynamically
        const popup = document.createElement('div');
        popup.classList.add('SidePop');
        
        // Create the message element
        const popupMessage = document.createElement('p');
        popup.textContent = message; // Set the message
        
        // Append the message to the popup
        popup.appendChild(popupMessage);
        
        // Color for Status
        if (code === 'success') {
            popup.classList.add('success');
        } else if (code === 'error') {
            popup.classList.add('error');
        } else {
            popup.classList.add('default');
        }

        // Append the popup to the body of the page
        document.body.appendChild(popup);

        // Make the popup appear with a transition
        setTimeout(() => {
            popup.classList.add('show');
        }, 0);

        // Remove the popup after 10 seconds
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.remove(); 
            }, 500);
        }, 5000);
    }
}
CustomAlert = new CustomAlert();
//window.CustomAlert = CustomAlert;