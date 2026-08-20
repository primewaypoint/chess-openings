#!/bin/bash
set -e

REPO="primewaypoint/chess-openings"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"

if [ -z "$GH_TOKEN" ]; then
  echo "Erro: faz export GH_TOKEN=... primeiro"
  exit 1
fi

echo "→ A actualizar remote com token..."
git remote set-url origin "https://$GH_TOKEN@github.com/$REPO.git"

echo "→ A fazer push do commit e tag (isto também publica o site em docs/)..."
git push origin main
git push origin v1.6.0

echo "→ A criar release v1.6.0 no GitHub..."

RELEASE=$(curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/releases" \
  -d '{
    "tag_name": "v1.6.0",
    "name": "v1.6.0",
    "body": "## What'\''s new in v1.6.0\n\n**Never get stuck in Practice.** Fail the same move three times in a row and a gold \"Show me the move\" button appears — it names the move, arrows it on the board, and shows its explanation. You still play it yourself.\n\n**Daily Review is honest now.** The banner tells you exactly how many lines are due today (\"2 lines due today\"), and the review session only ever includes lines that are genuinely due — never padded with lines scheduled for next week. When nothing is due it says \"All caught up\", with an optional \"Review anyway\" for working ahead.\n\n**Bug fixes**\n- Practice controls (nav buttons, hint, reset) could get clipped out of reach once a line completed — fixed the underlying layout so the lines list scrolls internally instead of pushing controls off-screen.\n- The Daily Review glyph and the current-line dot could render with a visible notch on some screens — both are now clean, artifact-free shapes.\n\n---\n\n### First launch on macOS (Gatekeeper)\nIf you see *\"ChessOpenings is damaged\"* or *\"can'\''t be opened\"*:\n1. Open **Terminal**\n2. Run: `xattr -cr /Applications/ChessOpenings.app`\n3. Launch the app normally",
    "draft": false,
    "prerelease": false
  }')

UPLOAD_URL=$(python3 -c "import sys,json; d=json.loads(sys.argv[1]); print(d['upload_url'].split('{')[0])" "$RELEASE")

if [ -z "$UPLOAD_URL" ]; then
  echo "Erro ao criar release. Resposta:"
  echo "$RELEASE"
  exit 1
fi

echo "→ A fazer upload dos ficheiros (nomes ESTÁVEIS p/ os links diretos da landing page)..."

upload() {
  local FILE="$1"; local NAME="$2"
  echo "  • $NAME"
  curl -s -X POST \
    -H "Authorization: token $GH_TOKEN" \
    -H "Content-Type: application/octet-stream" \
    "$UPLOAD_URL?name=$NAME" \
    --data-binary @"$FILE" > /dev/null
}

upload "releases/v1.6.0/ChessOpenings-1.6.0-Mac-AppleSilicon.dmg" "ChessOpenings-Mac-AppleSilicon.dmg"
upload "releases/v1.6.0/ChessOpenings-1.6.0-Mac-Intel.dmg"        "ChessOpenings-Mac-Intel.dmg"
upload "releases/v1.6.0/ChessOpenings-1.6.0-Windows-Setup.exe"    "ChessOpenings-Windows-Setup.exe"

echo ""
echo "✓ v1.6.0 publicada em https://github.com/$REPO/releases/tag/v1.6.0"
echo "  Site (landing + app web) atualiza-se sozinho via GitHub Pages em 1-2 min:"
echo "  https://primewaypoint.github.io/chess-openings/"
echo "  https://primewaypoint.github.io/chess-openings/app/"
