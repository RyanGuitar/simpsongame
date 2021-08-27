function removeAddClasses(id, remove, add){
  getId(id).classList.remove(remove)
  getId(id).classList.add(add)
}

function addEvent(id, action, fn){
  getId(id).addEventListener(action, fn)
}

function removeEvent(id, action, fn){
  getId(id).removeEventListener(action, fn)
}

function getId(id) {
  return document.getElementById(id);
}

export {
  removeAddClasses,
  removeEvent,
  addEvent,
  getId,
}