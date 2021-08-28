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
    let imageWidth = getId('homer').width
    let imageHeight = getId('homer').height
    getId('homer').style.left = (window.innerWidth/2) - (imageWidth/2) + "px"
    getId('homer').style.top = (window.innerHeight/2) - (imageHeight/2) + "px"
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
        getId('homer').style.height = window.innerHeight/9 + "px"
    }
    if (window.innerWidth > window.innerHeight) {
        getId('homer').style.height = window.innerHeight/3 + "px"
        gameContainerTracker.landscape.height = window.innerHeight + "px";
        gameContainerTracker.landscape.width = window.innerWidth + "px";
    }
    setGameContainerSize()
}

export {
    setGameContainer,
}