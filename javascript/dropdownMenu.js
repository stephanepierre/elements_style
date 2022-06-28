let menuToggle = document.querySelector('.menuToggle');
let navigationDropdown = document.querySelector('.navigationDropdown');

menuToggle.onclick = function() {
    navigationDropdown.classList.toggle('active')
}