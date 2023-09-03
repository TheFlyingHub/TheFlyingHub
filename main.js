


document.addEventListener("DOMContentLoaded", function (){

const myfirstjs = document.getElementById("myfirstjs");

const scrollview = 100;

window.addEventListener('scroll', () => {
    if(window.scrollY >= scrollview) {
        myfirstjs.classList.add('testingposition');
    }else{
        myfirstjs.classList.remove('testingposition');
    }
    console.log(myfirstjs);
});
});
