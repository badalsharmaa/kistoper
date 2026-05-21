#!/bin/bash

echo "========== MANAGER AGENT =========="

echo "[1] Reading memory..."
find memory -type f | while read file; do
  cat "$file" > /dev/null
done

echo "[2] Reading tasks..."
cat tasks/tasks.json

echo "[3] Scanning workspace..."
find ../workspace -type f 2>/dev/null

echo "[4] Updating current state..."

cat > memory/global/current-state.md <<STATE
# Current State

## Status
Operational orchestration system initialized.

## Active Systems
- Memory System
- Task Queue
- Event System
- Logging
- Checkpointing
- Agent Runtime

## Next Objective
Implement autonomous execution loop.
STATE

echo "[5] Writing event..."

echo "{\"event\":\"MANAGER_RUN\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "[6] Done."
