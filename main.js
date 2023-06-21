window.addEventListener('scroll', onScroll)

const navigation = document.getElementById('navigation')

var points = document.getElementById("points");
var textMore = document.getElementById("textMore");

const downArrow = document.querySelector('.downArrow'); 
const upArrow = document.querySelector('.upArrow');

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(news)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
  
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEadAt = sectionTop + sectionHeight

    const sectionEndPassedTargetline = sectionEadAt <= targetLine


        sectionEndPassedTargetline

    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}
 
function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .cards,
    #news, 
    #news header, 
    #news .content,

    #events,
    #events header,
    #events .content,

    #contact,
    #contact header,
    #contact .content,
    #contact .col-b`);

function readMore(){

    if(points.style.display === "none"){
        downArrow.classList.add('hide');
        textMore.style.display = "none";
        upArrow.classList.remove('hide');
             
    } else {
        textMore.style.display = "inline";
        upArrow.classList.remove('hide');
        downArrow.classList.add('hide');
    }

}

function readLess(){
    downArrow.classList.remove('hide');
    textMore.style.display = "none";
    upArrow.classList.add('hide');
}