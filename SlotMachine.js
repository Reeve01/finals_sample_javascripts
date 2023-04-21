let coins = 20;
let bet = 1;
let slots = [];

function spin() {
  if (coins >= bet) {
    coins -= bet;
    updateCoins();
    generateSlots();
    checkWinnings();
  } else {
    alert('You do not have enough coins to make that bet!');
  }
}

function updateCoins() {
  let coinsElement = document.getElementById('coins');
  coinsElement.innerText = coins;
}

function generateSlots() {
  slots = [];
  for (let i = 0; i < 3; i++) {
    let slot = Math.floor(Math.random() * 5) + 1;
    slots.push(slot);
    let slotElement = document.getElementById(`slot${i + 1}`);
    slotElement.innerText = slot;
  }
}

function checkWinnings() {
  let winnings = 0;
  if (slots[0] === slots[1] && slots[1] === slots[2]) {
    if (slots[0] === 1) {
      winnings = bet * 2;
    } else if (slots[0] === 2) {
      winnings = bet * 3;
    } else if (slots[0] === 3) {
      winnings = bet * 4;
    } else if (slots[0] === 4) {
      winnings = bet * 5;
    } else if (slots[0] === 5) {
      winnings = bet * 6;
    }
    coins += winnings;
    alert(`You won ${winnings} coins!`);
    updateCoins();
  }
}
