const countDownTimer = function() {
  const elemetTimer = document.getElementById("timer");
  let elemetTimerValue = elemetTimer.textContent;
  if (elemetTimerValue == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  } else {
    elemetTimerValue -= 1;
    elemetTimer.textContent = elemetTimerValue;
  }
};

const intervalId = setInterval(countDownTimer, 1000);