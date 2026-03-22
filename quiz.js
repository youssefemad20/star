const QUESTIONS = [
    {
        ar: "كم تستغرق الشمس للوصول للأرض من الضوء؟",
        en: "How long does it take for light from the Sun to reach Earth?",
        options: {
            ar: ["8 دقايق", "8 ثواني", "8 ساعات", "8 أيام"],
            en: ["8 minutes", "8 seconds", "8 hours", "8 days"]
        },
        correct: 0
    },
    {
        ar: "إيه أكبر كوكب في المجموعة الشمسية؟",
        en: "Which is the largest planet in the solar system?",
        options: {
            ar: ["المشتري", "زحل", "أورانوس", "نبتون"],
            en: ["Jupiter", "Saturn", "Uranus", "Neptune"]
        },
        correct: 0
    },
    {
        ar: "كام كوكب في المجموعة الشمسية؟",
        en: "How many planets are in the solar system?",
        options: {
            ar: ["8", "9", "7", "10"],
            en: ["8", "9", "7", "10"]
        },
        correct: 0
    },
    {
        ar: "إيه الكوكب الأقرب للشمس؟",
        en: "Which planet is closest to the Sun?",
        options: {
            ar: ["عطارد", "الزهرة", "المريخ", "الأرض"],
            en: ["Mercury", "Venus", "Mars", "Earth"]
        },
        correct: 0
    },
    {
        ar: "إيه الكوكب الأبعد عن الشمس؟",
        en: "Which planet is farthest from the Sun?",
        options: {
            ar: ["نبتون", "أورانوس", "بلوتو", "زحل"],
            en: ["Neptune", "Uranus", "Pluto", "Saturn"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم مجرتنا؟",
        en: "What is the name of our galaxy?",
        options: {
            ar: ["درب التبانة", "أندروميدا", "الدوامة", "المثلث"],
            en: ["The Milky Way", "Andromeda", "The Whirlpool", "Triangulum"]
        },
        correct: 0
    },
    {
        ar: "إيه أول حيوان راح الفضاء؟",
        en: "What was the first animal to go into space?",
        options: {
            ar: ["كلبة اسمها لايكا", "قرد اسمه هام", "قطة اسمها فيليسيت", "فأر اسمه ألبرت"],
            en: ["A dog named Laika", "A monkey named Ham", "A cat named Félicette", "A mouse named Albert"]
        },
        correct: 0
    },
    {
        ar: "مين أول إنسان مشي على القمر؟",
        en: "Who was the first human to walk on the Moon?",
        options: {
            ar: ["نيل أرمسترونج", "باز ألدرين", "يوري جاجارين", "جون جلين"],
            en: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"]
        },
        correct: 0
    },
    {
        ar: "في أنهي سنة وصل البشر للقمر؟",
        en: "In what year did humans first land on the Moon?",
        options: {
            ar: ["1969", "1965", "1972", "1959"],
            en: ["1969", "1965", "1972", "1959"]
        },
        correct: 0
    },
    {
        ar: "إيه أكتر كوكب أقمار؟",
        en: "Which planet has the most moons?",
        options: {
            ar: ["زحل (أكتر من 140 قمر)", "المشتري", "أورانوس", "نبتون"],
            en: ["Saturn (over 140 moons)", "Jupiter", "Uranus", "Neptune"]
        },
        correct: 0
    },
    {
        ar: "إيه الكوكب اللي بيدور على جنبه؟",
        en: "Which planet rotates on its side?",
        options: {
            ar: ["أورانوس", "نبتون", "زحل", "المشتري"],
            en: ["Uranus", "Neptune", "Saturn", "Jupiter"]
        },
        correct: 0
    },
    {
        ar: "إيه أحر كوكب في المجموعة الشمسية؟",
        en: "Which is the hottest planet in the solar system?",
        options: {
            ar: ["الزهرة", "عطارد", "المريخ", "المشتري"],
            en: ["Venus", "Mercury", "Mars", "Jupiter"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أكبر بركان في المجموعة الشمسية؟",
        en: "What is the name of the largest volcano in the solar system?",
        options: {
            ar: ["Olympus Mons", "Mauna Kea", "Vesuvius", "Tharsis"],
            en: ["Olympus Mons", "Mauna Kea", "Vesuvius", "Tharsis"]
        },
        correct: 0
    },
    {
        ar: "على أنهي كوكب Olympus Mons؟",
        en: "Which planet is Olympus Mons on?",
        options: {
            ar: ["المريخ", "الزهرة", "عطارد", "المشتري"],
            en: ["Mars", "Venus", "Mercury", "Jupiter"]
        },
        correct: 0
    },
    {
        ar: "إيه اللون بتاع غروب الشمس على المريخ؟",
        en: "What color is the sunset on Mars?",
        options: {
            ar: ["أزرق", "أحمر", "برتقالي", "أصفر"],
            en: ["Blue", "Red", "Orange", "Yellow"]
        },
        correct: 0
    },
    {
        ar: "كام نسبة كتلة الشمس من المجموعة الشمسية؟",
        en: "What percentage of the solar system's mass is the Sun?",
        options: {
            ar: ["99.86%", "75%", "50%", "90%"],
            en: ["99.86%", "75%", "50%", "90%"]
        },
        correct: 0
    },
    {
        ar: "إيه أصغر كوكب في المجموعة الشمسية؟",
        en: "Which is the smallest planet in the solar system?",
        options: {
            ar: ["عطارد", "المريخ", "الزهرة", "بلوتو"],
            en: ["Mercury", "Mars", "Venus", "Pluto"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم الثقب الأسود في وسط مجرتنا؟",
        en: "What is the name of the black hole at the center of our galaxy?",
        options: {
            ar: ["Sagittarius A*", "Andromeda X", "Cygnus A", "Messier 87"],
            en: ["Sagittarius A*", "Andromeda X", "Cygnus A", "Messier 87"]
        },
        correct: 0
    },
    {
        ar: "بكام سنة ضوئية أقرب نجم لينا غير الشمس؟",
        en: "How many light-years away is the nearest star other than the Sun?",
        options: {
            ar: ["4.2 سنة ضوئية", "10 سنين ضوئية", "100 سنة ضوئية", "1 سنة ضوئية"],
            en: ["4.2 light-years", "10 light-years", "100 light-years", "1 light-year"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أقرب نجم لينا غير الشمس؟",
        en: "What is the name of the nearest star to us besides the Sun?",
        options: {
            ar: ["Proxima Centauri", "Sirius", "Betelgeuse", "Vega"],
            en: ["Proxima Centauri", "Sirius", "Betelgeuse", "Vega"]
        },
        correct: 0
    },
    {
        ar: "إيه نوع مجرة درب التبانة؟",
        en: "What type of galaxy is the Milky Way?",
        options: {
            ar: ["حلزونية مستعرضة", "إهليلجية", "غير منتظمة", "حلزونية عادية"],
            en: ["Barred spiral", "Elliptical", "Irregular", "Normal spiral"]
        },
        correct: 0
    },
    {
        ar: "كام مجرة تقريباً في الكون المرئي؟",
        en: "Approximately how many galaxies are in the observable universe?",
        options: {
            ar: ["2 تريليون مجرة", "مليون مجرة", "مليار مجرة", "100 مليار مجرة"],
            en: ["2 trillion galaxies", "1 million galaxies", "1 billion galaxies", "100 billion galaxies"]
        },
        correct: 0
    },
    {
        ar: "إيه عمر الكون تقريباً؟",
        en: "Approximately how old is the universe?",
        options: {
            ar: ["13.8 مليار سنة", "4.5 مليار سنة", "6 مليار سنة", "20 مليار سنة"],
            en: ["13.8 billion years", "4.5 billion years", "6 billion years", "20 billion years"]
        },
        correct: 0
    },
    {
        ar: "مين أول إنسان راح الفضاء؟",
        en: "Who was the first human to go into space?",
        options: {
            ar: ["يوري جاجارين", "نيل أرمسترونج", "جون جلين", "آلان شيبرد"],
            en: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Alan Shepard"]
        },
        correct: 0
    },
    {
        ar: "في أنهي سنة راح يوري جاجارين الفضاء؟",
        en: "In what year did Yuri Gagarin go to space?",
        options: {
            ar: ["1961", "1957", "1969", "1965"],
            en: ["1961", "1957", "1969", "1965"]
        },
        correct: 0
    },
    {
        ar: "كام سرعة الضوء؟",
        en: "What is the speed of light?",
        options: {
            ar: ["300,000 كم/ثانية", "30,000 كم/ثانية", "3,000,000 كم/ثانية", "150,000 كم/ثانية"],
            en: ["300,000 km/s", "30,000 km/s", "3,000,000 km/s", "150,000 km/s"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أكبر قمر لزحل؟",
        en: "What is the name of Saturn's largest moon?",
        options: {
            ar: ["تيتان", "إيو", "إيروبا", "جانيميد"],
            en: ["Titan", "Io", "Europa", "Ganymede"]
        },
        correct: 0
    },
    {
        ar: "على أنهي كوكب أطول يوم؟",
        en: "Which planet has the longest day?",
        options: {
            ar: ["الزهرة", "المشتري", "زحل", "عطارد"],
            en: ["Venus", "Jupiter", "Saturn", "Mercury"]
        },
        correct: 0
    },
    {
        ar: "إيه المركبة الفضائية الأبعد عن الأرض؟",
        en: "Which spacecraft is farthest from Earth?",
        options: {
            ar: ["Voyager 1", "New Horizons", "Pioneer 10", "Cassini"],
            en: ["Voyager 1", "New Horizons", "Pioneer 10", "Cassini"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أول قمر صناعي في التاريخ؟",
        en: "What was the name of the first artificial satellite?",
        options: {
            ar: ["سبوتنيك 1", "إكسبلورر 1", "فوستوك", "أبولو 1"],
            en: ["Sputnik 1", "Explorer 1", "Vostok", "Apollo 1"]
        },
        correct: 0
    },
    {
        ar: "كام قمر عند الأرض؟",
        en: "How many moons does Earth have?",
        options: {
            ar: ["1", "2", "3", "0"],
            en: ["1", "2", "3", "0"]
        },
        correct: 0
    },
    {
        ar: "إيه الغاز الأساسي في غلاف الزهرة الجوي؟",
        en: "What is the primary gas in Venus's atmosphere?",
        options: {
            ar: ["ثاني أكسيد الكربون", "الأكسجين", "النيتروجين", "الميثان"],
            en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"]
        },
        correct: 0
    },
    {
        ar: "كام دقيقة بياخد الضوء من الشمس للمريخ؟",
        en: "How many minutes does light take to travel from the Sun to Mars?",
        options: {
            ar: ["13 دقيقة", "8 دقايق", "20 دقيقة", "5 دقايق"],
            en: ["13 minutes", "8 minutes", "20 minutes", "5 minutes"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم التلسكوب اللي اتطلق سنة 1990؟",
        en: "What is the name of the telescope launched in 1990?",
        options: {
            ar: ["هابل", "جيمس ويب", "كبلر", "سبيتزر"],
            en: ["Hubble", "James Webb", "Kepler", "Spitzer"]
        },
        correct: 0
    },
    {
        ar: "على أنهي كوكب أقوى رياح في المجموعة الشمسية؟",
        en: "Which planet has the strongest winds in the solar system?",
        options: {
            ar: ["نبتون", "المشتري", "زحل", "أورانوس"],
            en: ["Neptune", "Jupiter", "Saturn", "Uranus"]
        },
        correct: 0
    },
    {
        ar: "إيه Betelgeuse؟",
        en: "What is Betelgeuse?",
        options: {
            ar: ["نجم عملاق أحمر", "ثقب أسود", "مجرة", "كوكب خارج المجموعة"],
            en: ["A red giant star", "A black hole", "A galaxy", "An exoplanet"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أكبر قمر للمشتري؟",
        en: "What is the name of Jupiter's largest moon?",
        options: {
            ar: ["جانيميد", "إيو", "إيروبا", "كاليستو"],
            en: ["Ganymede", "Io", "Europa", "Callisto"]
        },
        correct: 0
    },
    {
        ar: "كام سنة بياخد نبتون يكمل دورة حول الشمس؟",
        en: "How many years does Neptune take to orbit the Sun?",
        options: {
            ar: ["165 سنة", "84 سنة", "248 سنة", "12 سنة"],
            en: ["165 years", "84 years", "248 years", "12 years"]
        },
        correct: 0
    },
    {
        ar: "إيه العنصر الأكتر في الشمس؟",
        en: "What is the most abundant element in the Sun?",
        options: {
            ar: ["الهيدروجين", "الهيليوم", "الأكسجين", "الكربون"],
            en: ["Hydrogen", "Helium", "Oxygen", "Carbon"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أول مركبة هبطت على المريخ؟",
        en: "What was the name of the first spacecraft to land on Mars?",
        options: {
            ar: ["Viking 1", "Curiosity", "Perseverance", "Pathfinder"],
            en: ["Viking 1", "Curiosity", "Perseverance", "Pathfinder"]
        },
        correct: 0
    },
    {
        ar: "كام بعد الأرض عن الشمس تقريباً؟",
        en: "Approximately how far is Earth from the Sun?",
        options: {
            ar: ["150 مليون كيلومتر", "15 مليون كيلومتر", "1.5 مليار كيلومتر", "300 مليون كيلومتر"],
            en: ["150 million km", "15 million km", "1.5 billion km", "300 million km"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم العاصفة الكبيرة على المشتري؟",
        en: "What is the name of the great storm on Jupiter?",
        options: {
            ar: ["Great Red Spot", "Great Dark Spot", "Jupiter Storm", "Red Eye"],
            en: ["Great Red Spot", "Great Dark Spot", "Jupiter Storm", "Red Eye"]
        },
        correct: 0
    },
    {
        ar: "إيه المادة المجهولة اللي بتشكل 27% من الكون؟",
        en: "What is the unknown substance making up 27% of the universe?",
        options: {
            ar: ["المادة المظلمة", "الطاقة المظلمة", "المادة العادية", "البلازما"],
            en: ["Dark Matter", "Dark Energy", "Ordinary Matter", "Plasma"]
        },
        correct: 0
    },
    {
        ar: "بكام كيلومتر فوق الأرض بيبدأ الفضاء رسمياً؟",
        en: "How many kilometers above Earth does space officially begin?",
        options: {
            ar: ["100 كيلومتر", "1000 كيلومتر", "50 كيلومتر", "500 كيلومتر"],
            en: ["100 km", "1000 km", "50 km", "500 km"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم البعثة اللي أخدت أول صورة واضحة لبلوتو؟",
        en: "What was the mission that took the first clear image of Pluto?",
        options: {
            ar: ["New Horizons", "Voyager 2", "Cassini", "Juno"],
            en: ["New Horizons", "Voyager 2", "Cassini", "Juno"]
        },
        correct: 0
    },
    {
        ar: "كام وقت بياخد الـ ISS يكمل دورة حول الأرض؟",
        en: "How long does it take the ISS to orbit Earth?",
        options: {
            ar: ["90 دقيقة", "24 ساعة", "3 ساعات", "45 دقيقة"],
            en: ["90 minutes", "24 hours", "3 hours", "45 minutes"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أكبر حفرة نيزك على الأرض؟",
        en: "What is the name of the largest meteor crater on Earth?",
        options: {
            ar: ["Chicxulub", "Barringer", "Vredefort", "Sudbury"],
            en: ["Chicxulub", "Barringer", "Vredefort", "Sudbury"]
        },
        correct: 0
    },
    {
        ar: "على أنهي كوكب اكتشفوا دليل على وجود مياه قديمة؟",
        en: "On which planet was evidence of ancient water discovered?",
        options: {
            ar: ["المريخ", "الزهرة", "عطارد", "أورانوس"],
            en: ["Mars", "Venus", "Mercury", "Uranus"]
        },
        correct: 0
    },
    {
        ar: "إيه اسم أول امرأة راحت الفضاء؟",
        en: "What was the name of the first woman in space?",
        options: {
            ar: ["فالنتينا تيريشكوفا", "سالي رايد", "كريستا ماكوليف", "بيغي ويتسون"],
            en: ["Valentina Tereshkova", "Sally Ride", "Christa McAuliffe", "Peggy Whitson"]
        },
        correct: 0
    },
    {
        ar: "كام نجم تقريباً في مجرة درب التبانة؟",
        en: "Approximately how many stars are in the Milky Way?",
        options: {
            ar: ["100-400 مليار نجمة", "مليون نجمة", "مليار نجمة", "تريليون نجمة"],
            en: ["100–400 billion stars", "1 million stars", "1 billion stars", "1 trillion stars"]
        },
        correct: 0
    }
];

const TOTAL_QUIZ_QUESTIONS = 10;
const LABELS = ['A', 'B', 'C', 'D'];

let lang = 'en';
let sessionQuestions = [];
let sessionOrder = [];  // shuffled option indices per question
let currentIdx = 0;
let score = 0;
let answered = false;

function getLang() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pickQuestions() {
    const pool = shuffle([...QUESTIONS]);
    return pool.slice(0, TOTAL_QUIZ_QUESTIONS);
}

function buildShuffledOrder(q) {
    // Always keep options in original order but shuffle which index appears where
    const indices = [0, 1, 2, 3];
    return shuffle(indices);
}

function startQuiz() {
    lang = getLang();
    sessionQuestions = pickQuestions();
    sessionOrder = sessionQuestions.map(buildShuffledOrder);
    currentIdx = 0;
    score = 0;
    answered = false;
    document.getElementById('quiz-result').classList.remove('visible');
    document.getElementById('quiz-card').style.display = '';
    document.getElementById('quiz-progress-wrap').style.display = '';
    renderQuestion();
}

function renderQuestion() {
    answered = false;
    const q = sessionQuestions[currentIdx];
    const order = sessionOrder[currentIdx];

    document.getElementById('quiz-q-num').textContent =
        lang === 'ar' ? `سؤال ${currentIdx + 1} من ${TOTAL_QUIZ_QUESTIONS}` : `Question ${currentIdx + 1} of ${TOTAL_QUIZ_QUESTIONS}`;
    document.getElementById('quiz-q-text').textContent = q[lang === 'ar' ? 'ar' : 'en'];

    const fill = ((currentIdx) / TOTAL_QUIZ_QUESTIONS) * 100;
    document.getElementById('quiz-progress-fill').style.width = fill + '%';
    document.getElementById('quiz-progress-current').textContent = currentIdx + 1;

    const choicesEl = document.getElementById('quiz-choices');
    choicesEl.innerHTML = '';

    order.forEach((optIdx, displayPos) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-choice';
        btn.textContent = q.options[lang === 'ar' ? 'ar' : 'en'][optIdx];
        btn.dataset.optIdx = optIdx;
        btn.addEventListener('click', () => handleAnswer(btn, optIdx, q.correct));
        choicesEl.appendChild(btn);
    });

    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.classList.remove('visible');
    nextBtn.textContent = lang === 'ar' ? (currentIdx === TOTAL_QUIZ_QUESTIONS - 1 ? 'عرض النتيجة 🏆' : 'السؤال التالي ←') : (currentIdx === TOTAL_QUIZ_QUESTIONS - 1 ? 'Show Results 🏆' : 'Next Question →');
}

function handleAnswer(btn, selectedIdx, correctIdx) {
    if (answered) return;
    answered = true;

    const allBtns = document.querySelectorAll('.quiz-choice');
    allBtns.forEach(b => {
        b.disabled = true;
        const oIdx = parseInt(b.dataset.optIdx);
        if (oIdx === correctIdx) b.classList.add('correct');
        else if (b === btn && oIdx !== correctIdx) b.classList.add('wrong');
    });

    if (selectedIdx === correctIdx) score++;

    document.getElementById('quiz-next-btn').classList.add('visible');
}

function showResult() {
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('quiz-progress-wrap').style.display = 'none';

    const resultEl = document.getElementById('quiz-result');
    resultEl.classList.add('visible');

    document.getElementById('quiz-result-score').textContent = `${score}/${TOTAL_QUIZ_QUESTIONS}`;

    let trophy, label, msg;
    if (score === 10) {
        trophy = '🏆'; 
        label = lang === 'ar' ? 'مثالي!' : 'Perfect!';
        msg = lang === 'ar' ? 'أنت عبقري الفضاء! 10 من 10 — لا يصدّق!' : "Incredible! You got a perfect score. You're a space genius!";
    } else if (score >= 8) {
        trophy = '🌟'; 
        label = lang === 'ar' ? 'رائع!' : 'Amazing!';
        msg = lang === 'ar' ? 'أداء رائع جداً! أنت فيلسوف الكون.' : "Outstanding performance! You clearly love the cosmos.";
    } else if (score >= 6) {
        trophy = '⭐'; 
        label = lang === 'ar' ? 'ممتاز!' : 'Excellent!';
        msg = lang === 'ar' ? 'ممتاز! معلوماتك الفضائية قوية جداً.' : "Excellent! You have a strong knowledge of space.";
    } else if (score >= 4) {
        trophy = '👍'; 
        label = lang === 'ar' ? 'جيد!' : 'Good!';
        msg = lang === 'ar' ? 'أداء جيد! في المزيد لتتعلمه في الكون.' : "Good effort! The universe still has more secrets to share.";
    } else {
        trophy = '🔭'; 
        label = lang === 'ar' ? 'استمر في الاستكشاف!' : 'Keep Exploring!';
        msg = lang === 'ar' ? 'البداية دائماً صعبة — استكشف الموقع وحاول تاني!' : "Keep exploring! Browse the site to learn more and try again.";
    }

    document.getElementById('quiz-trophy').textContent = trophy;
    document.getElementById('quiz-result-label').textContent = label;
    document.getElementById('quiz-result-msg').textContent = msg;
    document.getElementById('quiz-retry-btn').textContent = lang === 'ar' ? 'حاول تاني 🔄' : 'Try Again 🔄';
}

document.addEventListener('DOMContentLoaded', () => {
    startQuiz();

    document.getElementById('quiz-next-btn').addEventListener('click', () => {
        currentIdx++;
        if (currentIdx < TOTAL_QUIZ_QUESTIONS) {
            renderQuestion();
        } else {
            showResult();
        }
    });

    document.getElementById('quiz-retry-btn').addEventListener('click', () => {
        startQuiz();
    });
});
