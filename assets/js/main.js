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

let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== Scroll Sections Active Link ================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== Change Background Header ================*/
function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 800) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Show Scroll Up ================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== Dark Light Theme ================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme) {
//if validation is fulfilled, we ask what the issue was to know if we activated 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //We save the theme and current icon
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})








