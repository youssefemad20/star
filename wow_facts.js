(function () {
    const factsAr = [
        "🌞 الشمس بتستهلك 4 مليون طن من كتلتها كل ثانية كطاقة!",
        "⚾ لو الشمس بحجم كرة بيسبول، الأرض هتكون بحجم حبة رمل!",
        "🌅 يوم على الزهرة أطول من سنة كاملة عليها!",
        "🔇 الفضاء صامت تماماً — الصوت مش بينتقل في الفراغ!",
        "⭐ النجوم اللي بتشوفها في السما ممكن تكون ماتت من ملايين السنين!",
        "🕰️ عمر الكون تقريباً 13.8 مليار سنة!",
        "🌋 المريخ فيه أعلى بركان في المجموعة الشمسية — Olympus Mons ارتفاعه 3 أضعاف إيفرست!",
        "🌍 الأرض هي الكوكب الوحيد اللي اسمه مش من أساطير رومانية أو يونانية!",
        "💉 في الفضاء الدم بيغلي عند حرارة جسم الإنسان العادية بسبب انعدام الضغط!",
        "🪐 المشتري كبير لدرجة إن جاذبيته بتحمي الأرض من الكويكبات!",
        "🌀 عاصفة الـ Great Red Spot على المشتري مستمرة من أكتر من 400 سنة!",
        "💡 سرعة الضوء 300,000 كيلومتر في الثانية — لكنه بياخد 8 دقايق يوصل من الشمس للأرض!",
        "🔵 نبتون لسه ما كملش دورة كاملة حول الشمس من وقت اكتشافه سنة 1846!",
        "↔️ أورانوس بيدور على جنبه — محوره مائل 98 درجة!",
        "🕳️ الثقب الأسود Sagittarius A* في وسط مجرتنا كتلته 4 مليون ضعف الشمس!",
        "🧂 لو أزلت الفراغات من الذرات في جسم كل البشر، هيبقوا بحجم حبة سكر!",
        "🌊 زحل أخف من الماء — لو فيه محيط كبير كفاية هيعوم فيه!",
        "🌙 القمر بيبتعد عن الأرض 3.8 سم كل سنة!",
        "🌡️ درجة الحرارة على عطارد بالليل -180 درجة وبالنهار +430 درجة!",
        "🔴 النجم Betelgeuse أكبر من مدار المريخ حول الشمس!",
        "🌌 الكون فيه أكتر من 2 تريليون مجرة!",
        "✨ الضوء اللي بيوصلنا من أقرب نجم تاني غير الشمس عمره 4.2 سنة!",
        "🍖 رائحة الفضاء وصفها رواد الفضاء بأنها زي اللحم المشوي والمعدن!",
        "👣 على القمر آثار أقدام نيل أرمسترونج لسه موجودة — مفيش رياح تمسحها!",
        "☀️ الشمس هتبلع الأرض بعد 5 مليار سنة لما تتحول لعملاق أحمر!",
        "💎 في كويكب مصنوع من الألماس تقريباً بحجم الأرض — اسمه 55 Cancri e!",
        "🛩️ الفضاء مش بعيد — هو على بعد 100 كيلومتر بس فوق رأسك!",
        "🌊 جاذبية القمر هي اللي بتخلي المد والجزر يحصلوا على الأرض!",
        "🚀 أسرع مركبة صنعها البشر هي Parker Solar Probe — بتتحرك بسرعة 690,000 كم/ساعة!",
        "🛸 الـ ISS بتدور حول الأرض كل 90 دقيقة — يعني رواد الفضاء بيشوفوا 16 شروق شمس يومياً!",
        "⚖️ الشمس لوحدها فيها 99.86% من كتلة المجموعة الشمسية كلها!",
        "🧪 في نجوم نيوترونية كثافتها لدرجة إن ملعقة صغيرة منها وزنها مليار طن!",
        "🌀 الكون بيتوسع بسرعة أكبر من سرعة الضوء في بعض الأماكن!",
        "📸 أول صورة للثقب الأسود اتأخدت سنة 2019 وكانت نتيجة عمل آلاف العلماء!",
        "💙 المريخ فيه غروب شمس أزرق اللون بسبب تركيبة غلافه الجوي!",
        "⏳ عمر الشمس دلوقتي نص عمرها التقريبي — لسه في نص عمرها قدامها!",
        "🛰️ Voyager 1 هي أبعد جسم صنعه البشر عن الأرض — دلوقتي على بعد 23 مليار كيلومتر!",
        "🧊 القمر أوروبا التابع للمشتري فيه محيط تحت الجليد ممكن يكون فيه حياة!",
        "💀 لو وقفت على نجم نيوتروني جاذبيتها هتسحقك في ثانية واحدة!",
        "🔭 حجم الكون المرئي 93 مليار سنة ضوئية — والكون الحقيقي أكبر بكتير!",
        "☀️ الشمس بتدور حول مركز المجرة كل 225 مليون سنة!",
        "💧 الماء موجود في الفضاء — اكتشفوا سحابة مياه بحجم 140 تريليون مرة محيطات الأرض!",
        "🔬 هيليوم اكتشفوه على الشمس قبل ما يكتشفوه على الأرض!",
        "⚗️ في كل ثانية الشمس بتحول 600 مليون طن هيدروجين لـ هيليوم!",
        "🌍 الأرض بتتحرك في مدارها حول الشمس بسرعة 107,000 كيلومتر في الساعة!",
        "🗺️ أضخم بركان في المجموعة الشمسية Olympus Mons عرضه زي حجم فرنسا كلها!",
        "⚛️ نيوترينوز — جسيمات من الشمس بتعدي من جسمك بالمليارات كل ثانية!",
        "🐕 أول حيوان راح الفضاء كانت كلبة اسمها لايكا سنة 1957!",
        "🔭 التلسكوب جيمس ويب بيشوف مجرات من 13.5 مليار سنة مضت!",
        "📄 لو قدرت تطوي ورقة 42 مرة، سمكها هيوصل من الأرض للقمر!",
    ];

    const factsEn = [
        "🌞 The Sun consumes 4 million tons of its own mass every second as energy!",
        "⚾ If the Sun were the size of a baseball, Earth would be the size of a grain of sand!",
        "🌅 A day on Venus is longer than a full year on Venus — it rotates slower than it orbits the Sun!",
        "🔇 Space is completely silent — sound cannot travel through a vacuum!",
        "⭐ The stars you see in the night sky may have died millions of years ago!",
        "🕰️ The universe is approximately 13.8 billion years old!",
        "🌋 Mars has the tallest volcano in the solar system — Olympus Mons stands 3× the height of Everest!",
        "🌍 Earth is the only planet whose name does not come from Roman or Greek mythology!",
        "💉 In space, blood would boil at normal human body temperature due to the absence of pressure!",
        "🪐 Jupiter's immense gravity shields Earth from many dangerous asteroids!",
        "🌀 Jupiter's Great Red Spot is a storm that has been raging for over 400 years!",
        "💡 Light travels at 300,000 km/s — but still takes 8 minutes to reach us from the Sun!",
        "🔵 Neptune has not yet completed a full orbit around the Sun since its discovery in 1846!",
        "↔️ Uranus rotates on its side — its axis is tilted a staggering 98 degrees!",
        "🕳️ The black hole Sagittarius A* at our galaxy's center has the mass of 4 million Suns!",
        "🧂 If all the empty space in human atoms were removed, all of humanity would fit in a sugar cube!",
        "🌊 Saturn is less dense than water — it would float if placed in a large enough ocean!",
        "🌙 The Moon is drifting away from Earth at 3.8 cm every year!",
        "🌡️ Mercury swings from -180°C at night to +430°C during the day!",
        "🔴 The star Betelgeuse is so massive it's wider than Mars's entire orbit around the Sun!",
        "🌌 The observable universe contains more than 2 trillion galaxies!",
        "✨ The light reaching us from the nearest star beyond our Sun is already 4.2 years old!",
        "🍖 Astronauts describe the smell of space as similar to burnt metal or seared steak!",
        "👣 Neil Armstrong's footprints are still on the Moon — there's no wind to erase them!",
        "☀️ The Sun will engulf Earth in approximately 5 billion years when it swells into a red giant!",
        "💎 There's a diamond asteroid roughly the size of Earth — it's called 55 Cancri e!",
        "🛩️ Space isn't far — it's only 100 km above your head!",
        "🌊 The Moon's gravity is responsible for Earth's ocean tides!",
        "🚀 The Parker Solar Probe is the fastest spacecraft ever built, traveling at 690,000 km/h!",
        "🛸 The ISS orbits Earth every 90 minutes — astronauts witness 16 sunrises every single day!",
        "⚖️ The Sun alone accounts for 99.86% of all mass in the entire solar system!",
        "🧪 A teaspoon of neutron star material would weigh approximately 1 billion tons!",
        "🌀 The universe is expanding faster than the speed of light in some regions!",
        "📸 The first image of a black hole was captured in 2019, by thousands of scientists worldwide!",
        "💙 Mars has blue sunsets — dust particles in its thin atmosphere scatter light differently!",
        "⏳ The Sun is about halfway through its lifespan — it still has roughly 5 billion years left!",
        "🛰️ Voyager 1 is the farthest man-made object from Earth — now over 23 billion km away!",
        "🧊 Jupiter's moon Europa has a liquid ocean beneath its icy surface that may harbor life!",
        "💀 If you stood on a neutron star, its immense gravity would crush you instantly!",
        "🔭 The observable universe stretches 93 billion light-years — and the real universe is far larger!",
        "☀️ The Sun orbits the center of the Milky Way once every 225 million years!",
        "💧 Scientists discovered a water vapor cloud in space 140 trillion times the volume of Earth's oceans!",
        "🔬 Helium was discovered on the Sun before it was ever found on Earth!",
        "⚗️ Every second, the Sun fuses 600 million tons of hydrogen into helium!",
        "🌍 Earth travels through space at 107,000 km/h as it orbits the Sun!",
        "🗺️ Olympus Mons, the solar system's largest volcano, is as wide as the entire country of France!",
        "⚛️ Billions of neutrinos from the Sun pass through your body every single second!",
        "🐕 The first animal sent to space was a dog named Laika, launched by the Soviet Union in 1957!",
        "🔭 The James Webb Space Telescope can observe galaxies that existed 13.5 billion years ago!",
        "📄 If you could fold a piece of paper 42 times, its thickness would reach from Earth to the Moon!",
    ];

    function getCurrentLang() {
        return localStorage.getItem('selectedLanguage') || 'en';
    }

    function getRandomFact() {
        const lang = getCurrentLang();
        const pool = lang === 'ar' ? factsAr : factsEn;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function createBanner() {
        if (document.getElementById('wow-fact-banner')) return;

        const lang = getCurrentLang();
        const isRtl = lang === 'ar';

        const banner = document.createElement('div');
        banner.id = 'wow-fact-banner';
        if (isRtl) banner.setAttribute('dir', 'rtl');

        banner.innerHTML = `
            <div class="wow-fact-inner">
                <span class="wow-fact-label">${isRtl ? '🚀 حقيقة كونية مذهلة' : '🚀 Cosmic Wow Fact'}</span>
                <p class="wow-fact-text">${getRandomFact()}</p>
            </div>
            <button class="wow-fact-close" aria-label="Close">&#x2715;</button>
        `;

        document.body.appendChild(banner);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                banner.classList.add('wow-fact-visible');
            });
        });

        banner.querySelector('.wow-fact-close').addEventListener('click', () => {
            dismissBanner(banner);
        });

        setTimeout(() => dismissBanner(banner), 12000);
    }

    function dismissBanner(banner) {
        if (!banner) return;
        banner.classList.remove('wow-fact-visible');
        banner.classList.add('wow-fact-hiding');
        setTimeout(() => {
            if (banner.parentNode) banner.parentNode.removeChild(banner);
        }, 500);
    }

    const INTERVAL_MS = 5 * 60 * 1000;

    setTimeout(function showFact() {
        createBanner();
        setTimeout(showFact, INTERVAL_MS);
    }, INTERVAL_MS);
})();
