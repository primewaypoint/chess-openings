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

echo "→ A fazer push dos commits e tag..."
git push origin main
git push origin v1.5.3

echo "→ A criar release v1.5.3 no GitHub..."

RELEASE=$(curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/releases" \
  -d '{
    "tag_name": "v1.5.3",
    "name": "v1.5.3",
    "body": "## Bug fix\n\n**Fixed: the chessboard could be cut off at the bottom in a smaller (non-fullscreen) window.** The board now scales to always fit the visible area, in both Learn/Practice and Daily Review. Fullscreen is unchanged.\n\n---\n\n### First launch on macOS (Gatekeeper)\nIf you see *\"ChessOpenings is damaged\"* or *\"can'\''t be opened\"*:\n1. Open **Terminal**\n2. Run: `xattr -cr /Applications/ChessOpenings.app`\n3. Launch the app normally",
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

# ficheiro local (com versão)  →  nome do asset no GitHub (SEM versão, estável)
upload() {
  local FILE="$1"; local NAME="$2"
  echo "  • $NAME"
  curl -s -X POST \
    -H "Authorization: token $GH_TOKEN" \
    -H "Content-Type: application/octet-stream" \
    "$UPLOAD_URL?name=$NAME" \
    --data-binary @"$FILE" > /dev/null
}

upload "releases/v1.5.3/ChessOpenings-1.5.3-Mac-AppleSilicon.dmg" "ChessOpenings-Mac-AppleSilicon.dmg"
upload "releases/v1.5.3/ChessOpenings-1.5.3-Mac-Intel.dmg"        "ChessOpenings-Mac-Intel.dmg"
upload "releases/v1.5.3/ChessOpenings-1.5.3-Windows-Setup.exe"    "ChessOpenings-Windows-Setup.exe"

echo ""
echo "✓ v1.5.3 publicada em https://github.com/$REPO/releases/tag/v1.5.3"
echo "  Links diretos da landing page:"
echo "  https://github.com/$REPO/releases/latest/download/ChessOpenings-Mac-AppleSilicon.dmg"
echo "  https://github.com/$REPO/releases/latest/download/ChessOpenings-Mac-Intel.dmg"
echo "  https://github.com/$REPO/releases/latest/download/ChessOpenings-Windows-Setup.exe"
