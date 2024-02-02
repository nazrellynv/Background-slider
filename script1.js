const body=document.body;
const leftBtn=document.querySelector('.left');
const rightBtn=document.querySelector('.right');
const slides=document.querySelectorAll('.slide');


let activeSlide=0;
window.onload=function() {
    showInitialImage()
}
function showInitialImage() {
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage;

}
rightBtn.addEventListener("click", forward);

function forward() {
    activeSlide++;
    if (activeSlide>slides.length-1) {
        activeSlide=0;
    }
showBg();
activeSlides()
}

leftBtn.addEventListener("click", back);
function back() {
    activeSlide--;
    if(activeSlide<0) {
        activeSlide=slides.length-1;

    }
showBg();
activeSlides();
}


function showBg() {
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage;
}

function activeSlides() {
   slides.forEach((slide)  => slide.classList.remove('active'));
   slides[activeSlide].classList.add('active');
}