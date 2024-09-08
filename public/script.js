let sideBar = document.getElementById('sideBar');
let menuBtn = document.querySelector('.menuBtn');
let headerCol3Mobile = document.getElementById('headerCol3Mobile');
let open = false;

function showMenu(){
    if (!open) {
        open = !open
        sideBar.style.display = "flex";
        headerCol3Mobile.style.display = "none";
    } else {
        if (open == true) {
            open = false
            sideBar.style.display = "none";
            headerCol3Mobile.style.display = "flex";
        }
    }
}
