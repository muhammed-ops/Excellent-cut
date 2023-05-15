const icon = document.querySelector('nav ul li .icon');
const menuDetails = document.querySelector('.menudetails');

let display = true;
const showMenudetails = () =>{
    if(display){
    menuDetails.style.display = 'block';
    icon.setAttribute('name', 'close-outline');
    display = false;
    } else {
    menuDetails.style.display = 'none';
    icon.setAttribute('name', 'options-outline');

    display = true;

    }
}

icon.addEventListener('click', showMenudetails )

const prices = document.querySelector('.menudetails .price')


prices.addEventListener('click', ()=>{
    menuDetails.style.display = 'none';
    icon.setAttribute('name', 'options-outline');

})