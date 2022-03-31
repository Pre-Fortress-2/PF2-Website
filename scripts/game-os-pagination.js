
// Declarations to shorten referencing later.
const btn_win_select = document.getElementById("btn_win_select");
const btn_mac_select = document.getElementById("btn_mac_select");
const btn_linux_select = document.getElementById("btn_linux_select");

const btn_win_dl = document.getElementById("btn_win_dl");
const btn_mac_dl = document.getElementById("btn_mac_dl");
const btn_linux_dl = document.getElementById("btn_linux_dl");

const btn_back = document.getElementById("btn_back");

// Back button that disables itself and current download buttons and displays select buttons
function backPage()
{
    btn_back.style.display = "none";

    btn_win_dl.style.display = "none";
    btn_mac_dl.style.display = "none";
    btn_linux_dl.style.display = "none";

    btn_win_select.style.display = "block";
    btn_mac_select.style.display = "block";
    btn_linux_select.style.display = "block";
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
    btn_win_dl.style.display = "block";
    showBackBtn()
}

function macSelect()
{
    btn_mac_dl.style.display = "block";
    showBackBtn()
}

function linuxSelect()
{
    btn_linux_dl.style.display = "block";
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
    window.open("https://yoinkysploinky.xyz");
}

function installLinux()
{
    window.open("https://c.tenor.com/eUOiCZiskd8AAAAC/monkey-spinning-holding-hands.gif");
}

// Hides all buttons except back button and then shows the detected option
window.onload = function() 
{

    btn_win_dl.style.display = "none";
    btn_mac_dl.style.display = "none";
    btn_linux_dl.style.display = "none";

    btn_win_select.style.display = "none";
    btn_mac_select.style.display = "none";
    btn_linux_select.style.display = "none";

    btn_back.style.display = "block";

    if( navigator.platform.includes("Win") )
    {
        btn_win_dl.style.display = "block";
    }
    if( navigator.platform.includes("Mac") )
    {
        btn_mac_dl.style.display = "block";
    }
    if( !navigator.platform.includes("Mac") && !navigator.platform.includes("Win") ) 
    {
        btn_mac_dl.style.display = "block";
    }
};
