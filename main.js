const menuEl = document.querySelector('.menu');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function (e) {
    menuEl.classList.toggle("enabled");
    menuBtn.querySelector('.menu__btn').classList.toggle("active");
});

