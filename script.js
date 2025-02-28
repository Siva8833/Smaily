// Script for form submission (Basic Example)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // In a real-world scenario, you would send the form data to a server here
        this.reset(); // Reset form fields
    } else {
        alert('Please fill in all fields.');
    }
});
