let sideBar = document.getElementById('sideBar');
let open = document.getElementById('open');
let close = document.getElementById('close');
open.addEventListener('click', () => {
    sideBar.classList.add('active');
    open.classList.add('hide');
});
close.addEventListener('click', () => {
    sideBar.classList.remove('active');
    open.classList.remove('hide');
});
