#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Building for macOS..."
npx electron-builder --mac --arm64

echo "Done! Check the dist/ folder."
