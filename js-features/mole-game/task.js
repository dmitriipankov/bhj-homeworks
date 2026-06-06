const elemetDead = document.getElementById("dead"),
  elemetLost = document.getElementById("lost"),
  getHole = index => document.getElementById(`hole${index}`);
let elemetDeadValue = elemetDead.textContent,
  elemetLostValue = elemetLost.textContent;
for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).classList.contains('hole_has-mole')) {
      elemetDeadValue++;
    } else {
      elemetLostValue++;
    }

    if (elemetDeadValue === 10) {
      alert("Вы победили!");
      elemetDeadValue = 0;
      elemetLostValue = 0;
    }

    if (elemetLostValue === 5) {
      alert("Вы проиграли!");
      elemetDeadValue = 0;
      elemetLostValue = 0;
    }

    elemetDead.textContent = elemetDeadValue;
    elemetLost.textContent = elemetLostValue;
  };
}