// pobranie elementów i konwersja nodelist do tablicy
let box = Array.prototype.slice.call(document.querySelectorAll(".box"));

//        funkcja zmiany koloru tła
function change() {
  document.body.className = this.className.slice(4);
}

//        nasłuchiwanie i akcja
box.forEach(element => {
  element.addEventListener("click", change);
});

// box[0].addEventListener("click", change);
// box[1].addEventListener("click", change);
// box[2].addEventListener("click", change);
// box[3].addEventListener("click", change);
// box[4].addEventListener("click", change);
// box[5].addEventListener("click", change);
// box[6].addEventListener("click", change);
// box[7].addEventListener("click", change);
// box[8].addEventListener("click", change);
// box[9].addEventListener("click", change);
// box[10].addEventListener("click", change);
// box[11].addEventListener("click", change);
// box[12].addEventListener("click", change);
// box[13].addEventListener("click", change);
// box[14].addEventListener("click", change);
// box[15].addEventListener("click", change);