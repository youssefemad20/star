import os
import re

files = [
    "whirlpool.html", "Technology.html", "Spacer.html", 
    "Planets/Venus.html", "Planets/Uranus.html", "Planets/sun.html", 
    "Planets/Saturn.html", "Planets/Pluto.html", "Planets/Neptune.html", 
    "Planets/Mercury.html", "Planets/Mars.html", "Planets/Jupiter.html", 
    "Planets/Earth.html", "milky-way.html", "index.html", 
    "gallery.html", "forum.html", "andromeda.html", 
    "Cosmos/WhiteHole.html", "Cosmos/BlackHole.html"
]

toggleBtnHtml = '<button id="theme-toggle" class="theme-btn" aria-label="Toggle Dark/Light Mode"></button>'

base_dir = r"d:\projects\Cubs in spaces"
updated = 0

for file in files:
    file_path = os.path.join(base_dir, file.replace("/", "\\"))
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        initial = content
        
        if 'id="theme-toggle"' not in content:
            # insert before language-switcher
            content = re.sub(
                r'([ \t]*)<select id="language-switcher">', 
                r'\1' + toggleBtnHtml + r'\n\1<select id="language-switcher">', 
                content
            )
        
        depth = file.count('/')
        script_path = "theme.js" if depth == 0 else "../theme.js"
        
        if 'theme.js"' not in content:
            # find last </body> and replace it
            content = re.sub(r'</body>', f'<script src="{script_path}"></script>\n</body>', content)
            
        if content != initial:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            updated += 1
    else:
        print(f"Missing: {file_path}")

print(f"Updated {updated} files")
