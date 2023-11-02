// select elements
const mobileMenu=document.querySelector('.mobile_menu');
const navMenu =document.querySelector('.navigation');

mobileMenu.addEventListener('click',()=>{
    navMenu.style.display='block';
});

navMenu.addEventListener('click',()=>{
    navMenu.style.display='none';
})