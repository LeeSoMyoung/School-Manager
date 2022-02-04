'use strict';

import { addHiddenClass, removeHiddenClass } from '../models/viewFunctions.js';

const rightSidebar = document.querySelector('#notification');
const leftSidebar = document.querySelector('nav');

function openLeftSidebar() {

}

function closeLeftSidebar() {

}

function openRightSidebar() {

}

function closeRightSidebar() {

}

function hideSidebars(){
    addHiddenClass(leftSidebar);
    addHiddenClass(rightSidebar);
}

function showSidebars(){
    removeHiddenClass(leftSidebar);
    removeHiddenClass(rightSidebar);
}

export { openLeftSidebar, closeLeftSidebar, openRightSidebar, closeRightSidebar, hideSidebars, showSidebars };