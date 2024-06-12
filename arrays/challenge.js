let learners = [
    "Mustafa",
    "Amit",
    "Alex",
    "Nicole",
    "April",
    "David",
    "Richard",
    "Sahra"
];

/* 
    ! Challenge 🟢
    ?   .forEach() - Apply a task multiple times
          Given the list of learners...
            - Use the forEach loop to iterate through the array
            - Inside of the loop, log to the output window an interpolated string which prints out: "{learner}'s name is {X} letters long." 
              - Substituting {X} for the actual length of the learner's name
    !       [SPICY MODE]:🌶️🌶️🌶️
            - Create a variable to store your own name.
            - Within the loop, when it reaches your name print "Hey, I'm {learner} 🙌😄! And my name is {X} letters long!"
            - For all the other learners, keep the format the same as what it was above 
*/

let myName = "Amit"

learners.forEach((learner) => {
    if(myName === learner) {
        console.log(`Hey, I'm ${learner} 🙌😄!  And my name is ${learner.length} letters long`);
    } else {
        console.log(`${learner}'s name is ${learner.length} letters long`);
    }
})

/*
    ! Challenge 🟡 
    ?   .filter() - Apply conditional check to store values in a new array. 
          Given the list of learners...
            - Create a traditional function that will take in an array as an argument, and a letter.
            - Inside the function, use .filter to traverse through the array that was received.
            - The return should be a filtered array that has each learner whose name begins with the letter that was passed in.
              ex.) the letter "T" as input should return an array that contains all of the learners whose name begins with the letter "T":
                ["Tiffany","Tim","Tom"]
            - Call the function. Be sure to log the invocation, so the desired result can be seen in the output window.
*/
  

function letterFilter (array, letter) {
    // let filtered = array.filter((value) => {
    //     if(value[0] === letter){
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // return filtered;

    // return array.filter((l) => l.startsWith(letter))
    return array.filter((l) => l[0] === letter)
}


console.log(letterFilter(learners, "D"))