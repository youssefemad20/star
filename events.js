// Cosmic Events and Subscription System

const NASA_API_KEY = 'gwxNYmeMRjYXibh6wwkTnihjeSNhOK24nd2aCV4p'; // Updated with user's key

// --- EmailJS Configuration ---
// Get these from emailjs.com
const EMAILJS_PUBLIC_KEY = 'h8k4AuhE6QlyDKvJS'; 
const EMAILJS_SERVICE_ID = 'service_nmawfst';
const EMAILJS_TEMPLATE_ID = 'template_0atp0ai';

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}
// -----------------------------

// Sample Events Data (fallback and specific events)
const cosmicEvents = [
    {
        id: 'eclipse-demo',
        title_en: 'Solar Eclipse (Upcoming)',
        title_ar: 'كسوف الشمس (قريب جداً)',
        date: '2025-12-28', // Set to 2 days from today (Dec 26)
        time_en: '10:00 UTC',
        time_ar: '10:00 بتوقيت جرينتش',
        desc_en: 'A rare solar eclipse is approaching! Witness the alignment of the Sun, Moon, and Earth.',
        desc_ar: 'كسوف نادر للشمس يقترب! شاهد اصطفاف الشمس والقمر والأرض.',
        scientific_en: 'A solar eclipse occurs when the Moon passes between Earth and the Sun, thereby obscuring the view of the Sun from a small part of Earth, totally or partially.',
        scientific_ar: 'يحدث كسوف الشمس عندما يمر القمر بين الأرض والشمس، مما يحجب رؤية الشمس عن جزء صغير من الأرض، كلياً أو جزئياً.'
    },
    {
        id: 'lunar-eclipse-2025',
        title_en: 'Total Lunar Eclipse',
        title_ar: 'خسوف كلي للقمر',
        date: '2025-09-07',
        time_en: '18:12 UTC',
        time_ar: '18:12 بتوقيت جرينتش',
        desc_en: 'A stunning total lunar eclipse where the Moon will turn a deep reddish hue as it passes entirely through Earth\'s shadow.',
        desc_ar: 'خسوف كلي مذهل للقمر حيث سيتحول القمر إلى لون أحمر داكن أثناء مروره بالكامل عبر ظل الأرض.',
        scientific_en: 'A total lunar eclipse happens when the Moon and Sun are on opposite sides of Earth. Earth blocks the sunlight that normally reaches the Moon. Instead of that light hitting the Moon’s surface, Earth’s shadow falls on it.',
        scientific_ar: 'يحدث خسوف القمر الكلي عندما يكون القمر والشمس على جانبين متقابلين من الأرض. تحجب الأرض ضوء الشمس الذي يصل عادة إلى القمر. وبدلاً من أن يصطدم هذا الضوء بسطح القمر، يسقط ظل الأرض عليه.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    initSubscription();
    // Load events.css manually since it's a new file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'events.css';
    document.head.appendChild(link);
});

async function initEvents() {
    const banner = document.getElementById('upcoming-event-banner');
    const title = document.getElementById('event-title');
    const dateEl = document.getElementById('event-date');
    const timeEl = document.getElementById('event-time');
    const descEl = document.getElementById('event-desc');

    const now = new Date();
    
    // 1. Fetch Live NASA Alerts (DONKI)
    let liveAlert = null;
    try {
        const response = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`);
        const alerts = await response.json();
        if (alerts && alerts.length > 0) {
            const latest = alerts[0];
            const issueDate = new Date(latest.messageIssueTime);
            const expiryDate = new Date(issueDate.getTime() + (24 * 60 * 60 * 1000));
            
            // Only show if the alert is not older than 24 hours
            if (now < expiryDate) {
                liveAlert = {
                    id: latest.messageID,
                    title_en: 'NASA Space Weather Alert',
                    title_ar: 'تنبيه ناسا للطقس الفضائي',
                    date: latest.messageIssueTime.split('T')[0],
                    time_en: latest.messageIssueTime.split('T')[1].replace('Z', ' UTC'),
                    time_ar: latest.messageIssueTime.split('T')[1].replace('Z', ' بتوقيت جرينتش'),
                    desc_en: 'New space weather notification from NASA. Potential solar activity or magnetic event detected.',
                    desc_ar: 'إشعار جديد بحالة الطقس الفضائي من ناسا. تم رصد نشاط شمسي محتمل أو حدث مغناطيسي.',
                    scientific_en: latest.messageBody,
                    scientific_ar: 'تنبيه طقس فضائي مباشر من ناسا (بيانات خام). يرجى مراجعة التفاصيل لمعرفة التأثيرات المحتملة.'
                };
            }
        }
    } catch (e) {
        console.warn("NASA API Fetch failed, falling back to curated events.", e);
    }

    // 2. Select the best event to show
    let selectedEvent = null;

    if (liveAlert) {
        selectedEvent = liveAlert;
    } else {
        selectedEvent = cosmicEvents.find(event => {
            const eventDate = new Date(event.date);
            const expiryDate = new Date(eventDate.getTime() + (24 * 60 * 60 * 1000));
            return now < expiryDate;
        });
    }

    if (selectedEvent) {
        banner.classList.remove('hidden');
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        
        title.innerText = lang === 'ar' ? selectedEvent.title_ar : selectedEvent.title_en;
        dateEl.innerText = selectedEvent.date;
        timeEl.innerText = lang === 'ar' ? selectedEvent.time_ar : selectedEvent.time_en;
        
        let description = lang === 'ar' ? selectedEvent.desc_ar : selectedEvent.desc_en;
        let scientificText = lang === 'ar' ? selectedEvent.scientific_ar : selectedEvent.scientific_en;

        if (selectedEvent.id.startsWith('20') || selectedEvent.id.length > 10) { 
            scientificText = scientificText.replace(/##/g, '<br><br>').replace(/#/g, '');
            scientificText = scientificText.length > 500 ? scientificText.substring(0, 500) + '...' : scientificText;
        }

        descEl.innerHTML = `${description}<br><br><strong>${lang === 'ar' ? 'التفسير العلمي:' : 'Scientific Insight:'}</strong><br>${scientificText}`;
    } else {
        banner.classList.add('hidden'); // Hide banner if no current events
    }
}

async function initSubscription() {
    const form = document.getElementById('subscribe-form');
    const messageEl = document.getElementById('sub-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('sub-email').value;
        const lang = localStorage.getItem('selectedLanguage') || 'en';

        try {
            // Save to Firebase if available
            if (typeof firebase !== 'undefined' && firebase.database) {
                const db = firebase.database();
                const subscribersRef = db.ref('subscribers');
                await subscribersRef.push({
                    email: email,
                    subscribedAt: firebase.database.ServerValue.TIMESTAMP,
                    lang: lang
                });
            } else {
                console.warn("Firebase not initialized. Proceeding with Email notification only.");
            }

            // --- Send Welcome/Alert Email via EmailJS ---
            // This will now run even if Firebase is not connected (important for Demo)
            if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' && EMAILJS_PUBLIC_KEY !== '') {
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                    to_email: email,
                    title: lang === 'ar' ? 'تنبيه: كسوف الشمس يوم 28 ديسمبر!' : 'Alert: Solar Eclipse on Dec 28th!',
                    event_description: lang === 'ar' ? 
                        "نود تذكيرك بحدث كسوف الشمس القادم يوم 28/12/2025. أفضل وقت للمشاهدة هو الساعة 10:00 بتوقيت جرينتش." : 
                        "We remind you of the upcoming Solar Eclipse on Dec 28th, 2025. Best viewing time is 10:00 UTC.",
                    user_lang: lang
                }).then((res) => {
                    console.log("Email sent successfully!", res.status, res.text);
                }).catch((err) => {
                    console.error("EmailJS Failed:", err);
                    alert("EmailJS Error: " + JSON.stringify(err)); // Show alert for easier debugging
                });
            }

            showMessage(translations[lang]['sub-success'], 'success');
            form.reset();
            
        } catch (error) {
            console.error("Subscription error:", error);
            showMessage(translations[lang]['sub-error'], 'error');
        }
    });

    function showMessage(text, type) {
        messageEl.innerText = text;
        messageEl.className = `message ${type}`;
        messageEl.classList.remove('hidden');
        setTimeout(() => messageEl.classList.add('hidden'), 5000);
    }
}

// Logic to fetch NASA Astronomy Picture of the Day or Alerts could go here
async function fetchNASAAlerts() {
    try {
        const response = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`);
        const data = await response.json();
    } catch (e) {
        console.log("NASA API Error:", e);
    }
}
