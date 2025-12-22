

document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.href; 
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active"); 
        }
    });
});
