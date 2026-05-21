#!/bin/bash

echo "========== MANAGER LOOP =========="

echo "[1] Reading project state..."

cat memory/global/current-state.md 2>/dev/null

echo ""
echo "[2] Checking existing tasks..."

cat tasks/tasks.json

echo ""
echo "[3] Writing manager log..."

echo "[MANAGER] Run at $(date)" >> logs/manager.log

echo ""
echo "[4] Writing event..."

echo "{\"event\":\"MANAGER_LOOP\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo ""
echo "[5] Manager completed."
