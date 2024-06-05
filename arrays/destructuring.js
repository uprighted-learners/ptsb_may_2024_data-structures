/* 

    ? Array Destructuring

        - Syntax that is on left hand side of the assignment operator (=)
        - Great for pulling or plucking out specific values of an array, and to assign those values to variables

*/

const fullName = ["Jane", "Smith", "Doe"];

// let firstName = fullName[0]; //Jane
// let lastName = fullName[1]; //Doe

let [firstName, middleName, lastName] = fullName;

console.log(firstName, middleName, lastName);

/* 
    ? Spread
        - Denoted by three consecutive periods ...
        - Pulls out all the elements of an array and gives them to you as a standalone list of elements
*/

const fullName2 = ["Rocket", "Raccoon"];

console.log(["Some other superhero", ...fullName2]);

const copiedFullName = [...fullName2];

copiedFullName.push("Is great");

// console.log(copiedFullName);
// console.log(fullName2);

const prices = [10.53, 7.56, 13.56];
console.log(Math.min(...prices));

//? Rest
const fullInfo = [
    "Jane",
    "Doe",
    "Mrs.",
    {month: 3, date: 22, year: 1973},
    "testOne",
    2,
    "test3",
    4,
    true,
    false
];

let [fName, lName,,, ...otherInfo] = fullInfo;

console.log(fName, lName);

console.log(otherInfo);

const [,,,birthday] = fullInfo 

console.log(birthday);