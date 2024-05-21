// Function to handle logout
function logout(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    if (window.confirm("Are you sure you want to exit?")) {
        // Redirect to /customer/customer.html
        window.location.href = '/customer/customer1.html';
    }
}

// Attach click event listener to the logout link
document.getElementById('log-out').addEventListener('click', logout);

//js code for the dark mode and light mode