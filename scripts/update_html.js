const fs = require('fs');
const path = require('path');

const files = [
    "whirlpool.html", "Technology.html", "Spacer.html", 
    "Planets/Venus.html", "Planets/Uranus.html", "Planets/sun.html", 
    "Planets/Saturn.html", "Planets/Pluto.html", "Planets/Neptune.html", 
    "Planets/Mercury.html", "Planets/Mars.html", "Planets/Jupiter.html", 
    "Planets/Earth.html", "milky-way.html", "index.html", 
    "gallery.html", "forum.html", "andromeda.html", 
    "Cosmos/WhiteHole.html", "Cosmos/BlackHole.html"
];

const toggleBtnHtml = `<button id="theme-toggle" class="theme-btn" aria-label="Toggle Dark/Light Mode"></button>`;

let updated = 0;
for (let file of files) {
    let filePath = path.join("d:/projects/Cubs in spaces", file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let initialContent = content;

        // Inject button if not present
        if (!content.includes('id="theme-toggle"')) {
            content = content.replace(/(\s*)<select id="language-switcher">/, `$1${toggleBtnHtml}$1<select id="language-switcher">`);
        }
        
        // Inject script tag if not present
        let depth = file.split('/').length - 1;
        let scriptPath = depth === 0 ? "theme.js" : "../theme.js";
        
        if (!content.includes(scriptPath) && !content.includes('theme.js"')) {
            content = content.replace(/<\/body>/, `<script src="${scriptPath}"></script>\n</body>`);
        }

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            updated++;
        }
    } else {
        console.log("File not found: " + file);
    }
}
console.log(`Updated ${updated} HTML files successfully.`);
