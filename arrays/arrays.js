/* 
    ? Array

        - Denoted with []
        - Index always starts at 0
        - Using a property called .length, we can access the amount of items within

*/

let list = ["milk", "bread", "chicken", "coffee"];

console.log(list[3]); // coffee
console.log(list[list.length - 1]); //coffee

list[0] = "chocolate milk";

// console.log(list);

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true]];

// console.log(typeof avengers) // object
console.log(avengers instanceof Array);
/* 
    Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation,  "Hello, Nick" and "Hello, Tony".
*/
// console.log(avengers[4])
// console.log(avengers[avengers.length - 1][2])
// let subarray = avengers[avengers.length - 1]
// console.log(subarray[subarray.length - 1])
// console.log(subarray[2])

console.log(`Hello, ${avengers[0]} Hello, ${avengers[5][0]}`);


/*
    ? Reference
        - Important to note, when an array is created, it is being stored in memory
        - Assigning a new variable to the initial array will reference the same array in memory
        - It can be important when working with immutable data
*/

let myPubInfo = ["Amit", 32];
// Refers to the same array that is created and held in memory
let myPrivateInfo = myPubInfo;
// Some private info - like social
let socialSec = "555-55-5555";
// Pushing private data to 'private' array
myPrivateInfo.push(socialSec)
//! 'private' info was added to the initial array, both variables point to the same array
console.log(myPubInfo);

//? Array Methods
//* .push()
// Adds an item to the end of the array
let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];
// food.push("Pizza")
// console.log(food);

//* splice()
//  (target position, how many to remove, replaced with what)
// food.splice(1,1,"Tacos")
// console.log(food);

//* slice(starting index, ending index)
// Returns what is 'sliced' or removed from the array
// console.log(food.slice(1,3));

//* pop()
// Removes the last element in an array, and will return the element
// food.pop()
// console.log(food)

//* shift()
// Removes items from the beginning of the array
// food.shift()
// console.log(food);


//* unshift(add item)
// Insert new elements to the start of the array
food.unshift("Ice Cream", "Pudding")
console.log(food);

// * toString()
let rgb = [250,120,55];
console.log(rgb.toString());
//? OR
// console.log(rgb.join(" "));