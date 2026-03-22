"""
Add anti-flash inline <script> to all html <head> sections,
so the correct theme is applied before the page renders.
"""
import os
import re

ANTI_FLASH = """<script>if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light-mode-pre')}</script>"""

# The trick: we also set light-mode on <html> pre-load, 
# so theme.js only needs to manage <body>.
# Better: just add light-mode to <body> via JS in <head>

ANTI_FLASH = """<script>if(localStorage.getItem('theme')==='light'){document.documentElement.style.setProperty('visibility','hidden');}</script>"""

# Actually the cleanest approach: put inline script in head that adds class to body
ANTI_FLASH = '<script>!function(){var t=localStorage.getItem("theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}();</script>'

base_dir = r"d:\projects\Cubs in spaces"

files = [
    "whirlpool.html", "Technology.html", "Spacer.html",
    "Planets/Venus.html", "Planets/Uranus.html", "Planets/sun.html",
    "Planets/Saturn.html", "Planets/Pluto.html", "Planets/Neptune.html",
    "Planets/Mercury.html", "Planets/Mars.html", "Planets/Jupiter.html",
    "Planets/Earth.html", "milky-way.html", "index.html",
    "gallery.html", "forum.html", "andromeda.html",
    "Cosmos/WhiteHole.html", "Cosmos/BlackHole.html"
]

updated = 0
for f in files:
    path = os.path.join(base_dir, f.replace("/", "\\"))
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as fh:
            content = fh.read()
        if ANTI_FLASH not in content and 'data-theme' not in content:
            content = content.replace('<head>', '<head>\n    ' + ANTI_FLASH, 1)
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(content)
            updated += 1

print(f"Added anti-flash script to {updated} files")
