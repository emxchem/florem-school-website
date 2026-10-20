@echo off
cd /d "%~dp0"
npm run dev -- --host localhost --port 5173 > dev.out 2>&1
