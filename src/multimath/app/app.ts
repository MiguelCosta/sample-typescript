function startGame() {
  // starting a new game
  var messagesElement = document.getElementById('messages');
  messagesElement.innerHTML= 'Welcome to MultiMath! Starting new game...';
  console.log("Starting new game");
}

document.getElementById('startGame').addEventListener('click', startGame);
