#!/bin/bash
cd "$(dirname "$0")"
if command -v node >/dev/null; then node server.js; else open public/index.html 2>/dev/null || xdg-open public/index.html; fi
