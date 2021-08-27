import {
  getId,
} from './terminal.js'

const gameContainerTracker = {
  portrait: {
    height: 0,
    width: 0,
  },
  landscape: {
    height: 0,
    width: 0,
  }
}

function applyGameContainerSize(id, width, height) {
  getId(id).style.height = height;
  getId(id).style.width = width;
}

function setGameContainerSize() {
  let {
    portrait,
    landscape
  } = gameContainerTracker;
  if (portrait.height && window.innerWidth < window.innerHeight) {
    applyGameContainerSize('gameContainer', portrait.width, portrait.height)
    applyGameContainerSize('background', portrait.width, 'auto')
  }
  if (landscape.height && window.innerWidth > window.innerHeight) {
    applyGameContainerSize('gameContainer', landscape.width, landscape.height)
    applyGameContainerSize('background', 'auto', landscape.height)
  }
  getId('background').classList.remove('hide')
}

function setGameContainer() {
  if (gameContainerTracker.portrait.height == 0 || gameContainerTracker.landscape.height == 0) {
    if (window.innerWidth < window.innerHeight && gameContainerTracker.portrait.height == 0) {
      gameContainerTracker.portrait.height = window.innerHeight + "px";
      gameContainerTracker.portrait.width = window.innerWidth + "px";
    }
    if (window.innerWidth > window.innerHeight && gameContainerTracker.landscape.height == 0) {
      gameContainerTracker.landscape.height = window.innerHeight + "px";
      gameContainerTracker.landscape.width = window.innerWidth + "px";
    }
  }
  setGameContainerSize()
}

window.onload = (e) => {
  window.addEventListener('resize', setGameContainer);
  setGameContainer()
  e.preventDefault()
}