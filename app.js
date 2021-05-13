/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let recipes = document.getElementById("recepty");
let recipe, recipeObrazek, recipeImage, recipeInfo, recipeHeader;

createRecipeList();

function createRecipeList() {
    recepty.forEach((item) => {
        recipe = document.createElement("div");
        recipeObrazek = document.createElement("div");
        recipeImage = document.createElement("img");
        recipeInfo = document.createElement("div");
        recipeHeader = document.createElement("h3");

        recipe.setAttribute("class", "recept");
        recipeObrazek.setAttribute("class", "recept-obrazek");
        recipeImage.setAttribute("src", item.img);
        recipeInfo.setAttribute("class", "recept-info");
        recipeHeader.innerHTML = item.nadpis;

        recipes.appendChild(recipe);
        recipe.appendChild(recipeObrazek);
        recipeObrazek.appendChild(recipeImage);
        recipe.appendChild(recipeInfo);
        recipeInfo.appendChild(recipeHeader);
    })
};

