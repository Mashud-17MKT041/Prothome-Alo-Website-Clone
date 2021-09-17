
// language changing area

const bangla = document.querySelector(".sub-language");
const banglaAngel = document.querySelector(".sub-language i");

bangla.addEventListener('mouseover', function () {
    const wraperOther = document.querySelector(".wrapr-other");
    wraperOther.classList.add("display");
    banglaAngel.classList.remove("fa-angle-down");
    banglaAngel.classList.add("fa-angle-up");
});

bangla.addEventListener('mouseout', function () {
    const wraperOther = document.querySelector(".wrapr-other");
    wraperOther.classList.remove("display");
    banglaAngel.classList.add("fa-angle-down");
    banglaAngel.classList.remove("fa-angle-up");
});

// scroll up and down system

const head = document.querySelector('.header');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
	if (preScroll < currentScroll) {
		head.classList.add('hide');
	}
	
	else {
		head.classList.remove('hide');
	}
	
	preScroll = currentScroll;
});


// bishes khobor area
/*
const sukhobor = document.querySelector(".sukhobor");
const pothito = document.querySelector(".pothito");
const alochito = document.querySelector(".alochito");
const bishesLeftActive = document.querySelector(".bishes-left");

pothito.addEventListener('click', function (){
    sukhobor.classList.remove('active');
    alochito.classList.remove("active");
    pothito.classList.add("active");
    // bishesLeftActive.classList.remove("active");
    // bishesLeftActive.classList.add("active");

    
});

alochito.addEventListener('click', function (){
    pothito.classList.remove('active');
    sukhobor.classList.remove('active');
    alochito.classList.add("active");
    bishesLeftActive.classList.add("block");
    bishesLeftActive.classList.remove("block");
    
    
});

sukhobor.addEventListener('click', function (){
    pothito.classList.remove('active');
    alochito.classList.remove("active");
    sukhobor.classList.add('active');
    // bishesLeftActive.classList.remove("active");
    // bishesLeftActive.classList.add("active");

    
});*/


/* ---------bishes khobor area from the inspiration of glassmorphism website----------- */

const bishesLeftHeading = document.querySelector('.bishes-left-heading'),
bishesSongbad = document.querySelector('.bishes-songbad');

bishesLeftHeading.addEventListener("click", (e) => {
    if(e.target.classList.contains('khobor') && !e.target.classList.contains('active')){
        bishesLeftHeading.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        bishesSongbad.querySelector(".bishes-left-heading span.active::before").classList.remove("active");
        bishesSongbad.querySelector(target).classList.add("active");
    };
});



// hamburger menu area


const Hamburger = document.querySelector(".fa-bars");
const crossHamburger = document.querySelector('.fa-times-circle');
const HamburgerSidebar = document.querySelector('.hamburger-sideBar')
const wholeWrap = document.querySelector('.whole-wrap');

Hamburger.addEventListener('click', function (){
    HamburgerSidebar.classList.add('active');
});

crossHamburger.addEventListener('click', function (){
    HamburgerSidebar.classList.remove('active');
});

wholeWrap.addEventListener('click', function (){
    HamburgerSidebar.classList.remove('active');
});




// hamburger attribute active

let ul = document.querySelector('.ulvi');
let li = document.querySelectorAll('a');

li.forEach(el => {
	el.addEventListener('click', function(){
		ul.querySelector('.active').classList.remove('active');
		el.classList.add('active');
	});
});


