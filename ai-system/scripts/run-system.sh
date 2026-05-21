#!/bin/bash

clear

echo "====================================="
echo " AI MULTI-AGENT OPERATING SYSTEM"
echo "====================================="

./scripts/manager.sh
echo ""

./scripts/frontend.sh
echo ""

./scripts/backend.sh
echo ""

./scripts/qa.sh
echo ""

echo "====================================="
echo " SYSTEM RUN COMPLETE"
echo "====================================="
