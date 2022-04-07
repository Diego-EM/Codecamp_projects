const button = document.getElementById('menu-button');
const menu = document.getElementById('nav-bar');

if (innerWidth <= 520) menu.hidden = true;
addEventListener('resize', () => {
    menu.hidden = (innerWidth <= 520) ? true : false;
});

button.addEventListener('click',toggleMenu);
menu.addEventListener('click',() => {
    if (innerWidth <= 520) toggleMenu();
});

function toggleMenu() {
    menu.hidden = (menu.hidden) ? false : true;
}