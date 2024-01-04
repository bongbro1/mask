const menu_icon = document.querySelector('.js_menu_bar')
const menu_mobile = document.querySelector('.js_menuMobile')
/* show, show menu */
menu_icon.addEventListener('click', function (){
    if (!menu_mobile.classList.contains('open')) {
        menu_icon.classList.replace('fa-bars', 'fa-xmark')
        menu_mobile.classList.add('open');
    }
    else if (menu_mobile.classList.contains('open')) {
        menu_icon.classList.replace('fa-xmark', 'fa-bars')
        menu_mobile.classList.remove('open')
    }
})