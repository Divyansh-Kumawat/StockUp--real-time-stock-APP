#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🛠️ Building the application..."
npm run build

# Run type checks
echo "✅ Running type checks..."
npm run typecheck

echo "🎉 Deployment build completed successfully!"