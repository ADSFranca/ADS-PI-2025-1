    document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        toggleBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    });