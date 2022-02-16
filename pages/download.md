---
layout: default
title: "Download"
permalink: "/download/"
subject: "Download"
---

## Requirements
To play Pre-Fortress 2 you **must** have [Source SDK Base 2013 Multiplayer](steam://install/243750) installed.

## Optional Requirements
<ul class="windows_only">
    <li ><a href="https://www.7-zip.org/download.html" target="_blank">7-Zip</a> or another program capable of opening .7z files if you don't want to use the installer. Preferably <b>not</b> WinRAR.</li>
    <li><a href="steam://install/440">Team Fortress 2</a></li>
</ul>
<ul class="everyone_else" style="display: none">
    <li ><a href="https://www.7-zip.org/download.html" target="_blank">7-Zip</a> or another program capable of opening .7z files.</li>
    <li><a href="steam://install/440">Team Fortress 2</a></li>
</ul>

<h2>Downloads</h2>
<div class="windows_only">
<ul>
    <li><a href="https://drive.google.com/file/d/1amkUEPJ6CZDyamvPivDl0RlmU_6cUm6N/view" target="_blank">Google Drive - Installer</a></li>
</ul>

<p>If you're not on Windows or don't want to use an installer you can download one of the archives below:</p>
</div>

<div id="everyone_else">
    <ul>
        <li><a href="https://drive.google.com/file/d/1FUUfHo5NbxvCNsKDUiZVxU4x8q8NkaKk/view" target="_blank">Google Drive - 7z archive</a></li>
        <li><a href="https://mega.nz/file/9CxTXKyT#rqFGOpbJykJqFsBsxUeWaimJF82ygj-BbulEn2Yf8vI" target="_blank">Mega.nz - 7z archive</a></li>
        <li><a href="https://disk.yandex.ru/d/yegcFzbO1h9Duw" target="_blank">Yandex.ru - 7z archive</a></li>
    </ul>
</div>

## Installation
<div class="windows_only">
    <blockquote>If you're using the installer you can skip this as it handles everything.</blockquote>
    <br>
</div>

Open the archive in 7-Zip, navigate to the `sourcemods` folder and extract the `pf2` folder there.
The `sourcemods` folder can usually be found in these locations:
- Windows - **C:/Program Files (x86)/Steam/steamapps/sourcemods/**
- Linux - **~/.steam/steam/sourcemods/**
- Mac - **/Users/USERNAME/Library/Application Support/Steam/steamapps/sourcemods/**

A correct install should look something like this:
![](/assets/images/explorer_biG8aCMZFd.png)

## Post-Installation
You will need to restart Steam in order for the mod to appear in your library. To do that, open up Steam, press the `Steam` button at the top-left of the window then press `Exit`. Wait a moment for Steam to fully shutdown, then reopen Steam. 

If all went well you should see `Pre-Fortress 2: Open Beta` in your library

## Troubleshooting
If you need any help past this you can ask in the #help channel in our [Discord]({{site.discord-invite}}){:target="_blank"}

<script>
if( !navigator.platform.includes("Win") )
{
    var items = document.getElementsByClassName("windows_only");
    for (var i = 0; i < items.length; i++) {
       items[i].style.display = "none";
    }
    items = document.getElementsByClassName("everyone_else");
    for (var i = 0; i < items.length; i++) {
       items[i].style.display = "block";
    }
}
</script>