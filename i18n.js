document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    applyLanguage(savedLang);

    // Language switcher event listener
    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) {
        langSwitcher.value = savedLang;
        langSwitcher.addEventListener('change', (e) => {
            const newLang = e.target.value;
            localStorage.setItem('selectedLanguage', newLang);
            applyLanguage(newLang);
        });
    }
});

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update switcher value if it exists (for persistence across pages)
    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) {
        langSwitcher.value = lang;
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Specific logic for elements with complex children or those that need to keep their links
    // e.g. buttons with <a> inside
    const buttons = document.querySelectorAll('button[data-i18n-btn]');
    buttons.forEach(btn => {
        const key = btn.getAttribute('data-i18n-btn');
        const link = btn.querySelector('a');
        if (link && translations[lang] && translations[lang][key]) {
            link.innerText = translations[lang][key];
        }
    });
}
