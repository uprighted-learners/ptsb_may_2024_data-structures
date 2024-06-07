//? Classes
/* 
    - Introduced in 2015
    - A function that helps us create objects
    - Defines the category of the objects
     * Think of them as a cookie-cutter

class NameOfClass {
    constructor (parameter) {
        ... do assignment here
        this.property = parameter
    }
    methodName () {
        ... some logic here
    }
}
*/

class NewObject {
  static name = "name default";
  desc = "desc default";
}
let oneObj = new NewObject();
oneObj.desc = "Something else";
console.log(oneObj);

// 1    2
class Item {
  //  3               4
  constructor(name, desc, price) {
    //5    6      7
    this.name = name;
    this.description = desc;
    this.price = price;
    // this.defaultKey = "Default";
  }
}

/* 
    1. Keyword to establish what type of "function".
    2. The name of our class. Should be Pascal Case.
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. Est. values of the new object.
    5. Keyword - Refers to "this" specific object being created.
    6. The name of the key to our new object.
    7. The value for those keys being created (set by parameters).
*/

// let itemZero = new Item();
// console.log(itemZero);

let itemOne = new Item("Beans", "Canned", 0.89);

// let brokenItem = Item() // !TypeError: Class constructor Item cannot be invoked without 'new'
// console.log(brokenItem);

let iType = "Tomato Soup";
let iDesc = "Canned";
let iCost = 1.29;

function processItem(i, d, c) {
    //... 
  return new Item(i, d, c);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);

class DeptInventory {
    constructor(dept){
        this.department = dept
        this.items = []
    }

    addToInventory (newItem) {
        this.items.push(newItem)
        console.log("Item was added to the inventory!");
    }
}

let dryGoods = new DeptInventory("Dry Goods")

let itemThree = new Item("Dog Food", "Bag", 4.50 )

dryGoods.addToInventory(itemThree)

console.log(dryGoods);

//? Inheritance
// Parent Class
class Car {
    constructor(brand){
        this.brandName = brand
    }
    present(){
        return `I have a ${this.brandName}`
    }
}

// Child Class
class Model extends Car {
    constructor(brandName, model){
        super(brandName);
        this.model = model
    }

    show(){
        return `${this.present()} and it is a ${this.model} `
    }
}

let myCar2 = new Model("Subaru", "STI")
let myCar3 = new Model("Tesla", "Cybertruck")

console.log(myCar3.show())

// let myCar1 = new Car("Subaru")

// console.log(myCar1.present());


class Expense {
    static addUpchargeForProfit(wholesale, upchargePercent){
        let upcharge = wholesale*upchargePercent + wholesale
        return new Expense(wholesale, upcharge)
    }

    constructor(wholesale, sellAt){
        this.purchased_price = wholesale
        this.sell_at = sellAt
        this.sales_tax
    }

    addTax(x){
        let percentage = x;
        let sellingAtCost = this.sell_at
        this.sales_tax = parseFloat((sellingAtCost + (sellingAtCost*percentage)).toFixed(2))
    }
}

let itemToSell = Expense.addUpchargeForProfit(5,.10)
itemToSell.addTax(0.07)

console.log(itemToSell)