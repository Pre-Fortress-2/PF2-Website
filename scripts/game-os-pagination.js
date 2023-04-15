
// Declarations to shorten referencing later.
const btn_win_select = document.getElementById("btn_win_select");
const btn_mac_select = document.getElementById("btn_mac_select");
const btn_linux_select = document.getElementById("btn_linux_select");

const btn_win_dl = document.getElementById("btn_win_dl");
const btn_mac_dl = document.getElementById("btn_mac_dl");
const btn_linux_dl = document.getElementById("btn_linux_dl");

const btn_back = document.getElementById("btn_back");

const windows_only = document.getElementsByClassName("windows_only");
const mac_only = document.getElementsByClassName("mac_only")
const linux_only = document.getElementsByClassName("linux_only")
const all_versions = document.getElementById("all_versions");
const choose_game_area = document.getElementById("choose-game-area");

const first_mirror = "https://github.com/Pre-Fortress-2/pf2/releases/"
const all_in_one = "https://github.com/Pre-Fortress-2/pf2/releases/"

const browser_hash = window.location.hash.split('#')[1];

var url = window.location.href;   


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

function mac_onlyRender(state)
{
    if (state == true){
        for (var i = 0; i < mac_only.length; i++) {
            mac_only[i].style.display = "block";
        }
    }
    if (state == false){
        for (var i = 0; i < mac_only.length; i++) {
            mac_only[i].style.display = "none";
        }
    }
}

function linux_onlyRender(state)
{
    if (state == true){
        for (var i = 0; i < linux_only.length; i++) {
            linux_only[i].style.display = "block";
        }
    }
    if (state == false){
        for (var i = 0; i < linux_only.length; i++) {
            linux_only[i].style.display = "none";
        }
    }
}

function backPage()
{
    
    window.history.pushState('Selection', 'Select OS', '/download/#list');

    btn_back.style.display = "none";

    btn_win_dl.style.display = "none";
    btn_mac_dl.style.display = "none";
    btn_linux_dl.style.display = "none";

    btn_win_select.style.display = "block";
    btn_mac_select.style.display = "block";
    btn_linux_select.style.display = "block";

    windows_onlyRender(false)
    mac_onlyRender(false)
    linux_onlyRender(false)

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

// Lets the user select the OS
function winSelect()
{   
    window.history.pushState('Windows OS', 'Chose Windows', '/download/#windows');

    btn_win_dl.style.display = "block";
    windows_onlyRender(true)
    all_versions.style.display = "block"
    showBackBtn()
}
function macSelect()
{
    window.history.pushState('macOS', 'Chose Mac', '/download/#mac');

    btn_mac_dl.style.display = "block";
    mac_onlyRender(true)
    all_versions.style.display = "block"
    showBackBtn()
}

function linuxSelect()
{
    window.history.pushState('Linux', 'Chose Linux', '/download/#linux');

    btn_linux_dl.style.display = "block";
    linux_onlyRender(true)
    all_versions.style.display = "block"
    showBackBtn()
}

// These functions actually take the user to the installation.
function installWin()
{
    window.open(all_in_one);
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
    backPage()

    if( navigator.userAgentData.platform.includes("Win")  ) 
    {
        winSelect()
    }
    if( navigator.userAgentData.platform.includes("Mac") )
    {
        macSelect()
    }
    if( !navigator.userAgentData.platform.includes("Mac") && !navigator.userAgentData.platform.includes("Win") ) 
    {
        linuxSelect()
    }

    if (browser_hash.toLowerCase() == "windows"){
        backPage()
        winSelect()
    }
    if (browser_hash.toLowerCase() == "mac"){
        backPage()
        macSelect()
    }
    if (browser_hash.toLowerCase() == "linux"){
        backPage()
        linuxSelect()
    }
    if (browser_hash.toLowerCase() == "list"){
        backPage()
    }
};
