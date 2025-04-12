// This is a simple ATM simulation program that allows users to add funds, check balance, withdraw money, and transfer money.
// It uses HTML for the user interface and JavaScript for the logic.
// The program starts with an initial balance of 5000 and a transfer charge of 20.75.
var initialBal = 5000;
var account = 0;
var charge = 20.75;
function addFunds() {
  var topUp = document.getElementById("input").value;
  initialBal = initialBal + parseInt(topUp);
  alert(initialBal);
}

function ledgerBalance() {
  alert(initialBal);
}
function withdraw() {
  var withdrawalAmount = document.getElementById("input").value;

  if (initialBal > withdrawalAmount) {
    initialBal = initialBal - withdrawalAmount;
    alert(initialBal);
  } else if (initialBal < withdrawalAmount) {
    alert("YOU NEED GET MONEY THIS KAIN MONEY FIRST SENIOR MAN!!");
  } else {
    alert("INSUFFICIENT FUNDS!!");
  }
}
function transfer() {
  var tfAmount = document.getElementById("input").value;
  if (initialBal > tfAmount) {
    initialBal = initialBal - tfAmount - charge;
    alert(initialBal);
    // account = account + parseInt(tfAmount);
    // alert(person + " " + Date() );
  } else if (initialBal < tfAmount) {
    alert("YOU NO FIT TRANSFER SENIOR MAN!!");
  } else {
    alert("Your account can't be EMPTY!!");
  }
}

console.log (6*2)