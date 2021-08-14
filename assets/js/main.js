/* =================== MENU SHOW Y HIDDEN ========================= */
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

/*=====MENU SHOW ======*/
/* validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show_menu')
  })
}
