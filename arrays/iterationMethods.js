/* 
    ? Iteration methods
    * Do not destroy the original array
    * Take in a callback function
    * Loop through arrays
    * Must have a return
*/

let fruits = ["apple", "pear","mango", "orange", "pineapple"];

let filteredFruits = fruits.filter((fruit) => {
    if(fruit === "mango" || fruit === "pineapple" ){

        // ..logic
        return true
    } else {
        return false
    }
})
// console.log(filteredFruits)
console.log(fruits.filter((fruit) => fruit === "mango" || fruit === "pineapple" ))

console.log(fruits.filter((f) => {
    if(f !== "mango"){
        return true
    } else {
        return false
    }
}))

let myNumbersArray = [3,5,7,5,10,55,5,8,2,5];

console.log(myNumbersArray.filter((num) => {
    if(num != 5){
        return true
    }else {
        return false
    }
}))

let movies = [
    {
        name: "Top Gun 2",
        category: "Action"
    },
    {
        name: "Scary Movie",
        category: "Horror"
    },
    // "It"
]

movies.push({name: "It",category: "Horror"})
movies.push({name: "Get Out",category: "Horror"})
movies.push({name: "Transformers",category: "Action"})
// console.log(movies);

let actionMovies = movies.filter((movie) => {
    console.log(movie.category)
    if(movie.category === "Action"){
        return true
    }else {
        return false
    }
})

let horrorMovies = movies.filter((m) => m.category === "Horror" )

// console.log(actionMovies)
// console.log(horrorMovies)

movies.forEach((m) => {
    console.log(m.name);
})

console.log(movies.at(-1));