var pokemon;
getPokemon();
function searchNumber()
{
    // validate input
    let num = document.getElementById("snumber").value;
    if (!parseInt(num)) {
        alert("Invalid input, must be numerical.");
        return;
    }
    if (num < 1 || num > 20) {
        alert("Invalid input, must be between 1 and 20.");
        return;
    }
    resetSearch();
    hidePokemon();
    searchPokemon(num, 0);
    document.getElementById("snumber").value = "";
}
function searchName()
{
    // validate input
    let nm = document.getElementById("sname").value;
    if (!nm.match(/^[a-zA-Z]+$/)) {
        alert("Invalid input, must be alphabetical characters");
        return;
    }
    if(nm.length > 20) {
        alert("Invalid input, must be less than 20 characters");
        return;
    }
    resetSearch();
    hidePokemon();
    searchPokemon(nm.toLowerCase(), 1);
    document.getElementById("sname").value = "";
}
function searchPokemon(term, mode) {
    let maxsearch = 0;
    for (i = 0; i < pokemon.length; i++) {
        let data = pokemon[i].getElementsByTagName("span");
        if (data[mode].innerHTML.toLowerCase().match(term)) {
            pokemon[i].style.display = "block";
            maxsearch++;
        }
        if (maxsearch == 5) return;
    }
}
function getPokemon() {
    let pokedex = document.getElementById("pokedex");
    pokemon = pokedex.getElementsByTagName("li");
}
function hidePokemon() {
    for (i = 0; i < pokemon.length; i++) {
        pokemon[i].style.display = "none";
    }
}
function resetSearch() { // allow for multiple searches without reloading page
    for (i = 0; i < pokemon.length; i++) {
        pokemon[i].style.display = "block";
    }
}