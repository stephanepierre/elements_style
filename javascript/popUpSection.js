let toogleBtn = document.querySelector(".toogleBtn");
let container = document.querySelector(".containerPop");

toogleBtn.onclick = function() {
    container.classList.toggle('active')
}