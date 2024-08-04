document.addEventListener('DOMContentLoaded', () =>{
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        logo.classList.toggle('active')
    });
});