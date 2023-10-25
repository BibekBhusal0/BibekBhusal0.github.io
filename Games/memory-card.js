document.addEventListener("DOMContentLoaded", main);

function main() {
  hint();
  randomize();
  flip();

  document.querySelector(".reset").onclick = () => reset();
}

let startTime;
let timerInterval;
let trial = 0;
let flipCount = 0;
winbool = false;

function flip() {
  document.querySelectorAll(".card").forEach((box) => {
    box.onclick = () => {
      var state = box.dataset.state;
      if (flipCount < 2 && state == "hidden") {
        show(box);
        flipCount++;
        updateTrial();
      } else if (state == "show") {
        hide(box);
        flipCount--;
      }
      if (trial == 1) {
        timer();
      }
      if (flipCount == 2) {
        checkMatch();
        if (box.dataset.state == "show") {
          setTimeout(hideAll, 2000);
        }
      }

      checkWin();
    };
  });
}

function show(box) {
  box.style.transform = "rotateY(180deg)";
  box.dataset.state = "show";
}

function hide(box) {
  box.style.transform = "rotateY(0deg)";
  box.dataset.state = "hidden";
}

const shuffle = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

function randomize() {
  shuffle.sort(() => Math.random() - 0.5);
  document.querySelectorAll(".card").forEach((box) => {
    document.getElementById(
      box.dataset.id
    ).innerHTML = `<img src="cards-img/card${
      shuffle[box.dataset.id]
    }.svg" alt="card ${shuffle[box.dataset.id]}"> `;
  });
}

function hideAll() {
  document.querySelectorAll(".card").forEach((box) => {
    if (box.dataset.state == "show") {
      hide(box);
    }
    if (winbool == true) {
      hide(box);
    }

    flipCount = 0;
  });
}
function showAll() {
  document.querySelector(".win").style.dispaly = "none";
  document.querySelectorAll(".card").forEach((box) => {
    show(box);
  });
  setTimeout(hideAll, 5000);
}

function checkMatch() {
  var winState = [];
  var winbox = [];
  document.querySelectorAll(".card").forEach((box) => {
    if (box.dataset.state == "show") {
      winState.push(shuffle[box.dataset.id]);
      winbox.push(box.dataset.id);
    }
  });
  if (winState[0] == winState[1]) {
    for (const element of winbox) {
      document.getElementById(`box-${element}`).dataset.state = "solved";
      const selectElement = document.getElementById(element);
      selectElement.style.backgroundColor = "#e9b7ce";
      flipCount = 0;
    }
  }
}

function hint() {
  document.querySelector(".hint").onclick = showAll;
}

function checkWin() {
  var stateArray = [];
  document.querySelectorAll(".card").forEach((box) => {
    stateArray.push(box.dataset.state);
  });
  if (stateArray.every((n) => n == "solved")) {
    winbool;
    const winElement = document.querySelector(".win");
    winElement.style.display = "block";
  }
}

function updateTrial() {
  trial++;
  document.querySelector(".score").innerHTML = trial;
}

function timer() {
  if (!winbool) {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    if (startTime) {
      clearInterval(timerInterval);
      const endTime = new Date();
      const elapsedTime = Math.floor((endTime - startTime) / 1000);
      document.QuerySelector(".timer").innerHTML = elapsedTime + "seconds";
    }
  }
}

function updateTimer() {
  if (startTime) {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.querySelector(".timer").innerHTML = elapsedTime + " seconds";
  }
}

function reset() {
  document.querySelector(".win").style.display = "none";
  startTime = new Date();
  winbool = true;
  hideAll();
  winbool = false;
  trial = 0;
  document.querySelector(".score").innerHTML = trial;
  setTimeout(randomize, 501);
  document.querySelectorAll(".card").forEach((box) => {
    document.getElementById(box.dataset.id).style.backgroundColor = "#d3f3f1";
  });
}

//
