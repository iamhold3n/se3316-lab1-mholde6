var pokemon;
getPokemon();
function searchNumber()
{
    // validate input
    let num = document.getElementById("snumber").value;
    if (!parseInt(num)) { // limit search to numerical input
        alert("Invalid input, must be numerical.");
        return;
    }
    if (num < 1 || num > 20) { // limit search to range of 1 to 20
        alert("Invalid input, must be between 1 and 20.");
        return;
    }
    searchPokemon(num, 0);
    document.getElementById("snumber").value = ""; // reset search input
}
function searchName()
{
    // validate input
    let nm = document.getElementById("sname").value;
    if (!nm.match(/^[a-zA-Z]+$/)) { // limit search input to alphabetical characters
        alert("Invalid input, must be alphabetical characters");
        return;
    }
    if(nm.length > 20) { // limit maximum of 20 character search input
        alert("Invalid input, must be less than 20 characters");
        return;
    }
    searchPokemon(nm.toLowerCase(), 1);
    document.getElementById("sname").value = ""; // reset search input
}
function searchPokemon(term, mode) {
    resetSearch();
    hidePokemon();
    let maxsearch = 0; // reset maximum search results
    for (i = 0; i < pokemon.length; i++) {
        // get pokemon number and name and store as array
        // [0] represents search by number
        // [1] represents search by name
        let data = pokemon[i].getElementsByTagName("span");

        // find and display pokemon matching search term (and mode)
        if (data[mode].innerHTML.toLowerCase().match(term)) {
            pokemon[i].style.display = "block";
            maxsearch++;
        }
        if (maxsearch == 5) return; // end search results at maximum of 5 pokemon
    }
}
function getPokemon() { // grab only pokemon list elements, not references list
    let pokedex = document.getElementById("pokedex");
    pokemon = pokedex.getElementsByTagName("li");
}
function hidePokemon() { // hide all pokemon list elements
    for (i = 0; i < pokemon.length; i++) {
        pokemon[i].style.display = "none";
    }
}
function resetSearch() { // allow for multiple searches without reloading page
    for (i = 0; i < pokemon.length; i++) {
        pokemon[i].style.display = "block";
    }
}