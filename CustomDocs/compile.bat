
echo Compiling Website
start npm run build

timeout /t 30

echo Fixing Search Index

"%cd%/LUA/luajit.exe" "%cd%/LUA/scripts/fix_search.lua" "%cd%/LUA/scripts/"

pause
