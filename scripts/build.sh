#!/bin/bash
# Run from anywhere — always operate from the project root (this script's parent folder)
cd "$(dirname "$0")/.." || exit 1

echo "Installing dependencies..."
npm install

echo "Building for macOS..."
npx electron-builder --mac --arm64

echo "Done! Check the dist/ folder."
