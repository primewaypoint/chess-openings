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

echo "→ A fazer push do commit e tag..."
git push origin main
git push origin v1.5.4

echo "→ A criar release v1.5.4 no GitHub..."

RELEASE=$(curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/releases" \
  -d '{
    "tag_name": "v1.5.4",
    "name": "v1.5.4",
    "body": "## Update\n\nThe desktop app badge now matches the website — dropped the \"Free\" wording next to the logo (Offline · Open source). No functional changes.\n\n---\n\n### First launch on macOS (Gatekeeper)\nIf you see *\"ChessOpenings is damaged\"* or *\"can'\''t be opened\"*:\n1. Open **Terminal**\n2. Run: `xattr -cr /Applications/ChessOpenings.app`\n3. Launch the app normally",
    "draft": false,
    "prerelease": false
  }')

UPLOAD_URL=$(python3 -c "import sys,json; d=json.loads(sys.argv[1]); print(d['upload_url'].split('{')[0])" "$RELEASE")

if [ -z "$UPLOAD_URL" ]; then
  echo "Erro ao criar release. Resposta:"
  echo "$RELEASE"
  exit 1
fi

echo "→ A fazer upload dos ficheiros..."

upload() {
  local FILE="$1"; local NAME="$2"
  echo "  • $NAME"
  curl -s -X POST \
    -H "Authorization: token $GH_TOKEN" \
    -H "Content-Type: application/octet-stream" \
    "$UPLOAD_URL?name=$NAME" \
    --data-binary @"$FILE" > /dev/null
}

upload "releases/v1.5.4/ChessOpenings-1.5.4-Mac-AppleSilicon.dmg" "ChessOpenings-Mac-AppleSilicon.dmg"
upload "releases/v1.5.4/ChessOpenings-1.5.4-Mac-Intel.dmg"        "ChessOpenings-Mac-Intel.dmg"
upload "releases/v1.5.4/ChessOpenings-1.5.4-Windows-Setup.exe"    "ChessOpenings-Windows-Setup.exe"

echo ""
echo "✓ v1.5.4 publicada em https://github.com/$REPO/releases/tag/v1.5.4"
