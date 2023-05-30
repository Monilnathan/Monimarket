function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    var burgerLines = document.querySelectorAll('.burger div');

    navLinks.classList.toggle('nav-active');

    burgerLines.forEach(function(line) {
        line.classList.toggle('toggle');
    });
}
