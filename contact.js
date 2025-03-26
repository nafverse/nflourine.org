document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response-message").innerText = "Thank you! Your message has been sent.";
});