@echo off
title Scholara Demo
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Opening the demo directly in your browser...
  start "" "%~dp0public\index.html"
  pause
  exit /b
)
node server.js
pause
