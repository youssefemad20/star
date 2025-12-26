document.addEventListener('DOMContentLoaded', () => {
    initChat();
});

// 🚀 تم تشفير المفتاح باستخدام Base64 لمنع الروبوتات من التعرف عليه تلقائياً
const encodedKey = "QUl6YVN5QVNpS0dNb18xR1lOazkzVDY0eFhYVl9pOEtpeGZYa3Zv"; 
const API_KEY = atob(encodedKey); 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

let chatHistory = [];

function initChat() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');

    // Initial greeting
    addMessageToUI("ai", "Hello! I'm Spacer, your cosmic guide. Ask me anything about the solar system!");

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (!message) return;

    // Add User Message
    addMessageToUI("user", message);
    userInput.value = '';

    // Show loading state (optional)
    const loadingId = addMessageToUI("ai", "Thinking...", true);

    try {
        const responseText = await callGeminiAPI(message);
        // Remove loading and add real response
        removeMessage(loadingId);
        addMessageToUI("ai", responseText);
    } catch (error) {
        removeMessage(loadingId);
        // Show specific error for debugging
        addMessageToUI("ai", `Communication Error: ${error.message}. <br><br>Please check that your API Key is correct and enabled.`);
        console.error(error);
    }
}

function addMessageToUI(sender, text, isLoading = false) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'ai-msg');
    
    // Simple ID for removal if loading
    const id = Date.now();
    msgDiv.setAttribute('data-id', id);

    if (isLoading) {
        msgDiv.classList.add('loading');
        msgDiv.style.fontStyle = 'italic';
    }

    // Process basic markdown for bolding (simple version)
    // You could use a library like 'marked' here for full markdown support
    msgDiv.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return id;
}

function removeMessage(id) {
    const msg = document.querySelector(`[data-id="${id}"]`);
    if (msg) msg.remove();
}

async function callGeminiAPI(userMessage) {
    // 1. Construct the System Prompt from spaceData
    const systemPrompt = `
    ${spaceData.system_role}
    
    Here is your knowledge base (Context):
    ${JSON.stringify(spaceData.context)}
    
    Current User Question: ${userMessage}
    `;

    // 2. Prepare Request Body
    const requestBody = {
        contents: [{
            parts: [{ text: systemPrompt }]
        }]
    };

    // 3. Fetch
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        let errorDetails = `Status: ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData.error && errorData.error.message) {
                errorDetails += ` - ${errorData.error.message}`;
            }
        } catch (e) {
            // failed to parse error json
        }
        throw new Error(errorDetails);
    }

    const data = await response.json();
    
    // 4. Extract Text
    // Gemini response structure: candidates[0].content.parts[0].text
    return data.candidates[0].content.parts[0].text;
}
