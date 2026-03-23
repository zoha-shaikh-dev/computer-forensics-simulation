
// UI 1 listener 
console.log("UI 1 Loaded, waiting for messages...");

// Keep checking for messages stored in localStorage
setInterval(() => {
    let message = localStorage.getItem("pendingMessage");

    if (message) {
        const accept = confirm('New Message Received: \n\n"${message}"\n\nAccept?');
        
        if (accept) {
            // Save token
            localStorage.setItem("token", "XYZ123TOKEN");
            console.log("Message accepted. Token saved.");
            alert("Message Accepted ✔ Token Saved!");
        } else {
            console.log("Message declined.");
            alert("Message Declined ❌");
        }

        // Clear message after handling
        localStorage.removeItem("pendingMessage");
    }
}, 1000);


