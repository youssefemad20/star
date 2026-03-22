"""
Move theme.js script tag from near </body> to inside <head>, for flash-free theming.
Also remove any duplication.
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
    rel = "theme.js" if depth == 0 else "../theme.js"
    script_tag = f'<script src="{rel}"></script>'

    with open(path, "r", encoding="utf-8") as fh:
        content = fh.read()

    original = content

    # Remove any existing theme.js script tags (there could be multiple)
    content = re.sub(r'\s*<script src="[./]*theme\.js"></script>', '', content)

    # Add it just before </head>
    content = content.replace('</head>', f'    {script_tag}\n</head>', 1)

    if content != original:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(content)
        updated += 1

print(f"Moved theme.js to <head> in {updated} files")
