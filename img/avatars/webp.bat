@echo off
FOR %%i IN (*.png) DO cwebp -q 100 -m 6 %%i -o %%~ni.webp