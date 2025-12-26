// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Use Realtime Database

// DOM Elements
const questionsFeed = document.getElementById('questions-feed');
const btnPostQuestion = document.getElementById('btn-post-question');
const newQuestionText = document.getElementById('new-question-text');
const loadingSpinner = document.getElementById('loading-spinner');

// Setup Realtime Listener
function loadQuestions() {
    // Listen to 'questions' node
    const questionsRef = db.ref('questions');
    
    questionsRef.on('value', (snapshot) => {
        questionsFeed.innerHTML = ''; // Clear current feed
        const data = snapshot.val();
        
        if (!data) {
            questionsFeed.innerHTML = '<div class="glass-card" style="text-align:center;">No questions yet. Be the first to ask!</div>';
            return;
        }

        // Realtime DB returns an object, not array. Convert only entries [id, value]
        // Reverse to show newest first
        const entries = Object.entries(data).reverse();

        entries.forEach(([id, qData]) => {
            renderQuestionCard(id, qData);
        });
    }, (error) => {
        console.error("Error getting questions: ", error);
        questionsFeed.innerHTML = '<div class="glass-card" style="text-align:center; color:red;">Error connecting to Realtime Database.</div>';
    });
}

// Render a single question card
function renderQuestionCard(id, data) {
    const card = document.createElement('div');
    card.className = 'glass-card question-card';
    card.id = `card-${id}`;
    
    // Format Date (handle timestamp if exists, else generic)
    let dateStr = "Just now";
    if (data.timestamp) {
        dateStr = new Date(data.timestamp).toLocaleString();
    }

    card.innerHTML = `
        <div class="q-header">
            <span class="q-author">${data.author || "Anonymous Space Explorer"}</span>
            <span class="q-date">${dateStr}</span>
        </div>
        <div class="q-text">${data.text}</div>
        
        <!-- Opinions Section -->
        <div class="opinions-section">
            <h4 data-i18n="opinions-title" style="margin-bottom:10px; color:var(--primary-color);">Opinions</h4>
            <div id="opinions-${id}" class="opinions-container">
                <div class="spinner" style="margin: 0 auto;"></div>
            </div>
            
            <!-- Add Opinion Form -->
            <div class="add-opinion-form">
                <input type="text" id="input-${id}" placeholder="Share your opinion..." data-i18n="placeholder-opinion">
                <button class="btn-small" onclick="postOpinion('${id}')"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    questionsFeed.appendChild(card);
    
    // Load opinions for this question (Nested node)
    loadOpinions(id);
}

// Load Opinions Sub-node
function loadOpinions(questionId) {
    const container = document.getElementById(`opinions-${questionId}`);
    
    // Listener for specific question's opinions
    db.ref(`questions/${questionId}/opinions`).on('value', (snapshot) => {
        container.innerHTML = '';
        const data = snapshot.val();
        
        if (!data) {
            container.innerHTML = '<div class="no-opinions" data-i18n="no-opinions">No opinions yet.</div>';
            return;
        }

        // Convert object to array
        Object.values(data).forEach(op => {
            const opDiv = document.createElement('div');
            opDiv.className = 'opinion-item';
            opDiv.innerHTML = `
                <div class="op-header">
                    <span class="op-author">${op.author || "Anonymous"}</span>
                </div>
                <div class="op-text">${op.text}</div>
            `;
            container.appendChild(opDiv);
        });
    });
}

// Add New Question
btnPostQuestion.addEventListener('click', async () => {
    const text = newQuestionText.value.trim();
    if (!text) return;

    btnPostQuestion.disabled = true;
    loadingSpinner.classList.remove('hidden');

    try {
        await db.ref('questions').push({
            text: text,
            author: "Space Cadet",
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        newQuestionText.value = '';
    } catch (error) {
        console.error("Error adding question: ", error);
        alert("Could not post question. Check console.");
    } finally {
        btnPostQuestion.disabled = false;
        loadingSpinner.classList.add('hidden');
    }
});

// Post Opinion (Global function)
window.postOpinion = async (questionId) => {
    const input = document.getElementById(`input-${questionId}`);
    const text = input.value.trim();
    if (!text) return;

    try {
        await db.ref(`questions/${questionId}/opinions`).push({
            text: text,
            author: "Fellow Explorer",
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        input.value = '';
    } catch (error) {
        console.error("Error adding opinion: ", error);
        alert("Failed to add opinion.");
    }
};

// Start logic
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});
