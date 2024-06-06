let theSimpsons = {
  id: 1,
  est: 1989,
  genre: "animated",
  seasons: {
    "season one": [
      {
        episode_title: "Simpsons Roasting on an open fire",
        aired: "1989-12-17",
      },
      {
        episode_title: "Bart the Genius",
        aired: "1990-01-01",
      },
    ],
    "season two": [
      // ...
    ],
    "season three": [
      // ...
    ],
  },
  characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
  currently_running: true,
};

const { characters, seasons } = theSimpsons;

console.log(characters);
console.log(seasons);

characters.push("Grandpa");

characters[5] = "Moe";
console.log(characters);

const { currently_running: on_air } = theSimpsons;

console.log(on_air);

// ? Spreading with Objects

const simpsonsCharacters = {
  simpsonHouse: ["Homer", "Marge"],
  moesTavern: ["Moe", "Barney"],
};

const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3-eyed fish"
}

const locations = {
    ...simpsonsCharacters,
    dmv: ["Patty", "Selma"],
    ...generalLocations
}
locations.simpsonHouse.push("Bart");


console.log(locations);

theSimpsons = {
    ...theSimpsons,
    locations: {
        ...locations
    }
}

console.log(theSimpsons);
