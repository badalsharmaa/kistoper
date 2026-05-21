#!/bin/bash

AGENT=$1

echo "========== TASK RUNNER =========="
echo "Agent: $AGENT"

TASK=$(python3 - <<PYTHON
import json

with open('tasks/tasks.json') as f:
    tasks = json.load(f)

for task in tasks:
    if task['agent'] == '$AGENT' and task['status'] == 'pending':
        print(task['id'])
        break
PYTHON
)

if [ -z "$TASK" ]; then
  echo "No pending tasks."
  exit 0
fi

TASK_TITLE=$(python3 - <<PYTHON
import json

with open('tasks/tasks.json') as f:
    tasks = json.load(f)

for task in tasks:
    if task['id'] == '$TASK':
        print(task['title'])
PYTHON
)

echo "Picked Task:"
echo "$TASK - $TASK_TITLE"

python3 - <<PYTHON
import json

with open('tasks/tasks.json') as f:
    tasks = json.load(f)

for task in tasks:
    if task['id'] == '$TASK':
        task['status'] = 'running'

with open('tasks/tasks.json', 'w') as f:
    json.dump(tasks, f, indent=2)
PYTHON

echo "{\"event\":\"TASK_STARTED\",\"task\":\"$TASK\",\"agent\":\"$AGENT\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "[RUNNING TASK]"
sleep 2

python3 - <<PYTHON
import json

with open('tasks/tasks.json') as f:
    tasks = json.load(f)

for task in tasks:
    if task['id'] == '$TASK':
        task['status'] = 'completed'

with open('tasks/tasks.json', 'w') as f:
    json.dump(tasks, f, indent=2)
PYTHON

echo "{\"event\":\"TASK_COMPLETED\",\"task\":\"$TASK\",\"agent\":\"$AGENT\",\"time\":\"$(date)\"}" >> events/events.jsonl

echo "Task completed."
