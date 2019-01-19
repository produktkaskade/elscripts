// ==UserScript==
// @name         EL_NavigateHotkeys
// @namespace    https://github.com/produktkaskade/
// @version      1.0
// @description  highlight uncolonized planets above 2500 points
// @author       produktkaskade
// @match        http://*.earthlost.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var keyboardHandler = function (zEvent) {
        if (zEvent.code == "ArrowRight") {
            var arr = Array.from(document.getElementsByTagName('A'));
            var forwards = arr.filter(x=> x.innerText == ">>");
            var forward = forwards[forwards.length-1];
            forward.click();
        }
    }
    window.addEventListener("keydown", keyboardHandler, false);
    // Your code here...
})();