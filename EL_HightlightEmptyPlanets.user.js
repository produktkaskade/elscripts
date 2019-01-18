// ==UserScript==
// @name         EL_HightlightEmptyPlanets
// @namespace    https://github.com/produktkaskade/
// @version      1.0
// @description  highlight uncolonized planets above 2500 points
// @author       produktkaskade
// @match        http://*.earthlost.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var result = Array.from(document.getElementsByTagName("td"));

    result.forEach(td => {
        if (td.textContent == undefined || td.textContent == "") return;

        let m = td.textContent.match(/([0-9]+)/);
        if (m == null) return;
        m.forEach( x => {
            if(parseInt(x) > 2500) {
                var siblings = td.previousSiblings();
                if (siblings != undefined && siblings.length >= 4 && siblings[1].textContent == "") {
                    //planet is colonized if there is a name in that column
                    td.setStyle("background:green;");
                }
            }
        });
    });
})();