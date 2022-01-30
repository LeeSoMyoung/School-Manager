'use strict';

const CLASS_HIDDEN = "hidden";

function addHiddenClass(toBeAdded){
    toBeAdded.classList.add(CLASS_HIDDEN);
}

function removeHiddenClass(toBeRemoved){
    toBeRemoved.classList.remove(CLASS_HIDDEN);
}

export {addHiddenClass, removeHiddenClass};