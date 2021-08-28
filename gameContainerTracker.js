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
    getId('homer').style.left = (window.innerWidth/2) - (imageSizeStandard/2) + (imageSizeStandard * 1.1) + "px"
    getId('homer').style.top = (window.innerHeight/2) - (imageSizeStandard) + (imageSizeStandard/2.3) + "px"
    getId('homer').style.height = (imageSizeStandard * 1.9) + "px"
    getId('homer').classList.remove('faded')
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
        applyGameContainerSize('background', portrait.width, 'auto')
    }
    if (window.innerWidth > window.innerHeight) {
        applyGameContainerSize('gameContainer', landscape.width, landscape.height)
        applyGameContainerSize('background', 'auto', landscape.height)
    }
    getId('background').classList.remove('hide')
}

function setGameContainer() {
    if (window.innerWidth < window.innerHeight) {
        gameContainerTracker.portrait.height = window.innerHeight + "px";
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