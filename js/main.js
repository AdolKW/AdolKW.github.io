function ToggleNavbar() {
    const navbar = document.querySelector('.navbar')
    const menu = document.querySelector('.menu p')
    if (menu.innerHTML === 'M E<br>N U') {
        menu.innerHTML = 'C L<BR>S E'
    }
    else {
        menu.innerHTML = 'M E<br>N U'
    }
    navbar.classList.toggle('active')
}