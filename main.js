import {
  removeAddClasses,
  setGameContainer,
  removeEvent,
  addEvent,
} from './terminal.js'



function startGame(e){
  if(e.target.id === 'title' || e.target.id === 'start'){
    removeAddClasses('startText', 'flexing', 'hide')
    removeEvent('gameContainer', 'click', startGame)
  } 
}

window.onload = (e) => {
  window.addEventListener('resize', setGameContainer);
  setGameContainer()
  addEvent('gameContainer', 'click', startGame)
  e.preventDefault()
}