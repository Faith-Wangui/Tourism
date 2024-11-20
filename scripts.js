function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('All fields are required!');
        return false;
    }
    alert('Thank you for your message!');
    return true;
}
