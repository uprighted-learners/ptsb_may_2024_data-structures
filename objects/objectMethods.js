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

//? Object.keys() - returns back an array of the keys found in an object
let listKeys = Object.keys(theSimpsons)
console.log(listKeys);

//? Object.values() - returns back an array of all the values within the object
console.log(Object.values(theSimpsons));

//? Object.assign() - copies all properties from one or more sources

let objOne = {name: "Bob", age: 50};
let objTwo = {work: "Manager"};

let newObject = Object.assign(objOne, objTwo)

console.log(newObject);

let futurama = Object.assign(theSimpsons);
console.log("futurama:", futurama);

console.log("Before:", Object.keys(futurama));
delete futurama.currently_running
console.log("After:", Object.keys(futurama));

//? Object.freeze() - prevents any reassignments from occurring on the values within

Object.freeze(theSimpsons)

theSimpsons.id = 2;

console.log(theSimpsons.id); // id remains the same, because obj was 'frozen'