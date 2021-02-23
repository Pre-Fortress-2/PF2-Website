show = (divID) => {
    let x = document.getElementById(divID);
    x.style.display === 'none' ? x.style.display = 'block' : x.style.display = 'none';
}