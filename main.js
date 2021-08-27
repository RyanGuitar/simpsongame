import {
  removeAddClasses,
  setGameContainer,
  removeEvent,
  addClass,
  addEvent,
} from './terminal.js'

function requestFullscreenMode() {
  document.documentElement.requestFullscreen();
  addClass('background', 'hide')
  setGameContainer()
}

function startGame(e) {
  if (e.target.id === 'title' || e.target.id === 'start') {
    removeAddClasses('startText', 'flexing', 'hide')
    removeEvent('gameContainer', 'click', startGame)
    requestFullscreenMode()
  }
}

window.onload = (e) => {
  window.addEventListener('resize', setGameContainer);
  setGameContainer()
  addEvent('gameContainer', 'click', startGame)
  e.preventDefault()
}