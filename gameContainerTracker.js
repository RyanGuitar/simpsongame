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

let imageSizeStandard = '';

function setImagePosition(){
    getId('startHomer').style.left = (window.innerWidth/2) - (imageSizeStandard/2) + (imageSizeStandard) + "px"
    getId('startHomer').style.top = (window.innerHeight/2) - (imageSizeStandard) + (imageSizeStandard * 0.495) + "px"
    getId('startHomer').style.height = (imageSizeStandard * 2) + "px"
    getId('startHomer').classList.remove('faded')
}

function applyGameContainerSize(id, widthAdd, heightAdd) {
    getId(id).style.height = heightAdd;
    getId(id).style.width = widthAdd;
}

function setGameContainerSize() {
    let {
        portrait,
        landscape
    } = gameContainerTracker;
    if (window.innerWidth < window.innerHeight) {
        applyGameContainerSize('gameContainer', portrait.width, portrait.height)
     //  applyGameContainerSize('backgroundContainer', portrait.width, 'auto')
        applyGameContainerSize('background', portrait.width, 'auto')
    }
    if (window.innerWidth > window.innerHeight) {
        applyGameContainerSize('gameContainer', landscape.width, landscape.height)
     //   applyGameContainerSize('backgroundContainer', 'auto', landscape.height)
        applyGameContainerSize('background', 'auto', landscape.height)
    }
    getId('background').classList.remove('hide')
}

function setGameContainer() {
    if (window.innerWidth < window.innerHeight) {
        gameContainerTracker.portrait.height = window.screen.availHeight + "px";
        console.log(window.innerHeight)
        console.log(window.screen.availHeight)
        gameContainerTracker.portrait.width = window.innerWidth + "px";
        imageSizeStandard = window.innerHeight/9 
    }
    if (window.innerWidth > window.innerHeight) {      
        gameContainerTracker.landscape.height = window.innerHeight + "px";
        gameContainerTracker.landscape.width = window.innerWidth + "px";
       imageSizeStandard = window.innerHeight/3
    }
    setGameContainerSize()
    setImagePosition()
}

export {
    setGameContainer,
}