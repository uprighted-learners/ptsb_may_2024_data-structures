// ? Objects

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spiderman",
    age: 25,
    active: true
}

/* 
    * Object Literal
        When our values are written within our keys
         - Hard Coded


    - Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an open fire",
                aired: "1989-12-17"
            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01"
            }
        ],
        "season two": [
            // ...
        ],
        "season three": [
            // ...
        ]
    },
    currently_running: true,    
}

console.log(theSimpsons.genre); // Dot notation
console.log(theSimpsons["genre"]); // Square bracket notation


// console.log(theSimpsons.seasons["season one"][1]["episode_title"]);
console.log(theSimpsons.seasons["season one"][1].episode_title);


theSimpsons.characters = ["Homers","Marge","Bart", "Lisa","Maggie"];


theSimpsons.characters.push("Grandpa")
theSimpsons.currently_running = false
console.log(theSimpsons);

console.log(theSimpsons.seasons["season one"][0].aired);