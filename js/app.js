
let cards = document.getElementsByClassName('card');
let total = cards.length;

cards[0].classList.add('active');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
console.log(cards)

for (let i = 0; i < total; i++) {
    next.addEventListener('click', function () {
        cards[i].classList.remove('active');
        cards[i++].classList.add('active');
    })
}



