import {
  removeAddClasses,
  setGameContainer,
  removeEvent,
  addEvent,
  setFullscreenFlag,
  getId,
} from './terminal.js'

function addClass(id, add){
  getId(id).classList.add(add)
}


function requestFullscreenMode() {
 // if (!document.fullscreenElement) {

    
    document.documentElement.requestFullscreen();
    setFullscreenFlag()
    removeAddClasses('background', 'fadeInImage', 'hide')
   // addClass('background', 'hide')
    setGameContainer()
  //  console.log(window.innerHeight)
  //  console.log(window.screen.availHeight)
    
 // }
}



function startGame(e){
  if(e.target.id === 'title' || e.target.id === 'start'){
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