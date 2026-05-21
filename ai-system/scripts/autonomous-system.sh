#!/bin/bash

clear

echo "========================================"
echo " AUTONOMOUS AI OPERATING SYSTEM"
echo "========================================"

echo ""
./scripts/manager-loop.sh

echo ""
./scripts/task-runner.sh frontend

echo ""
./scripts/task-runner.sh backend

echo ""
./scripts/task-runner.sh qa

echo ""
echo "========== FINAL TASK STATE =========="
cat tasks/tasks.json

echo ""
echo "========== RECENT EVENTS =========="
tail -10 events/events.jsonl

echo ""
echo "========================================"
echo " SYSTEM EXECUTION COMPLETE"
echo "========================================"
