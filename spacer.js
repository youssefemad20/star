document.addEventListener('DOMContentLoaded', () => {
    initChat();
});

// 🚀 تم تشفير المفتاح المؤمن باستخدام Base64
const encodedKey = "QUl6YVN5QWNLcUVQdWtxVVNXYUJybl9XNHozOXYwWF9TNkM4RGFR"; 
const API_KEY = atob(encodedKey); 

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

    addMessageToUI("user", message);
    userInput.value = '';

    const loadingId = addMessageToUI("ai", "Thinking...", true);

    // List of models confirmed to be available in your account (December 2025)
    const modelsToTry = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-2.0-flash-lite",
        "gemini-1.5-flash"
    ];

    let lastError = null;
    let success = false;

    for (const modelId of modelsToTry) {
        try {
            console.log(`Trying model: ${modelId}...`);
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${API_KEY}`;
            const responseText = await callGeminiAPI(message, endpoint);
            
            removeMessage(loadingId);
            addMessageToUI("ai", responseText);
            success = true;
            break; // Stop if one works
        } catch (error) {
            console.warn(`Model ${modelId} failed:`, error.message);
            lastError = error;
            // Continue to next model
        }
    }

    if (!success) {
        removeMessage(loadingId);
        addMessageToUI("ai", `Communication Error: All models failed. <br>Last Error: ${lastError.message}. <br><br>Please check your Google AI Studio quota or try a new API key.`);
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

async function callGeminiAPI(userMessage, endpoint) {
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
    const response = await fetch(endpoint, {
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
