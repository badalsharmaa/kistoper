#!/bin/bash

echo "========== BACKEND AGENT =========="

echo "[1] Reading backend memory..."
cat memory/agents/backend.md 2>/dev/null

echo "[2] Reading tasks..."
cat tasks/tasks.json

echo "[3] Logging execution..."
echo "[BACKEND] Run at $(date)" >> logs/backend.log

echo "[4] Writing event..."
echo "{\"event\":\"BACKEND_RUN\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "Backend agent ready."
