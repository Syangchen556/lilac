// Function to send user messages
function sendMessage() {
    let userText = document.getElementById("userInput").value;
    if (userText.trim() === "") return;

    let chatOutput = document.getElementById("chatOutput");

    // Create user message bubble
    let userMessage = `
        <div class="chat-message user">
            <p class="chat-name">You</p>
            <div class="chat-bubble">${userText}</div>
        </div>
    `;
    chatOutput.innerHTML += userMessage;
    document.getElementById("userInput").value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        let botResponse = `
            <div class="chat-message bot">
                <p class="chat-name">Lilac</p>
                <div class="chat-bubble">I'm still learning! 😊</div>
            </div>
        `;
        chatOutput.innerHTML += botResponse;
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
}

// Function to toggle sidebar visibility and adjust the chat layout
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let chatBox = document.getElementById("chatBox");
    
    sidebar.classList.toggle("show"); // Show/Hide the sidebar

    // Adjust chat container's left margin based on sidebar visibility
    if (sidebar.classList.contains("show")) {
        chatBox.style.marginLeft = "250px"; // Shift chat box right when sidebar opens
    } else {
        chatBox.style.marginLeft = "0"; // Reset margin when sidebar closes
    }
}

// Initialize chat with the first bot message
document.addEventListener('DOMContentLoaded', function() {
    let chatOutput = document.getElementById("chatOutput");

    // Initial bot message when the page loads
    let initialBotMessage = `
        <div class="chat-message bot">
            <p class="chat-name">Lilac</p>
            <div class="chat-bubble">Hello! How can I assist you?</div>
        </div>
    `;
    chatOutput.innerHTML += initialBotMessage;
    chatOutput.scrollTop = chatOutput.scrollHeight;
});
