let pokemonlist = [{number: 1, name: "Bulbasaur", img: "images/1.png", type1: "GRASS", type2: "POISON", HP: 45, ATK: 49, SPATK: 65, SPDEF: 65, SPD: 45, desc: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."},
            {number: 2, name: "Ivysaur", img: "images/2.png", type1: "GRASS", type2: "POISON", HP: 60, ATK: 62, DEF: 63, SPATK: 80, SPDEF: 80, SPD: 60, desc: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."},
            {number: 3, name: "Venasaur", img: "images/3.png", type1: "GRASS", type2: "POISON", HP: 80, ATK: 82, DEF: 83, SPATK: 100, SPDEF: 100, SPD: 80, desc: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."},
            {number: 4, name: "Charmander", img: "images/4.png", type1: "FIRE", type2: null, HP: 39, ATK: 52, DEF: 43, SPATK: 60, SPDEF: 50, SPD: 65, desc: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."},
            {number: 5, name: "Charmeleon", img: "images/5.png", type1: "FIRE", type2: null, HP: 58, ATK: 64, DEF: 58, SPATK: 80, SPDEF: 65, SPD: 80, desc: "When it swings its burning tail, it elevates the temperature to unbearably high levels."},
            {number: 6, name: "Charizard", img: "images/6.png", type1: "FIRE", type2: "FLYING", HP: 78, ATK: 84, DEF: 78, SPATK: 109, SPDEF: 85, SPD: 100, desc:"Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."},
            {number: 7, name: "Squirtle", img: "images/7.png", type1: "WATER", type2: null, HP: 44, ATK: 48, DEF: 65, SPATK: 50, SPDEF: 64, SPD: 43, desc: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."},
            {number: 8, name: "Wartortle", img: "images/8.png", type1: "WATER", type2: null, HP: 59, ATK: 63, DEF: 80, SPATK: 65, SPDEF: 80, SPD: 58,desc: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."},
            {number: 9, name: "Blastoise", img: "images/9.png", type1: "WATER", type2: null, HP: 79, ATK: 83, DEF: 100, SPATK: 85, SPDEF: 105, SPD: 78, desc: "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles."},
            {number: 10, name: "Caterpie", img: "images/10.png", type1: "BUG", type2: null, HP: 45, ATK: 30, DEF: 35, SPATK: 20, SPDEF: 20, SPD: 45, desc: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."},
            {number: 11, name: "Metapod", img: "images/11.png", type1: "BUG", type2: null, HP: 50, ATK: 20, DEF: 55, SPATK: 25, SPDEF: 25, SPD: 30, desc: "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body."},
            {number: 12, name: "Butterfree", img: "images/12.png", type1: "BUG", type2: "FLYING", HP: 60, ATK: 45, DEF: 50, SPATK: 90, SPDEF: 80, SPD: 70, desc: "In battle, it flaps its wings at high speed to release highly toxic dust into the air."},
            {number: 13, name: "Weedle", img: "images/13.png", type1: "BUG", type2: "POISON", HP: 40, ATK: 35, DEF: 30, SPATK: 20, SPDEF: 20, SPD: 50, desc: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head."},
            {number: 14, name: "Kakuna", img: "images/14.png", type1: "BUG", type2: "POISON", HP: 45, ATK: 25, DEF: 50, SPATK: 25, SPDEF: 25, SPD: 35, desc: "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators."},
            {number: 15, name: "Beedrill", img: "images/15.png", type1: "BUG", type2: "POISON", HP: 65, ATK: 90, DEF: 40, SPATK: 45, SPDEF: 80, SPD: 75, desc: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."},
            {number: 16, name: "Pidgey", img: "images/16.png", type1: "NORMAL", type2: "FLYING", HP: 40, ATK: 45, DEF: 40, SPATK: 35, SPDEF: 35, SPD: 56, desc: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."},
            {number: 17, name: "Pidgeotto", img: "images/17.png", type1: "NORMAL", type2: "FLYING", HP: 63, ATK: 60, DEF: 55, SPATK: 50, SPDEF: 50, SPD: 71, desc: "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder."},
            {number: 18, name: "Pidgeot", img: "images/18.png", type1: "NORMAL", type2: "FLYING", HP: 83, ATK: 80, DEF: 75, SPATK: 70, SPDEF: 70, SPD: 101, desc: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP."},
            {number: 19, name: "Rattata", img: "images/19.png", type1: "NORMAL", type2: null, HP: 30, ATK: 56, DEF: 35, SPATK: 25, SPDEF: 35, SPD: 72, desc: "Bites anything when it attacks. Small and very quick, it is a common sight in many places."},
            {number: 20, name: "Raticate", img: "images/20.png", type1: "NORMAL", type2: null, HP: 55, ATK: 81, DEF: 60, SPATK: 50, SPDEF: 70, SPD: 97, desc: "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."}]
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

    for (i = 0; i < 20; i++)
    {
        console.log(pokemonlist[i].name);
    }
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