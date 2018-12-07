let menu_button = document.getElementById('menu-toggle'),
    aside = document.querySelector('aside');

menu_button.addEventListener('click', function () {
    if (aside.style.display == "none") {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
});
