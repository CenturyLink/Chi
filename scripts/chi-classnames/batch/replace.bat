@echo off
setlocal enableDelayedExpansion
set "PROJECT_SRC=path/to/project/folder"

for /f "tokens=1,2 delims=:" %%i in (classes.txt) do (
   for /f "delims=" %%G in ('findstr /M /nrc:"[^a-zA-Z0-9]%%i[^a-zA-Z0-9]" /M /nrc:"[^a-zA-Z0-9]%%i$" /S %PROJECT_SRC%/*') do (
      powershell -Command "(gc %%G) -replace '%%i', '%%j' | Out-File -encoding ASCII %%G"
   )

   echo %%i %%j
)

pause
