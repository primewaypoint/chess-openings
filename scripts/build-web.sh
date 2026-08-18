#!/bin/bash
set -e
# Builds the hosted web/PWA copy of the app into docs/, alongside the landing
# page, so GitHub Pages serves BOTH:
#   docs/index.html      -> the landing page (primewaypoint.github.io/chess-openings/)
#   docs/app/            -> the live app / PWA  (.../chess-openings/app/)
#   docs/assets/         -> shared assets (referenced by the app as ../assets/)
# Run this before publishing whenever renderer/ or assets/ change.

DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"

echo "→ Syncing app into docs/app ..."
rm -rf docs/app docs/assets
mkdir -p docs/app
cp renderer/*.html renderer/*.js renderer/*.css renderer/*.webmanifest docs/app/ 2>/dev/null || true
cp -R assets docs/assets

# Stamp a unique cache version into the deployed service worker so every build
# invalidates the old PWA cache and users get the update on next launch.
VER=$(grep -o '"version"[^,]*' package.json | head -1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
STAMP="chessopenings-${VER}-$(date +%Y%m%d%H%M%S)"
sed -i '' "s/^const CACHE_VERSION = .*/const CACHE_VERSION = '${STAMP}';/" docs/app/service-worker.js
echo "  service worker cache: ${STAMP}"

echo "✓ Web build ready:"
echo "  docs/app/index.html  (+ $(ls docs/app | wc -l | tr -d ' ') files)"
echo "  docs/assets/         (shared assets)"
