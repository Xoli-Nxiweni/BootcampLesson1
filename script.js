document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

let toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
    if (toggle.classList.contains('clicked')) {
        toggle.classList.remove('clicked');
        toggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    } 
    else {
        toggle.classList.add('clicked');
        toggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    }
});


var typed = new Typed(".effect", {
    strings: ["UX/UI Designer.",
    "Frontend Developer.", 
    "Java Programmer.",],
    loop: true,
    typeSpeed: 80,
    backSpeed: 25,
    backDelay: 2500,
});