let card = document.querySelector(".card");
let cardtoggle = document.querySelector(".toggle");
let buttonCard = document.getElementById('buttonCard');

cardtoggle.onclick = function() {
    card.classList.toggle('active')
}

buttonCard.onclick = () => {
    location.href = "https://www.psweb.fr";
}
