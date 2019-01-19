// ==UserScript==
// @name         EL_HighlightSpioSent
// @namespace    https://github.com/produktkaskade/
// @version      1.0
// @description  highlight 'send spio' column if clicked
// @author       produktkaskade
// @match        http://*.earthlost.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('click', function (event) {
        if (event.target instanceof HTMLImageElement && event.target.baseURI.indexOf("galaxy.phtml") > -1) {
            event.target.setStyle("background:red;");
        }
    });
})();
