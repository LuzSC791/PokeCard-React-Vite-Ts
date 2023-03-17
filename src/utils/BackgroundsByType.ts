export type typePoke =
|"normal"
|"fighting"
|"flying"
|"ground"
|"poison"
|"rock"
|"bug"
|"ghost"
|"steel"
|"fire"
|"water"
|"grass"
|"electric"
|"psychic"
|"ice"
|"dragon"
|"drak"
|"falry"
|"unknown"
|"shadow";

export const background:{[key in typePoke]:string} = {
    normal: "#000",
    fighting: "#000",
    flying: "#000",
    ground: "#000",
    poison: "#000",
    rock: "#000",
    bug: "#000",
    ghost: "#000",
    steel: "#000",
    fire: "#000",
    water: "#000",
    grass: "#000",
    electric: "#000",
    psychic: "#000",
    ice: "#000",
    dragon: "#000",
    drak: "#000",
    falry: "#000",
    unknown: "#000",
    shadow: "#000",
};

// background["normal"]