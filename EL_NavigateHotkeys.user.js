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

    var nextMessages = [">>", "nächste Nachricht"];
    var prevMessages = ["<<", "letzte Nachricht"];

    var keyboardHandler = function (zEvent) {
        var arr = Array.from(document.getElementsByTagName('A'));
        if (zEvent.code == "ArrowRight") {
            var forwards = arr.filter(x => nextMessages.some(t => x.innerText.indexOf(t) != -1));
            var forward = forwards[forwards.length-1];
            forward.click();
        } else if (zEvent.code == "ArrowLeft") {
            var prevs = arr.filter(x => prevMessages.some(t => x.innerText.indexOf(t) != -1));
            var prev = prevs[prevs.length-1];
            prev.click();
        }

    }
    window.addEventListener("keydown", keyboardHandler, false);
    // Your code here...
})();