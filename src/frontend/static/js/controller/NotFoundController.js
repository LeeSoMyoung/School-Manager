'use strict';

import { navigateTo } from "../index.js";

function onHomeButtonClicked(event) {
    event.preventDefault();
    navigateTo(location.origin);
}

function onPreviousButtonClicked(event) {
    event.preventDefault();
    history.back();
}

export { onHomeButtonClicked, onPreviousButtonClicked };