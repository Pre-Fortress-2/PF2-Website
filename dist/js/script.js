// Creates a new function that takes an id as a parameter
show = (divID) => {
    // Query select the wanted area
    let x = document.getElementById(divID);
    // If the div has display none, add display block, else add display none 
    x.style.display === 'none' ? x.style.display = 'block' : x.style.display = 'none';
}