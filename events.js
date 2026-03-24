// Cosmic Events and Subscription System
const NASA_API_KEY = 'QGMpMKQeT2jfs7CxjRLAT4sHsN63MP0oSV2lL6jg';

// --- EmailJS Configuration ---
const EMAILJS_PUBLIC_KEY = 'h8k4AuhE6QlyDKvJS'; 
const EMAILJS_SERVICE_ID = 'service_m0gkwe9';
const EMAILJS_TEMPLATE_ID = 'template_xawflaa';

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// -----------------------------

let cosmicEvents = []; // Loaded dynamically from scripts/cosmic_calendar.json

document.addEventListener('DOMContentLoaded', async () => {
    await loadCosmicCalendar();
    initEvents();
    initSubscription();
    // Load events.css manually since it's a new file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'events.css';
    document.head.appendChild(link);
});

async function loadCosmicCalendar() {
    try {
        const response = await fetch('scripts/cosmic_calendar.json');
        cosmicEvents = await response.json();
    } catch (e) {
        console.warn("Failed to load cosmic calendar JSON, using empty fallback.", e);
        cosmicEvents = [];
    }
}

// --- Human-Friendly NASA Alert Translations ---
// Maps DONKI messageType codes to clear titles and explanations
const DONKI_TRANSLATIONS = {
    // Radiation Belt Enhancement
    'RBE': {
        title_en: '🌌 Radiation Belt Activity',
        title_ar: '🌌 نشاط في أحزمة الإشعاع',
        desc_en: 'NASA has detected increased radiation levels in Earth\'s radiation belts. This can affect satellites and astronauts in orbit, but people on the ground are completely safe.',
        desc_ar: 'رصدت ناسا ارتفاعًا في مستويات الإشعاع في أحزمة فان ألن المحيطة بالأرض. قد يؤثر هذا على الأقمار الصناعية ورواد الفضاء في المدار — لكن السكان على سطح الأرض بأمان تام.',
        impact_en: '📡 May affect: satellites, GPS accuracy, some radio communications.',
        impact_ar: '📡 قد يؤثر على: الأقمار الصناعية، دقة GPS، بعض الاتصالات اللاسلكية.'
    },
    // Coronal Mass Ejection
    'CME': {
        title_en: '☀️ Solar Eruption (CME)',
        title_ar: '☀️ انفجار شمسي (انبعاث إكليلي)',
        desc_en: 'The Sun has released a massive cloud of plasma and magnetic field into space. If it\'s headed toward Earth, it could trigger a geomagnetic storm and beautiful auroras.',
        desc_ar: 'أطلقت الشمس سحابة ضخمة من البلازما والمجال المغناطيسي في الفضاء. إذا كانت متجهة نحو الأرض، فقد تتسبب في عاصفة مغناطيسية ومشاهدة شفق قطبي رائع.',
        impact_en: '🌈 Possible auroras. May affect power grids & satellites.',
        impact_ar: '🌈 احتمال ظهور شفق قطبي. قد يؤثر على شبكات الكهرباء والأقمار الصناعية.'
    },
    // Geomagnetic Storm
    'GST': {
        title_en: '🧲 Geomagnetic Storm',
        title_ar: '🧲 عاصفة مغناطيسية أرضية',
        desc_en: 'Earth\'s magnetic field is currently disturbed by solar wind. This can disrupt navigation systems and cause beautiful auroras at lower latitudes than usual.',
        desc_ar: 'المجال المغناطيسي للأرض يتعرض حاليًا لاضطراب بسبب الرياح الشمسية. قد يُؤثر على أنظمة الملاحة ويُسبب ظهور شفق قطبي في مناطق أبعد عن القطب من المعتاد.',
        impact_en: '🧭 May disrupt: GPS, compass, radio. Auroras may be visible.',
        impact_ar: '🧭 قد يؤثر على: GPS، البوصلة، الراديو. الشفق القطبي قد يُرى في مناطق غير معتادة.'
    },
    // Solar Energetic Particle
    'SEP': {
        title_en: '⚡ High-Energy Solar Particles',
        title_ar: '⚡ جسيمات شمسية عالية الطاقة',
        desc_en: 'The Sun is shooting high-energy particles into space. These particles travel fast and can reach Earth within minutes to hours, posing a risk to astronauts and spacecraft.',
        desc_ar: 'الشمس تُطلق جسيمات عالية الطاقة في الفضاء. هذه الجسيمات تنتقل بسرعة كبيرة وقد تصل إلى الأرض خلال دقائق إلى ساعات، مما يُشكّل خطرًا على رواد الفضاء والمركبات الفضائية.',
        impact_en: '🚀 Risk to astronauts & satellites. Ground radiation is normal.',
        impact_ar: '🚀 خطر على رواد الفضاء والأقمار الصناعية. الإشعاع على الأرض طبيعي.'
    },
    // Solar Flare
    'FLR': {
        title_en: '🔥 Solar Flare',
        title_ar: '🔥 توهج شمسي',
        desc_en: 'A powerful burst of X-ray energy from the Sun was detected. Strong flares can briefly disrupt radio communications on the sunlit side of Earth.',
        desc_ar: 'تم رصد انفجار قوي من أشعة إكس من الشمس. يمكن للتوهجات الشمسية القوية تعطيل الاتصالات اللاسلكية لفترة قصيرة على الجانب المضيء من الأرض.',
        impact_en: '📻 May briefly disrupt HF radio on Earth\'s dayside.',
        impact_ar: '📻 قد يُعطّل الراديو قصير الموجة لفترة وجيزة على الجانب المضيء من الأرض.'
    },
    // Interplanetary Shock
    'IPS': {
        title_en: '🌊 Solar Wind Shockwave',
        title_ar: '🌊 موجة صدمة من الرياح الشمسية',
        desc_en: 'A shockwave in the solar wind (the stream of particles from the Sun) has been detected. This could trigger geomagnetic disturbances when it reaches Earth.',
        desc_ar: 'تم رصد موجة صدمة في الرياح الشمسية (تيار الجسيمات القادم من الشمس). قد تُسبب هذه الموجة اضطرابات مغناطيسية عند وصولها للأرض.',
        impact_en: '🛰️ Watch for geomagnetic activity in the coming hours.',
        impact_ar: '🛰️ توقع نشاطًا مغناطيسيًا أرضيًا في الساعات القادمة.'
    },
    // Report
    'Report': {
        title_en: '📋 NASA Space Weather Report',
        title_ar: '📋 تقرير ناسا: أحوال الطقس الفضائي',
        desc_en: 'NASA has issued a routine space weather summary report covering recent solar and geomagnetic activity.',
        desc_ar: 'أصدرت ناسا تقريرًا اعتياديًا يلخص حالة الطقس الفضائي ويستعرض أحدث النشاطات الشمسية والمغناطيسية.',
        impact_en: '🔭 Informational update. No immediate danger expected.',
        impact_ar: '🔭 تحديث إعلامي. لا يُتوقع خطر فوري.'
    }
};

// Generic fallback for unknown alert types
function getDONKIInfo(messageType, lang) {
    // Try exact match first
    let info = DONKI_TRANSLATIONS[messageType];
    
    // Try partial match (e.g. "RBE Analysis" → "RBE")
    if (!info) {
        for (const key of Object.keys(DONKI_TRANSLATIONS)) {
            if (messageType && messageType.includes(key)) {
                info = DONKI_TRANSLATIONS[key];
                break;
            }
        }
    }

    // Generic fallback
    if (!info) {
        info = {
            title_en: '🛸 NASA Space Alert',
            title_ar: '🛸 تنبيه فضائي من ناسا',
            desc_en: 'NASA has issued a new space weather notification. Conditions in near-Earth space are being actively monitored.',
            desc_ar: 'أصدرت ناسا إشعارًا جديدًا بشأن الطقس الفضائي. يتم الآن رصد الظروف في الفضاء القريب من الأرض.',
            impact_en: '🔭 Monitoring in progress. Stay tuned for updates.',
            impact_ar: '🔭 الرصد جارٍ. ترقبوا التحديثات.'
        };
    }
    return info;
}

async function initEvents() {
    const banner = document.getElementById('upcoming-event-banner');
    const title = document.getElementById('event-title');
    const dateEl = document.getElementById('event-date');
    const timeEl = document.getElementById('event-time');
    const descEl = document.getElementById('event-desc');

    const now = new Date();
    const lang = localStorage.getItem('selectedLanguage') || 'en';

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
                const messageType = latest.messageType || '';
                const info = getDONKIInfo(messageType, lang);

                // Format date and time to Cairo local time (UTC+2)
                const alertDate = new Date(latest.messageIssueTime);
                
                const formattedDate = alertDate.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Africa/Cairo'
                });

                const formattedTime = alertDate.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                    hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Africa/Cairo'
                });

                liveAlert = {
                    id: latest.messageID || latest.messageIssueTime,
                    title_en: info.title_en,
                    title_ar: info.title_ar,
                    date_en: formattedDate,
                    date_ar: formattedDate,
                    time_en: formattedTime + ' (Cairo Time)',
                    time_ar: formattedTime + ' (بتوقيت القاهرة)',
                    desc_en: info.desc_en,
                    desc_ar: info.desc_ar,
                    impact_en: info.impact_en,
                    impact_ar: info.impact_ar
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
        // Render the friendly NASA alert
        banner.classList.remove('hidden');

        title.innerText = lang === 'ar' ? selectedEvent.title_ar : selectedEvent.title_en;
        dateEl.innerText = lang === 'ar' ? selectedEvent.date_ar : selectedEvent.date_en;
        timeEl.innerText = lang === 'ar' ? selectedEvent.time_ar : selectedEvent.time_en;

        const desc = lang === 'ar' ? selectedEvent.desc_ar : selectedEvent.desc_en;
        const impact = lang === 'ar' ? selectedEvent.impact_ar : selectedEvent.impact_en;
        const impactLabel = lang === 'ar' ? '📊 التأثير المتوقع:' : '📊 Expected Impact:';
        const sourceLabel = lang === 'ar' ? '📡 المصدر: ناسا (DONKI)' : '📡 Source: NASA (DONKI)';

        descEl.innerHTML = `
            <p style="margin:0 0 10px">${desc}</p>
            <p style="margin:0 0 6px"><strong>${impactLabel}</strong> ${impact}</p>
            <small style="opacity:0.7">${sourceLabel}</small>
        `;
        return;
    }

    // Fallback to curated events
    selectedEvent = cosmicEvents.find(event => {
        const eventDate = new Date(event.date);
        const expiryDate = new Date(eventDate.getTime() + (24 * 60 * 60 * 1000));
        return now < expiryDate;
    });

    if (selectedEvent) {
        banner.classList.remove('hidden');

        title.innerText = lang === 'ar' ? selectedEvent.title_ar : selectedEvent.title_en;
        dateEl.innerText = selectedEvent.date;
        timeEl.innerText = lang === 'ar' ? selectedEvent.time_ar : selectedEvent.time_en;

        const description = lang === 'ar' ? selectedEvent.desc_ar : selectedEvent.desc_en;
        const scientificText = lang === 'ar' ? selectedEvent.scientific_ar : selectedEvent.scientific_en;
        const sciLabel = lang === 'ar' ? 'الشرح العلمي:' : 'Scientific Insight:';

        descEl.innerHTML = `${description}<br><br><strong>${sciLabel}</strong><br>${scientificText}`;
    } else {
        banner.classList.add('hidden');
    }
}

async function initSubscription() {
    const form = document.getElementById('subscribe-form');
    const messageEl = document.getElementById('sub-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('sub-email').value;
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const subscribeBtn = form.querySelector('button');

        subscribeBtn.disabled = true;

        try {
            // Save to Firebase using the globally exposed db object
            if (window.db) {
                const subscribersRef = window.db.ref('subscribers');
                await subscribersRef.push({
                    email: email,
                    subscribedAt: firebase.database.ServerValue.TIMESTAMP,
                    lang: lang
                });
            } else {
                console.warn("Firebase not initialized yet for subscriptions.");
            }

            // --- Send Welcome/Alert Email via EmailJS ---
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                    to_email: email,
                    title: lang === 'ar' ? 'تنبيه: كسوف الشمس القادم!' : 'Alert: Upcoming Solar Eclipse!',
                    event_description: lang === 'ar' ? 
                        "نود تذكيرك بحدث كسوف الشمس القادم القريب. ابق مستعداً للمراقبة!" : 
                        "We remind you of the upcoming Solar Eclipse soon. Get ready to watch!",
                    user_lang: lang
                });
                console.log("Email sent successfully!");
            }

            showMessage(translations[lang]['sub-success'], 'success');
            form.reset();
            
        } catch (error) {
            console.error("Subscription error:", error);
            showMessage(translations[lang]['sub-error'], 'error');
        } finally {
            subscribeBtn.disabled = false;
        }
    });

    function showMessage(text, type) {
        messageEl.innerText = text;
        messageEl.className = `message ${type}`;
        messageEl.classList.remove('hidden');
        setTimeout(() => messageEl.classList.add('hidden'), 5000);
    }
}
