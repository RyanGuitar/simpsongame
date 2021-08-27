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

  let fullscreenSet = false;

  function setFullscreenFlag(){
      fullscreenSet = true;
  }
  
  function applyGameContainerSize(id, width, height) {
    getId(id).style.height = height;
    getId(id).style.width = width;
  }
  
  function setGameContainerSize() {
    //  console.log('setting game container size')
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
    if(fullscreenSet){
        getId('background').style.opacity = 1;
    }
  }
  
  function setGameContainer() {
    if (gameContainerTracker.portrait.height == 0 || gameContainerTracker.landscape.height == 0) {
      if(!fullscreenSet){
       //   console.log('fullscreen not set')
        if (window.innerWidth < window.innerHeight && gameContainerTracker.portrait.height == 0) {
            gameContainerTracker.portrait.height = window.innerHeight + "px";
            gameContainerTracker.portrait.width = window.innerWidth + "px";
        }
        if (window.innerWidth > window.innerHeight && gameContainerTracker.landscape.height == 0) {
            gameContainerTracker.landscape.height = window.innerHeight + "px";
            gameContainerTracker.landscape.width = window.innerWidth + "px";
        }
      }
      if(fullscreenSet){
          console.log('fullscreen set')
        if (window.innerWidth < window.innerHeight && gameContainerTracker.portrait.height == 0) {
          gameContainerTracker.portrait.height = window.screen.availHeight + "px";
         //   gameContainerTracker.portrait.width = window.screen.availWidth + "px";
        }
        if (window.innerWidth > window.innerHeight && gameContainerTracker.landscape.height == 0) {
            gameContainerTracker.landscape.height = window.screen.availHeight + "px";
            gameContainerTracker.landscape.width = window.screen.availWidth + "px";
        }  
      }
    }
    setGameContainerSize()
  }

  export {
      setGameContainer,
      setFullscreenFlag,
  }