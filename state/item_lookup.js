const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (questionText) =>
  new Promise((resolve, reject) =>
    rl.question(questionText + "\n", (text) =>
      text.length > 0
        ? resolve(text.toLowerCase())
        : reject("You gotta type something...\n")
    )
  );

let validInvCommands = ["i", "inventory", "inv", "items", "item"];

let inventory = {
  sword: {
    name: "Excaliber",
    description: "A sword pulled from stone",
    look() {
      console.log(`${this.name}⚔️`);
      return this.description;
    },
  },
  axe: {
    name: "Might Battle Axe",
    description: "Slayer of bugs.",
    look() {
      console.log(`${this.name}🪓`);
      return this.description;
    },
    swing() {
      // some other logic,
      return `You swing the ${this.name}`;
    },
  },
  hp_potion: {
    name: "Hp Potion",
    description: "Restores hp",
    drink() {
        // some other logic
      return `You drank the ${this.name}`;
    },
  },
  coffee: {
    name: "Coffee",
    description: "Helps with sleep deprivation",
    drink() {
        // some other logic
      return `You drank the ${this.name}`;
    },
  },
};

const showInventory = () => {
  console.log("-".repeat(10));
  console.log("Inventory:");
  console.log("-".repeat(10));

  Object.keys(inventory).forEach((key) => {
    console.log(`${key}: ${inventory[key].name}`);
  });
};

const showActions = (target) => {
    console.log("-".repeat(10));
    console.log("Available Actions:");
    console.log("-".repeat(10));

    Object.keys(inventory[target]).forEach((property) => {
        if(typeof inventory[target][property] === "function"){
            console.log(property);
        }
    })

}

const interact = (action, target) => {
    if(validInvCommands.includes(action)){
        showInventory();
        return;
    }    

    if(inventory[action]){
        showActions(action)
        return;
    }


    let validItem = inventory[target]
    let validAction = inventory[target]?.[action] // Optional chaining to check if the trailing key exists
    // let validAction = inventory[target][action]; //! TypeError: Cannot read properties of undefined, if item is not in inventory obj 

    if(validItem){
        console.log("Item found: 👍");
        if(validAction && typeof validAction === "function"){
            console.log("Action can be done: 👍");
            
            console.log(inventory[target][action]())
        } else {
            console.log(`Are you crazy?! You cannot ${action} a ${target}`);
        }
    } else {
        console.log("Item not found :(");
    }
}

const start = async () => {
  try {
    while (true) {
      let response = await ask("What do you want to do?");
      if (response === "exit") process.exit();

      let splitResponse = response.split(" ");

      // Method 1
      // let action = splitResponse[0]
      // let target = splitResponse[1]

      // Method 2

      const [action, target] = splitResponse;

      if (action && target) {
        // 2 worded input
        interact(action, target)
      } else if (action) {
        // 1 word input
        interact(action, "")
      }
    }
  } catch (err) {
    console.log("Error:", err);
    await start();
  }
};

start();
