// function deposit(amount) {
//   accounts.checking.balance = balance + amount;
// }

// function withdraw(amount) {
//   if (amount <= balance) {
//     // have enough money
//     balance = balance - amount;
//   } else {
//     return false;
//   }
// }

var accounts = {
  checking: {
    balance: 0,
    deposit: function(amount) {
      this.balance = this.balance + amount;      
    },
    withdraw: function(amount) {
      if (amount <= this.balance) {
        // have enough money
        this.balance = this.balance - amount;
      } else {
        return false;
      }      
    }
  }
};

//-----------------------------------------

function renderBalance() {
  var checkingBalanceDisplay = document.getElementById('balance1');
  checkingBalanceDisplay.innerHTML = '$' + accounts.checking.balance;
}

var checkingDepositBtn = document.getElementById('checkingDeposit');
checkingDepositBtn.addEventListener('click', function() {
  var depositInput = document.getElementById('checkingAmount');
  var depositAmount = parseInt(depositInput.value, 10);

  accounts.checking.deposit(depositAmount);
  renderBalance();
})

var checkingWithdrawBtn = document.getElementById('checkingWithdraw');
checkingWithdrawBtn.addEventListener('click', function() {
  var depositInput = document.getElementById('checkingAmount');
  var withdrawAmount = parseInt(depositInput.value, 10);

  accounts.checking.withdraw(withdrawAmount);
  renderBalance();  
})

renderBalance();