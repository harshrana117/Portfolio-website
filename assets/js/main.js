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

/*======== Remove Menu Mobile =======*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav_menu');
  navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*======== ACCORDION SKILLS =======*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className
  for(i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close';
  }
  if(itemClass === 'skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((eL) => {
  eL.addEventListener('click', toggleSkills);
})

/*=============== QUALIFICATION TABS ================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

/*=============== Swiper Js ================*/

let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});




















