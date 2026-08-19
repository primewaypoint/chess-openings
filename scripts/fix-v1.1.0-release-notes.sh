#!/bin/bash
set -e

REPO="primewaypoint/chess-openings"
RELEASE_ID="338739088"

if [ -z "$GH_TOKEN" ]; then
  echo "Erro: faz export GH_TOKEN=... primeiro"
  exit 1
fi

echo "→ A corrigir a nota de lançamento da v1.1.0 (265 openings → 84 openings, 265 lines)..."

RESPONSE=$(curl -s -X PATCH \
  -H "Authorization: token $GH_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/releases/$RELEASE_ID" \
  -d '{
    "body": "First public release.\n\n- Free, offline chess opening trainer\n- 84 openings, 265 lines\n- Mac (Apple Silicon + Intel) and Windows"
  }')

NEW_BODY=$(python3 -c "import sys,json; print(json.loads(sys.argv[1]).get('body','ERRO'))" "$RESPONSE")

echo "→ Novo texto:"
echo "$NEW_BODY"
echo ""
echo "✓ Corrigido em https://github.com/$REPO/releases/tag/v1.1.0"
