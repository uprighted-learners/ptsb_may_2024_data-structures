let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions: {
        liquid: {
            vaporize() {
                this.state = "gas"
                this.emoji = "☁️"
            },
            freeze(){
                this.state = "solid"
                this.emoji = "🪨"
            }
        },
        solid: {
            melt(){
                this.state = "liquid"
                this.emoji = "💧"
            }
        },
        gas: {
            condense(){
                this.state = "liquid"
                this.emoji = "💧"
            }
        }
    },
    dispatcher(actionName){
        let action = this.transitions[this.state][actionName];
        if(action){
            let previous = this.state
            console.log(`${actionName} on ${this.state}`);
            action.call(this)
            console.log(`Changed ${previous} to ${this.state} ${this.emoji}`);
        } else {
            console.log("❌ Invalid Action");
            console.log(`You cannot ${actionName} a ${this.state}`);
        }
    }
}
console.log("Current STATE:",stateMachine.state);
stateMachine.dispatcher("freeze")
console.log("Current STATE:",stateMachine.state);
stateMachine.dispatcher("melt")
stateMachine.dispatcher("melt")
console.log("Current STATE:",stateMachine.state);
stateMachine.dispatcher("vaporize")
