const menu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.nav-menu')

menu.addEventListener('click', function(){
    menuList.classList.toggle('active');
    menu.classList.toggle('burger');
})
