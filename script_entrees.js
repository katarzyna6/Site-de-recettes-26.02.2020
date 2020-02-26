"use strict";
console.log('OK');

var recettes = [
    {titre: "Salade Niçoise", page: "recette_salade_nicoise.html"},
    {titre: "Tarte aux poireaux", page: "pages_entrees/recette_tarte_poireaux.html"}
];

var html = "";
var len = recettes.length;

for(var i = 0; i< len; i++) {
    
    //Ici on reconstruit nos "li" = éléments de liste
    //Accès recette => recettes[i]
    //Accès titre d'une recette => recettes[i].titre ===> console.log("<li>" + recettes[i].titre + "</li>");
    //Accès page d'une recette => recettes[i].page
    //<li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
    //<li><a href="pages_entrees/recette_tarte_poireaux.html">Tarte aux poireaux</a></li>
    //====> console.log("<li><a href=\"pages_entrees/" + recettes[i].page + "\">" + recettes[i].titre + "</li>");

    html = html + "<li><a href=\"pages_entrees/" + recettes[i].page + "\">" + recettes[i].titre + "</li>"
}

console.log(html);
var liste = document.getElementById("liste");
liste.innerHTML = html;