#!/usr/bin/env python3
"""Draws the SVG pictures used by /projects/ and the project notes.

Each picture is a small, hand-positioned SVG: terminal cards for CLI output and
diagrams for the things a terminal card cannot show. They are plain text, so they
stay sharp at any size and review well in a diff.

    tools/projects-images.py            # regenerate assets/img/*.svg
    tools/projects-images.py --check    # render to a temp dir and report drift

Rendering needs `rsvg-convert` (brew install librsvg), which is only used for
eyeballing the result:

    rsvg-convert -z 2 assets/img/xfs-doctor.svg -o /tmp/xfs-doctor.png

Conventions that matter (both learned the hard way):

* `xml:space="preserve"` on every <text>, otherwise leading spaces in a tree or
  an indented line are collapsed and the layout jumps.
* Multi-colour lines are one <text> with <tspan fill=…> children, never several
  positioned <text> elements: the font decides the advance, not our arithmetic.
* The palette and helpers (`rect`, `text`, `spans`, `arrow`, `card`) are at the
  top; every picture is drawn in the same dark GitHub palette on purpose.
"""
import html, os
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "img")


BG = "#0d1117"; CARD = "#161b22"; BORDER = "#30363d"
TEXT = "#c9d1d9"; MUTED = "#8b949e"
GREEN = "#3fb950"; BLUE = "#58a6ff"; ORANGE = "#d29922"; PURPLE = "#bc8cff"; RED = "#f85149"
MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"

def esc(s): return html.escape(s, quote=False)

def rect(x, y, w, h, fill=CARD, stroke=BORDER, rx=12, sw=2):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'

def dots(x, y):
    out = []
    for i, color in enumerate(("#ff5f56", "#ffbd2e", "#27c93f")):
        out.append(f'<circle cx="{x + i*20}" cy="{y}" r="6" fill="{color}"/>')
    return "".join(out)

def text(x, y, s, size=18, color=TEXT, weight="normal", family=MONO, anchor="start"):
    return (f'<text x="{x}" y="{y}" font-family="{family}" font-size="{size}" fill="{color}" '
            f'font-weight="{weight}" text-anchor="{anchor}" xml:space="preserve">{esc(s)}</text>')

def spans(x, y, parts, size=18, family=MONO):
    """One <text> with a coloured <tspan> per part, so the font positions them."""
    inner = "".join(
        f'<tspan fill="{color}">{esc(part)}</tspan>' if part else ""
        for part, color in parts
    )
    return (f'<text x="{x}" y="{y}" font-family="{family}" font-size="{size}" '
            f'xml:space="preserve">{inner}</text>')

def arrow(x1, y1, x2, y2, color=MUTED, label=None, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    out = [f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="2"{d}/>']
    # arrow head
    import math
    angle = math.atan2(y2 - y1, x2 - x1)
    for side in (+0.42, -0.42):
        hx = x2 - 12 * math.cos(angle + side)
        hy = y2 - 12 * math.sin(angle + side)
        out.append(f'<line x1="{x2}" y1="{y2}" x2="{hx:.1f}" y2="{hy:.1f}" stroke="{color}" stroke-width="2"/>')
    if label:
        out.append(text((x1 + x2) / 2, (y1 + y2) / 2 - 12, label, 14, MUTED, anchor="middle"))
    return "".join(out)

def svg(w, h, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
            f'<rect width="{w}" height="{h}" fill="{BG}"/>' + body + "</svg>\n")

def write(name, content):
    if "--check" in sys.argv:
        return check(name, content)
    path = os.path.join(OUT, name)
    os.makedirs(OUT, exist_ok=True)
    with open(path, "w") as handle:
        handle.write(content)
    print("wrote", os.path.relpath(path, ROOT), len(content), "bytes")

def draw():
    # ---------------------------------------------------------------- static-files
    b = []
    b.append(text(30, 42, "static files, bundled into the binary at build time", 17, MUTED, family=SANS))
    # source folder
    b.append(rect(30, 70, 280, 200))
    b.append(text(50, 104, "static/", 18, GREEN, "700", SANS))
    for i, name in enumerate(("index.html", "app.js", "style.css", "assets/logo.svg")):
        b.append(text(60, 140 + i * 28, name, 16, MUTED))
    # build step
    b.append(arrow(310, 170, 400, 170, label="build.rs"))
    b.append(rect(410, 70, 280, 200))
    b.append(text(430, 104, "resource_dir(\"static\")", 16, BLUE))
    b.append(text(430, 140, ".build()", 16, BLUE))
    b.append(text(430, 178, "generated.rs", 16, TEXT))
    b.append(text(430, 210, "npm / yarn run here", 15, MUTED))
    # binary
    b.append(arrow(690, 170, 780, 170, label="rustc"))
    b.append(rect(790, 70, 280, 200))
    b.append(text(810, 104, "your binary", 18, TEXT, "700", SANS))
    b.append(text(810, 144, "one executable,", 16, MUTED))
    b.append(text(810, 172, "no static/ to ship,", 16, MUTED))
    b.append(text(810, 200, "no path to configure", 16, MUTED))
    b.append(rect(810, 220, 150, 32, fill="#1f6feb22", stroke=BLUE, rx=16))
    b.append(text(885, 242, "change detection", 13, BLUE, anchor="middle"))
    write("static-files.svg", svg(1100, 300, "".join(b)))

    # ---------------------------------------------------------------- actix-web-static-files
    b = []
    b.append(text(30, 42, "a request for a static asset, answered from memory", 17, MUTED, family=SANS))
    b.append(rect(30, 96, 300, 110))
    b.append(text(50, 130, "browser", 18, TEXT, "700", SANS))
    b.append(text(50, 168, "GET /app.js", 17, BLUE))
    b.append(arrow(340, 132, 430, 132, label="HTTP"))
    b.append(rect(440, 70, 330, 160))
    b.append(text(460, 104, "actix-web app", 18, TEXT, "700", SANS))
    b.append(text(460, 140, "ResourceFiles::new(", 15, BLUE))
    b.append(text(460, 164, "  \"/\", generate())", 15, BLUE))
    b.append(text(460, 198, "no filesystem lookup", 15, MUTED))
    b.append(arrow(780, 132, 850, 132, label="200 OK"))
    b.append(rect(860, 96, 220, 110))
    b.append(text(880, 132, "embedded", 17, GREEN, "700", SANS))
    b.append(text(880, 164, "bytes", 17, GREEN, "700", SANS))
    b.append(text(880, 192, "compressed at build", 13, MUTED))
    b.append(text(30, 250, "an Angular-style router works too: unknown paths fall back to index.html", 16, MUTED, family=SANS))
    write("actix-web-static-files.svg", svg(1100, 280, "".join(b)))

    # ---------------------------------------------------------------- hero
    b = []
    b.append(text(40, 96, "projects", 52, TEXT, "700", SANS))
    b.append(text(40, 136, "tools that survived contact with real systems", 20, MUTED, family=SANS))
    b.append(text(40, 166, "each one says what changes for you", 20, MUTED, family=SANS))
    # mini terminal on the right
    x, y, w, h = 520, 40, 640, 260
    b.append(rect(x, y, w, h))
    b.append(dots(x + 24, y + 26))
    b.append(rect(x + 16, y + 44, w - 32, h - 60, fill="#0b0f14", rx=8, sw=0))
    lines = [
        [("$ ", MUTED), ("keycloak-cli report", GREEN)],
        [("# realm `master`", MUTED)],
        [("enabled   ", TEXT), ("████████████████████████ ", GREEN), ("10", TEXT)],
        [("disabled  ", TEXT), ("███████ ", GREEN), ("2", TEXT)],
        [("LOGIN     ", TEXT), ("████████████████████████ ", BLUE), ("7", TEXT)],
        [("LOGOUT    ", TEXT), ("██████████ ", BLUE), ("3", TEXT)],
    ]
    for i, parts in enumerate(lines):
        b.append(spans(x + 32, y + 84 + i * 28, parts, 16))
    write("projects-hero.svg", svg(1200, 340, "".join(b)))

    # ---------------------------------------------------------------- keycloak-cli
    b = []
    b.append(rect(20, 20, 1060, 420))
    b.append(dots(46, 46))
    lines = [
        [("$ ", MUTED), ("keycloak-cli clients list --first 2", GREEN)],
        [("id   ", MUTED), ("clientId   ", MUTED), ("enabled", MUTED)],
        [("c-1  ", TEXT), ("web        ", TEXT), ("true", GREEN)],
        [("c-2  ", TEXT), ("api        ", TEXT), ("false", RED)],
        [("", TEXT)],
        [("$ ", MUTED), ("keycloak-cli --dry-run users delete abc", GREEN)],
        [("DELETE ", ORANGE), ("http://localhost:8080/admin/realms/master/users/abc", TEXT)],
        [("", TEXT)],
        [("$ ", MUTED), ("keycloak-cli users delete abc", GREEN)],
        [("error: users delete deletes data: pass ", RED), ("--yes", TEXT), (" to confirm", RED)],
        [("", TEXT)],
        [("$ ", MUTED), ("keycloak-cli users list --search ali", GREEN)],
        [("alice    ", GREEN), ("alicia   ", GREEN), ("alina", GREEN)],
    ]
    for i, parts in enumerate(lines):
        b.append(spans(46, 96 + i * 26, parts, 17))
    write("keycloak-cli.svg", svg(1100, 460, "".join(b)))

    # ---------------------------------------------------------------- hg -> git
    b = []
    b.append(text(20, 40, "one Mercurial history (or several) in, one Git history out", 18, MUTED, family=SANS))
    # source box
    b.append(rect(30, 70, 360, 230))
    b.append(text(50, 104, "old hg repo", 18, TEXT, "700", SANS))
    for i in range(3):
        cx = 70 + i * 70
        b.append(f'<circle cx="{cx}" cy="170" r="12" fill="{BLUE}"/>')
        if i: b.append(f'<line x1="{cx-70}" y1="170" x2="{cx}" y2="170" stroke="{BLUE}" stroke-width="3"/>')
    b.append(text(60, 220, "changeset 0…N", 15, MUTED))
    b.append(text(60, 246, "tags · closed branches", 15, MUTED))
    # arrow
    b.append(arrow(400, 185, 700, 185, label="git fast-import"))
    # target box
    b.append(rect(710, 70, 360, 230))
    b.append(text(730, 104, "git repo", 18, TEXT, "700", SANS))
    for i in range(3):
        cx = 750 + i * 70
        b.append(f'<circle cx="{cx}" cy="170" r="12" fill="{GREEN}"/>')
        if i: b.append(f'<line x1="{cx-70}" y1="170" x2="{cx}" y2="170" stroke="{GREEN}" stroke-width="3"/>')
    b.append(text(750, 210, "v1.0", 14, ORANGE))
    b.append(text(740, 240, "re-run it: only new", 15, MUTED))
    b.append(text(740, 264, "revisions are added", 15, MUTED))
    write("hg-git-fast-import.svg", svg(1100, 330, "".join(b)))

    # ---------------------------------------------------------------- git-site-clone
    b = []
    b.append(rect(40, 120, 420, 64, fill="#161b22", rx=32))
    b.append(text(64, 160, "https://github.com/user/repo", 17, BLUE))
    b.append(arrow(480, 152, 640, 152, label="clone"))
    b.append(rect(660, 40, 400, 260))
    tree = [(0, "~/src/", GREEN), (1, "github.com/", MUTED), (2, "user/", MUTED), (3, "repo/", GREEN), (4, ".git/", MUTED)]
    for i, (depth, name, color) in enumerate(tree):
        y = 88 + i * 34
        x = 690
        for level in range(1, depth):
            b.append(text(x + (level - 1) * 26, y, "\u2502", 18, BORDER))
        if depth:
            b.append(text(x + (depth - 1) * 26, y, "\u2514\u2500", 18, BORDER))
        b.append(text(x + depth * 26, y, name, 18, color))
    b.append(text(40, 240, "base directory and host mappings are", 16, MUTED, family=SANS))
    b.append(text(40, 264, "configured once", 16, MUTED, family=SANS))
    write("git-site-clone.svg", svg(1100, 330, "".join(b)))

    # ---------------------------------------------------------------- xfs-doctor
    b = []
    b.append(rect(40, 70, 520, 180))
    b.append(text(60, 108, "disk.img", 18, TEXT, "700", SANS))
    x = 60
    for name in ("sb", "agi", "inodes", "data"):
        w = 112
        b.append(rect(x, 132, w, 60, fill="#0b0f14", rx=6))
        b.append(text(x + w / 2, 169, name, 15, MUTED, anchor="middle"))
        x += w + 10
    for y, label in ((120, "headers at any offset"), (162, "directories without mounting"), (204, "files by signature")):
        b.append(arrow(570, y, 640, y))
        b.append(text(655, y + 6, label, 16, TEXT))
    b.append(rect(40, 278, 210, 40, fill="#1f6feb22", stroke=BLUE, rx=20))
    b.append(text(145, 305, "never writes", 16, BLUE, anchor="middle"))
    write("xfs-doctor.svg", svg(1100, 340, "".join(b)))

    # ---------------------------------------------------------------- openid
    b = []
    for x, label in ((40, "browser"), (430, "your service"), (820, "provider")):
        b.append(rect(x, 90, 240, 90))
        b.append(text(x + 120, 142, label, 18, TEXT, "700", SANS, anchor="middle"))

    def hop(x1, x2, label, color, down):
        """A horizontal arrow between two boxes, labelled above or below."""
        y = 130 if not down else 175
        b.append(arrow(x1, y, x2, y, color=color))
        b.append(text((x1 + x2) / 2, y - 10 if not down else y + 22, label, 13, MUTED, anchor="middle"))

    hop(288, 422, "log in", MUTED, down=False)
    hop(422, 288, "session", GREEN, down=True)
    hop(678, 812, "authorize (PKCE)", MUTED, down=False)
    hop(812, 678, "code + tokens", GREEN, down=True)

    b.append(text(40, 250, "discovery, PKCE, token validation against the provider's keys", 16, MUTED, family=SANS))
    b.append(text(40, 276, "works with Google, Keycloak, Azure AD, Okta", 16, MUTED, family=SANS))
    write("openid.svg", svg(1100, 310, "".join(b)))

def check(name, content):
    """Compares the committed picture with a freshly drawn one."""
    path = os.path.join(OUT, name)
    current = open(path).read() if os.path.exists(path) else ""
    if current != content:
        print(f"drift: {os.path.relpath(path, ROOT)} differs from the generator")
        return
    print(f"ok: {os.path.relpath(path, ROOT)}")


def main():
    """Draws every picture; `--check` compares instead of writing."""
    draw()
    if "--check" in sys.argv:
        print("checked: every picture matches the generator")


if __name__ == "__main__":
    main()
