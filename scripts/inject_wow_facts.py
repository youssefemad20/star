"""
Inject wow_facts.js script into all HTML files before </body>.
Adjust relative path based on folder depth.
"""
import os
import re

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
    if not os.path.exists(path):
        print(f"Missing: {path}")
        continue

    depth = f.count('/')
    rel = "wow_facts.js" if depth == 0 else "../wow_facts.js"
    script_tag = f'<script src="{rel}"></script>'

    with open(path, "r", encoding="utf-8") as fh:
        content = fh.read()

    if 'wow_facts.js' not in content:
        # Insert just before last </body>
        idx = content.rfind('</body>')
        if idx != -1:
            content = content[:idx] + script_tag + '\n' + content[idx:]
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(content)
            updated += 1

print(f"Injected wow_facts.js into {updated} files")
