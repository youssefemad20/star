const admin = require('firebase-admin');
const axios = require('axios');

// Initialize Firebase Admin (using environment variables in GitHub)
if (!admin.apps.length) {
    try {
        if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
            throw new Error("FIREBASE_SERVICE_ACCOUNT secret is missing!");
        }
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://star-f329b-default-rtdb.firebaseio.com"
        });
        console.log("Firebase Admin initialized successfully.");
    } catch (e) {
        console.error("Firebase Initialization Error:", e.message);
        process.exit(1);
    }
}

const db = admin.database();

// 1. Fetch Live NASA Alerts (DONKI)
async function fetchLatestNASAAlert() {
    const NASA_API_KEY = process.env.NASA_API_KEY || 'gwxNYmeMRjYXibh6wwkTnihjeSNhOK24nd2aCV4p';
    try {
        console.log("Fetching live NASA alerts...");
        const response = await axios.get(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`);
        const alerts = response.data;
        
        if (alerts && alerts.length > 0) {
            const latest = alerts[0];
            return {
                id: latest.messageID,
                title_en: 'NASA Space Weather Alert',
                date: latest.messageIssueTime.split('T')[0],
                time_en: latest.messageIssueTime.split('T')[1].replace('Z', ' UTC'),
                description: 'New space weather notification from NASA. Potential solar activity or magnetic event detected.',
                scientific_info: latest.messageBody
            };
        }
    } catch (e) {
        console.warn("NASA API Fetch failed:", e.message);
    }
    return null;
}

// Curated Events List (Backup/Specific Events)
const cosmicEvents = [
    {
        id: 'eclipse-demo',
        title_en: 'Solar Eclipse',
        date: '2025-12-28',
        time_en: '10:00 UTC',
        description: 'A beautiful solar eclipse is coming!'
    }
];

async function sendDailyAlerts() {
    console.log("Checking for cosmic events...");
    
    // 1. Try to get NASA Live Alert first
    const liveEvent = await fetchLatestNASAAlert();
    let upcomingEvent = null;

    if (liveEvent) {
        // Only send if it was issued today (for daily alerts)
        const today = new Date().toISOString().split('T')[0];
        if (liveEvent.date === today) {
            upcomingEvent = liveEvent;
            console.log("Live NASA Alert identified for today!");
        }
    }

    // 2. Fallback to tomorrow's curated events if no live NASA alert today
    if (!upcomingEvent) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        upcomingEvent = cosmicEvents.find(e => e.date === tomorrowStr);
        
        if (upcomingEvent) {
            upcomingEvent.scientific_info = upcomingEvent.description;
        }
    }

    if (!upcomingEvent) {
        console.log("No new live NASA alerts today and no events scheduled for tomorrow.");
        return;
    }

    console.log(`Target Event: ${upcomingEvent.title_en}. Fetching subscribers...`);

    const snapshot = await db.ref('subscribers').once('value').catch(e => {
        throw new Error(`Firebase Database Error: ${e.message}`);
    });
    const subscribers = snapshot.val();

    if (!subscribers) {
        console.log("No subscribers found in database.");
        return;
    }

    const emails = Object.values(subscribers).map(s => s.email);
    console.log(`Found ${emails.length} subscribers. Sending alerts...`);

    for (const email of emails) {
        try {
            // Using EmailJS REST API
            await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                accessToken: process.env.EMAILJS_PRIVATE_KEY,
                template_params: {
                    to_email: email,
                    title: upcomingEvent.title_en,
                    event_description: `Alert! ${upcomingEvent.description}\n\nDate: ${upcomingEvent.date}\nTime: ${upcomingEvent.time_en}\n\nDetails:\n${upcomingEvent.scientific_info.substring(0, 500)}...`
                }
            });
            console.log(`Sent to: ${email}`);
        } catch (error) {
            console.error(`Failed to send to ${email}:`, error.response ? error.response.data : error.message);
        }
    }
}

sendDailyAlerts().then(() => {
    console.log("Automation task finished.");
    process.exit(0);
}).catch(err => {
    console.error("Critical Error:", err);
    process.exit(1);
});
