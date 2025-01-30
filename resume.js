document.getElementById("resumeRequestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Default message if the user leaves it blank
    if (!message.trim()) {
        message = "Hello,\n\nI would like to request a copy of your resume.\n\nThank you!";
    }

    // Encode the email content
    let subject = encodeURIComponent("Request for Resume");
    let body = encodeURIComponent(`From: ${email}\n\n${message}`);

    // Open mail client with pre-filled email
    window.location.href = `mailto:help.somsspace@gmail.com?subject=${subject}&body=${body}`;
});