const game = new Game()

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
const button = document.querySelector('#begin-game')
button.addEventListener('click', () => {
  game.startGame()
  this.style.display = 'none'
  document.getElementById('play-area').style.opacity = '1'
})
