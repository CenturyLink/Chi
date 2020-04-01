@echo off
setlocal enableDelayedExpansion
set "PROJECT_SRC=path/to/project/folder"

for /f "tokens=1,2 delims=:" %%i in (classes.txt) do (
   for /f "delims=" %%G in ('findstr /M /nrc:"[^a-zA-Z0-9]%%i[^a-zA-Z0-9]" /M /nrc:"[^a-zA-Z0-9]%%i$" /S %PROJECT_SRC%/*') do (
      powershell -Command "(gc %%G) -replace '%%i', '%%j' | Out-File -encoding ASCII %%G"
   )

   echo %%i %%j
)

REM Picker

for /f "delims=" %%G in ('findstr /M /nrc:"[^a-zA-Z0-9]chi-picker[^a-zA-Z0-9_-]" /M /nrc:"[^a-zA-Z0-9]chi-picker$" /S %PROJECT_SRC%/*') do (
   powershell -Command "(gc %%G) -replace 'chi-picker', 'chi-picker__item' | Out-File -encoding ASCII %%G"
)

for /f "delims=" %%G in ('findstr /M /nrc:"[^a-zA-Z0-9][m|a]-picker[^a-zA-Z0-9_-]" /M /nrc:"[^a-zA-Z0-9][m|a]-picker$" /S chi/*') do (
   powershell -Command "(gc %%G) -replace 'm-picker', 'chi-picker' | Out-File -encoding ASCII %%G"
   powershell -Command "(gc %%G) -replace 'a-picker', 'chi-picker' | Out-File -encoding ASCII %%G"
)

echo chi-picker chi-picker__item

pause