// Node.js Backend Script for automated alerts (Runs via GitHub Actions)
// This script checks for events happening tomorrow and sends an email via EmailJS API.

const NASA_API_KEY = 'QGMpMKQeT2jfs7CxjRLAT4sHsN63MP0oSV2lL6jg';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'h8k4AuhE6QlyDKvJS';
const EMAILJS_SERVICE_ID = 'service_m0gkwe9';
const EMAILJS_TEMPLATE_ID = 'template_xawflaa';

// Firebase Database URL
const FIREBASE_DB_URL = 'https://star-533d9-default-rtdb.firebaseio.com/subscribers.json';

// Cosmic Events Backup
const cosmicEvents = [
    {
        id: 'eclipse-demo',
        title_en: 'Solar Eclipse',
        title_ar: 'كسوف الشمس',
        date: '2025-12-28',
        time_en: '10:00 UTC',
        time_ar: '10:00 بتوقيت جرينتش',
        desc_en: 'A rare solar eclipse is approaching! Witness the alignment of the Sun, Moon, and Earth.',
        desc_ar: 'كسوف نادر للشمس يقترب! شاهد اصطفاف الشمس والقمر والأرض.',
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
    }
];

async function checkAndSendAlerts() {
    console.log("Starting Cosmic Alerts Check...");
    
    // Get tomorrow's date string (YYYY-MM-DD)
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    let eventTomorrow = null;

    // 1. Check NASA DONKI API for events tomorrow
    try {
        console.log("Checking NASA DONKI API...");
        const nasaRes = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`);
        const alerts = await nasaRes.json();
        
        if (alerts && alerts.length > 0) {
            const latest = alerts[0];
            const issueDateString = latest.messageIssueTime.split('T')[0];
            // Simulate that the alert is for tomorrow (since NASA issues alerts roughly matching the target date)
            if (issueDateString === tomorrowString) {
                eventTomorrow = {
                    title_en: 'NASA Space Weather Alert',
                    title_ar: 'تنبيه ناسا للطقس الفضائي',
                    desc_en: 'A space weather event is scheduled for tomorrow. Stay tuned!',
                    desc_ar: 'تم رصد حدث فلكي للغد من قبل ناسا. ابق على تواصل!'
                };
            }
        }
    } catch (e) {
        console.warn("Could not fetch NASA API: ", e.message);
    }

    // 2. Fallback to Cosmic Events list if no NASA alert
    if (!eventTomorrow) {
        const found = cosmicEvents.find(e => e.date === tomorrowString);
        if (found) eventTomorrow = found;
    }

    if (!eventTomorrow) {
        console.log(`No cosmic events scheduled for tomorrow (${tomorrowString}). Exiting.`);
        return;
    }

    console.log(`Found event for tomorrow: ${eventTomorrow.title_en}`);

    // 3. Fetch Subscribers from Firebase
    console.log("Fetching subscribers from Firebase...");
    let subscribers = {};
    try {
        const dbRes = await fetch(FIREBASE_DB_URL);
        subscribers = await dbRes.json();
        if (!subscribers) {
            console.log("No subscribers found in the database. Exiting.");
            return;
        }
    } catch (e) {
        console.error("Failed to connect to Firebase:", e.message);
        return;
    }

    const subscriberList = Object.values(subscribers);
    console.log(`Found ${subscriberList.length} subscribers.`);

    // 4. Send Emails via EmailJS REST API
    let successCount = 0;
    for (const sub of subscriberList) {
        try {
            const lang = sub.lang || 'en';
            
            const emailPayload = {
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_PUBLIC_KEY,
                template_params: {
                    to_email: sub.email,
                    title: lang === 'ar' ? `تذكير: حدث كوني مميز غداً (${eventTomorrow.title_ar})!` : `Reminder: Special Cosmic Event Tomorrow (${eventTomorrow.title_en})!`,
                    event_description: lang === 'ar' ? 
                        `نود تذكيرك أن الحدث التالي سيحدث غداً:\n\n${eventTomorrow.desc_ar}\n\nتأكد من استعدادك للمشاهدة!` :
                        `We want to remind you that the following event is happening tomorrow:\n\n${eventTomorrow.desc_en}\n\nMake sure you're ready to watch!`
                }
            };

            const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailPayload)
            });

            if (emailRes.ok) {
                successCount++;
                console.log(`Sent email to ${sub.email}`);
            } else {
                console.warn(`Failed to send to ${sub.email}: ${emailRes.statusText}`);
            }
            
            // Add a small delay to avoid hitting EmailJS rate limits strictly
            await new Promise(r => setTimeout(r, 200)); 
        } catch (err) {
            console.error(`Error sending email to ${sub.email}:`, err.message);
        }
    }

    console.log(`Finished processing. Successfully sent ${successCount}/${subscriberList.length} emails.`);
}

checkAndSendAlerts();
