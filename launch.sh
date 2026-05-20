#!/bin/bash

# India Cash & Carry - Launch Script

set -e

echo "🚀 Starting India Cash & Carry setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed."
fi

# Check for .env file
if [ ! -f ".env" ] && [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: No .env or .env.local file found."
    if [ -f ".env.example" ]; then
        echo "📝 Creating .env.local from .env.example..."
        cp .env.example .env.local
        echo "💡 Please remember to set your GEMINI_API_KEY in .env.local"
    fi
fi

echo "✨ Setup complete! Starting development server..."
echo "🌐 App will be available at http://localhost:3000"

# Start the dev server
npm run dev
