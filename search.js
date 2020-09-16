var pokemon;
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
    getPokemon();
    hidePokemon();

    // find matches for search
}
function searchName()
{
    // validate input
    let nm = document.getElementById("sname").value;
    if (!nm.match(/^[a-zA-Z]+$/)) {
        alert("Invalid input, must be alphabetical characters");
        return;
    }
    getPokemon();
    hidePokemon();

    // find matches for search
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