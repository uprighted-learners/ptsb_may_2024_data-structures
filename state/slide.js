function getPoemTitle (authorUserSelected){

    let poemTitlesByAuthor = {
        "Sylvia Plath": "The Bell Jar",
        "Shel Silverstein": "Falling Up",
    }

    return poemTitlesByAuthor[authorUserSelected]

}

// console.log(getPoemTitle("Sylvia Plath"));
// console.log(getPoemTitle("Shel Silverstein"));

let currentState = "red";

let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}

function enterState (newState) {
    console.log(states[currentState]);
    let validTransitions = states[currentState];
    if(validTransitions.includes(newState)){
        console.log("Great, you're allowed to change the state");
        currentState = newState;
        console.log("Current State:",currentState);
    } else {
        throw new Error("Invalid state transition attempted - from " + currentState + " to " + newState)
    }

}

// enterState("yellow") //! Invalid transition
enterState("green")
enterState("yellow")
enterState("green") //! Invalid transition from yellow -> green
enterState("red")



