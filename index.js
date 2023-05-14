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