
echo Compiling Website
start npm run build

timeout /t 30

echo Fixing Search Index

"%cd%/LUA/luajit.exe" "%cd%/LUA/scripts/main.lua" "%cd%/LUA/scripts/"

pause
