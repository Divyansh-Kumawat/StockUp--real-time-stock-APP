#!/bin/bash

# Print Node and npm versions
echo "Node version:"
node -v
echo "NPM version:"
npm -v

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi