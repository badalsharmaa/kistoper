#!/bin/bash

echo "========== QA AGENT =========="

echo "[1] Reading QA memory..."
cat memory/agents/qa.md 2>/dev/null

echo "[2] Reading tasks..."
cat tasks/tasks.json

echo "[3] Logging execution..."
echo "[QA] Run at $(date)" >> logs/qa.log

echo "[4] Writing event..."
echo "{\"event\":\"QA_RUN\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "QA agent ready."
