"use strict";
console.log('OK');

var recettes = [
    {
        titre: "Salade Niçoise", 
        page: "recette_salade_nicoise.html",
        image: "salade.jpg"
    },
    {
        titre: "Tarte aux poireaux", 
        page: "pages_entrees/recette_tarte_poireaux.html",
        image: "tarte.jpg"
    }
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

    html = html + "<li class=\"elem\" id=\"rec" + i + "\">" + recettes[i].titre + "</li>"
};

console.log(html);
var liste = document.getElementById("liste");
liste.innerHTML = html;

/* Fonctionnalité modale */ 

var container = document.getElementById("rec_container");
container.addEventListener("click", () =>{
    container.style.display = "none";
});

var elems = document.getElementsByClassName("elem");
var len = elems.length;
for(var i = 0; i < len; i++) {
    elems[i].addEventListener("click", (event) => {
        event.preventDefault();
        var index = parseInt(event.target.id.substring(3));
        showRecette(index);
    });
}
console.log(elems);

function showRecette(index) {
    console.log("Vous avez demandé à la recette n°" + index)
    container.style.display = "block";

}