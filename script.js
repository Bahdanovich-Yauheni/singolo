const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
   NAVIGATION.querySelectorAll('li').forEach(el => el.classList.remove('active'));
   event.target.closest('li').classList.add('active');
})

let slideIndex = 1;
showCurrentSlide(slideIndex);

function plusSlides(n){
    showCurrentSlide(slideIndex += n);
}

function showCurrentSlide(n){
    let i;
    let slide = document.getElementsByClassName('slider');
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none"}
    slide[slideIndex-1].style.display = "block"
}

const phone_button_horizontal = document.getElementsByClassName('phone-button-horizontal');

let index_vert = 0;
let index_hor = 0;

show_state_vert(index_vert);

function on_off_vert (n){
    show_state_vert(index_vert +=n);
}

function show_state_vert(n){
    let ph_ver = document.getElementsByClassName('black-screen-vertical');
    if (index_vert > 1){index_vert = 0}
    if (index_vert == 0){ph_ver[0].style.display = 'none'}
    if (index_vert == 1){ph_ver[0].style.display = 'block'}
}

show_state_hor(index_hor);

function on_off_hor (n){
    show_state_hor(index_hor +=n);
}

function show_state_hor(n){
    let ph_hor = document.getElementsByClassName('black-screen-horizontal');
    if (index_hor > 1){index_hor = 0}
    if (index_hor == 0){ph_hor[0].style.display = 'none'}
    if (index_hor == 1){ph_hor[0].style.display = 'block'}
}
