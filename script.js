let awayNum = 0;
let homeNum = 0;

function add1Home() {
    homeNum += 1;
    document.getElementById("home-score").textContent = homeNum;
}

function add2Home() {
    homeNum += 2;
    document.getElementById("home-score").textContent = homeNum;
}

function add3Home() {
    homeNum += 3;
    document.getElementById("home-score").textContent = homeNum;
}

function add1Away() {
    awayNum += 1;
    document.getElementById("away-score").textContent = awayNum;
}

function add2Away() {
    awayNum += 2;
    document.getElementById("away-score").textContent = awayNum;
}

function add3Away() {
    awayNum += 3;
    document.getElementById("away-score").textContent = awayNum;
}

function newGame() {
    let awayNum = 0;
    let homeNum = 0;
    document.getElementById("away-score").textContent = awayNum;
    document.getElementById("home-score").textContent = homeNum;
}