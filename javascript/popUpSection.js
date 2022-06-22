let toogleBtn = document.querySelector(".toogleBtn");
let container = document.querySelector(".container");

toogleBtn.onclick = function() {
    container.classList.toggle('active')
}