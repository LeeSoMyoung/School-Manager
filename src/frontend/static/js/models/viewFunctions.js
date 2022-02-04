'use strict';

import showClock from "./clock.js";
import { showGreeting } from "./greeting.js";

const CLASS_HIDDEN = "hidden";

function addHiddenClass(toBeAdded) {
    toBeAdded.classList.add(CLASS_HIDDEN);
}

function removeHiddenClass(toBeRemoved) {
    toBeRemoved.classList.remove(CLASS_HIDDEN);
}

function showHomeBoard(clock, date, greeting) {
    showClock(clock, date);
    showGreeting(greeting);
}

export { addHiddenClass, removeHiddenClass, showHomeBoard };