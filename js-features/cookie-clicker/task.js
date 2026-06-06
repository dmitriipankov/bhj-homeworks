  const elemetClickerCounter = document.getElementById("clicker__counter");
  const imageCookie = document.getElementById("cookie");
  let elemetClickerCounterValue = elemetClickerCounter.textContent;
  imageCookie.onclick = function() {
    if (elemetClickerCounterValue % 2 == 0) {
      imageCookie.width = 300;
    } else {
      imageCookie.width = 200;
    }
    elemetClickerCounterValue++;
    elemetClickerCounter.textContent = elemetClickerCounterValue;
  };