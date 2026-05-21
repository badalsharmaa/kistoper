#!/bin/bash

echo "========== FRONTEND AGENT =========="

echo "[1] Reading frontend memory..."
cat memory/agents/frontend.md 2>/dev/null

echo "[2] Reading tasks..."
cat tasks/tasks.json

echo "[3] Logging execution..."
echo "[FRONTEND] Run at $(date)" >> logs/frontend.log

echo "[4] Writing event..."
echo "{\"event\":\"FRONTEND_RUN\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "Frontend agent ready."
