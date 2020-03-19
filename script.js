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

const tabs = document.getElementById('tabs');
tabs.addEventListener('click', switchTab)


let list = document.querySelectorAll('.portfolio-pic');
function switchTab(event){
    tabs.querySelectorAll('input').forEach(el => el.classList.remove('button-checked'));
    event.target.classList.add('button-checked');
    //-------------------this works--------------------------------//
    // let rnd_num = Math.floor(Math.random() * list.length);
    //     if (rnd_num == 6){rnd_num = 3};
    // list[rnd_num].parentNode.insertBefore(list[rnd_num], list[list.length - rnd_num]);
    //-----------------------------------------------------------------------------------------
    
    //----------------------this works really nice-------------------------
    let currentIndex = list.length - 1, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        list[currentIndex].parentNode.append(list[randomIndex]);
        currentIndex -= 1;}}
    //-----------------------------------------------------------------------




const pics = document.getElementById('pics');
pics.querySelectorAll('img').forEach(el => el.classList.remove('pic-active'));
pics.addEventListener('click', add_pic_border);

function add_pic_border(event){
    if (event.target.classList.contains ('pic-active')){
        event.target.classList.remove('pic-active');}
        else {
            pics.querySelectorAll('img').forEach(el => el.classList.remove('pic-active'));
            event.target.classList.add('pic-active');}
}


document.querySelector('.form__submit').addEventListener('click', showModalWindow);

  function showModalWindow(event) {
    event.preventDefault();
    document.getElementById('modalWindow').style.display = "flex";
    let quoteSubject = document.sending_form.elements[2].value;
    let quoteDescription = document.sending_form.elements[3].value;
    if(quoteSubject == ""){quoteSubject = "Без темы"}
    if(quoteDescription == ""){quoteSubject = "Без описания"}
    if (document.sending_form.checkValidity()){
        document.querySelector('.modalWindow__content-subject').innerText = quoteSubject;
        document.querySelector('.modalWindow__content-description').innerText = quoteDescription;
    }
    }

    document.querySelector('.modalWindow__button-ok').addEventListener('click', closeModalWindow);


    function closeModalWindow(event){
        console.log(event);
        document.querySelector('form').reset()
        document.getElementById('modalWindow').style.display = "none";

    }


