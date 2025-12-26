const admin = require('firebase-admin');
const axios = require('axios');

// Initialize Firebase Admin (using environment variables in GitHub)
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://star-f329b-default-rtdb.firebaseio.com"
    });
}

const db = admin.database();

// Curated Events List (Keep this in sync with events.js or fetch from DB)
const cosmicEvents = [
    {
        id: 'eclipse-demo',
        title_en: 'Solar Eclipse',
        title_ar: 'كسوف الشمس',
        date: '2025-12-28',
        time_en: '10:00 UTC',
        time_ar: '10:00 بتوقيت جرينتش'
    }
    // ... add others or fetch from Firebase
];

async function sendDailyAlerts() {
    console.log("Checking for upcoming events...");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const upcomingEvent = cosmicEvents.find(e => e.date === tomorrowStr);

    if (!upcomingEvent) {
        console.log("No events scheduled for tomorrow.");
        return;
    }

    console.log(`Event found: ${upcomingEvent.title_en}. Fetching subscribers...`);

    const snapshot = await db.ref('subscribers').once('value');
    const subscribers = snapshot.val();

    if (!subscribers) {
        console.log("No subscribers found.");
        return;
    }

    const emails = Object.values(subscribers).map(s => s.email);
    console.log(`Sending alerts to ${emails.length} subscribers...`);

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
                    title: `Upcoming Event: ${upcomingEvent.title_en}`,
                    event_description: `Attention! Tomorrow, ${upcomingEvent.date}, there is a ${upcomingEvent.title_en} at ${upcomingEvent.time_en}. Don't miss it!`
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
