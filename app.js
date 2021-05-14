/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrování receptů podle kategorie. Prázdna voľba znamená, že chcem všetky kategórie.

4) Doplň řazení receptů podle hodnocení. 

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let recipes = document.getElementById("recepty");
let recipe, recipeObrazek, recipeImage, recipeInfo, recipeHeader;

let searchInput = document.getElementById("hledat");
let searchButton = document.getElementById("search");
let inputtedSearch, filteredRecipes;

let categoryDropdown = document.getElementById("kategorie");
let selectedCategory, recipesCategory;

window.addEventListener("load", onPageLoad);
searchButton.addEventListener("click", filterRecipes);
categoryDropdown.addEventListener("change", filterCategory)

function onPageLoad() {
    createRecipeList(recepty);
};

function createRecipeList(recipeArray) {
    clearChildren(recipes);
    recipeArray.forEach((item) => {
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
    });
};

function clearChildren(domElement) {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    };
};

function filterRecipes() {
    inputtedSearch = searchInput.value;
    filteredRecipes = recepty.filter(item => {
        return item.nadpis.toLowerCase().startsWith(inputtedSearch.toLowerCase())
    });
    createRecipeList(filteredRecipes);
};


function filterCategory() {
    selectedCategory = categoryDropdown.options[categoryDropdown.selectedIndex].text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    recipesCategory = recepty.filter(item => {
        return item.kategorie.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(selectedCategory)
    });
    createRecipeList(recipesCategory);
};