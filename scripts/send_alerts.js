const fs = require('fs');
const path = require('path');

const NASA_API_KEY = 'QGMpMKQeT2jfs7CxjRLAT4sHsN63MP0oSV2lL6jg';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'h8k4AuhE6QlyDKvJS';
const EMAILJS_SERVICE_ID = 'service_m0gkwe9';
const EMAILJS_TEMPLATE_ID = 'template_xawflaa';

// Firebase Database URL
const FIREBASE_DB_URL = 'https://star-533d9-default-rtdb.firebaseio.com/subscribers.json';

async function checkAndSendAlerts() {
    console.log("Starting Fully Automated Cosmic Alerts Check...");
    
    // Get current and tomorrow's date strings (YYYY-MM-DD)
    const now = new Date();
    const nowString = now.toISOString().split('T')[0];
    const tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000));
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    let eventTomorrow = null;

    // 1. Check NASA DONKI API for LIVE Space Weather Alerts (High Priority)
    try {
        console.log("Step 1: Checking NASA DONKI for live alerts...");
        const nasaRes = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`);
        const alerts = await nasaRes.json();
        
        if (alerts && alerts.length > 0) {
            const latest = alerts[0];
            const issueDate = new Date(latest.messageIssueTime);
            const LAST_24H = new Date(now.getTime() - (24 * 60 * 60 * 1000));

            if (issueDate > LAST_24H) {
                console.log(`Found a fresh NASA alert issued at: ${latest.messageIssueTime}`);
                eventTomorrow = {
                    title_en: 'NASA Space Weather Alert',
                    title_ar: 'تنبيه ناسا للطقس الفضائي',
                    desc_en: `New space weather notification from NASA (Type: ${latest.messageType || 'General Alert'}). This was recently issued and may affect cosmic conditions in the coming day.`,
                    desc_ar: `إشعار طقس فضائي جديد من ناسا (النوع: ${latest.messageType || 'تنبيه عام'}). تم إصدار هذا التقرير مؤخراً وقد يؤثر على الظروف الكونية خلال الساعات القادمة.`
                };
            }
        }
    } catch (e) {
        console.warn("NASA DONKI API failed: ", e.message);
    }

    // 2. Check NASA NeoWs for Asteroid Close Approaches (Medium Priority)
    if (!eventTomorrow) {
        try {
            console.log("Step 2: Checking NASA NeoWs for asteroid flybys...");
            const neoRes = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${tomorrowString}&end_date=${tomorrowString}&api_key=${NASA_API_KEY}`);
            const data = await neoRes.json();
            
            const nearEarthObjects = data.near_earth_objects[tomorrowString] || [];
            const significantNEO = nearEarthObjects.find(neo => neo.is_potentially_hazardous_asteroid || neo.close_approach_data[0].miss_distance.lunar < 5);

            if (significantNEO) {
                console.log(`Found a significant asteroid flyby: ${significantNEO.name}`);
                eventTomorrow = {
                    title_en: '☄️ Asteroid Flyby Alert',
                    title_ar: '☄️ تنبيه: اقتراب كويكب',
                    desc_en: `Asteroid ${significantNEO.name} will make a close approach to Earth tomorrow at a distance of approx ${Math.round(significantNEO.close_approach_data[0].miss_distance.kilometers)} km. Don't worry, it's being monitored by NASA!`,
                    desc_ar: `سيمر الكويكب ${significantNEO.name} بالقرب من الأرض غداً على مسافة حوالي ${Math.round(significantNEO.close_approach_data[0].miss_distance.kilometers)} كم. لا داعي للقلق، ناسا تراقبه عن كثب!`
                };
            }
        } catch (e) {
            console.warn("NASA NeoWs API failed: ", e.message);
        }
    }

    // 3. Check long-term cosmic calendar (Eclipses, Conjunctions)
    if (!eventTomorrow) {
        try {
            console.log("Step 3: Checking cosmic_calendar.json...");
            const calendarPath = path.join(__dirname, 'cosmic_calendar.json');
            if (fs.existsSync(calendarPath)) {
                const calendar = JSON.parse(fs.readFileSync(calendarPath, 'utf8'));
                const found = calendar.find(e => e.date === tomorrowString);
                if (found) {
                    eventTomorrow = found;
                }
            }
        } catch (e) {
            console.warn("Cosmic Calendar loading failed: ", e.message);
        }
    }

    if (!eventTomorrow) {
        console.log(`No cosmic events found for tomorrow (${tomorrowString}).`);
        return;
    }

    console.log(`Final Event to Alert: ${eventTomorrow.title_en}`);

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
