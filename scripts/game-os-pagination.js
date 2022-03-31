
// Declarations to shorten referencing later.
const btn_win_select = document.getElementById("btn_win_select");
const btn_mac_select = document.getElementById("btn_mac_select");
const btn_linux_select = document.getElementById("btn_linux_select");

const btn_win_dl = document.getElementById("btn_win_dl");
const btn_mac_dl = document.getElementById("btn_mac_dl");
const btn_linux_dl = document.getElementById("btn_linux_dl");

const btn_back = document.getElementById("btn_back");

const windows_only = document.getElementsByClassName("windows_only");
const everyone_else = document.getElementById("everyone_else");
const all_versions = document.getElementById("all_versions");
const choose_game_area = document.getElementById("choose-game-area");


const first_mirror = "https://drive.google.com/file/d/1FUUfHo5NbxvCNsKDUiZVxU4x8q8NkaKk/view"

const browser_hash = window.location.hash.split('#')[1].toLowerCase();

// Back button that disables itself and current download buttons and displays select buttons

function windows_onlyRender(state)
{
    if (state == true){
        for (var i = 0; i < windows_only.length; i++) {
            windows_only[i].style.display = "block";
        }
    }
    if (state == false){
        for (var i = 0; i < windows_only.length; i++) {
            windows_only[i].style.display = "none";
        }
    }
}

function backPage()
{
    choose_game_area.style.height = "50em"
    btn_back.style.top = "70%";

    btn_back.style.display = "none";

    btn_win_dl.style.display = "none";
    btn_mac_dl.style.display = "none";
    btn_linux_dl.style.display = "none";

    btn_win_select.style.display = "block";
    btn_mac_select.style.display = "block";
    btn_linux_select.style.display = "block";

    windows_onlyRender(false)
    everyone_else.style.display = "none"
    all_versions.style.display = "none"
}

// Called when an OS is selected
function showBackBtn()
{
    btn_back.style.display = "block";
    
    btn_win_select.style.display = "none";
    btn_mac_select.style.display = "none";
    btn_linux_select.style.display = "none";
}
function everyoneElse()
{
    btn_back.style.top = "82%";
    choose_game_area.style.height = "70em"
    everyone_else.style.display = "block";
    all_versions.style.display = "block"
    
}
// Lets the user select the OS
function winSelect()
{
    btn_win_dl.style.display = "block";
    windows_onlyRender(true)
    all_versions.style.display = "block"
    showBackBtn()
}
function macSelect()
{
    btn_mac_dl.style.display = "block";
    everyoneElse();
    showBackBtn()
}

function linuxSelect()
{
    btn_linux_dl.style.display = "block";
    everyoneElse();
    showBackBtn()
}

// These functions actually take the user to the installation.
// TODO flesh out installation instructions.
function installWin()
{
    window.open("https://drive.google.com/file/d/1amkUEPJ6CZDyamvPivDl0RlmU_6cUm6N/view");
}

function installMac()
{
    window.open(first_mirror);
}

function installLinux()
{
    window.open(first_mirror);
}

// Hides all buttons except back button and then shows the detected option
window.onload = function() 
{

    if (browser_hash == "windows"){
        backPage()
        winSelect()
        return
    }
    if (browser_hash == "mac"){
        backPage()
        macSelect()
        return
    }
    if (browser_hash == "linux"){
        backPage()
        linuxSelect()
        return
    }
   
    backPage()
    if( navigator.platform.includes("Win")  ) 
    {
        winSelect()
    }
    if( navigator.platform.includes("Mac") )
    {
        macSelect()
    }
    if( !navigator.platform.includes("Mac") && !navigator.platform.includes("Win") ) 
    {
        linuxSelect()
    }
};
