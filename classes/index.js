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
    static name = "name default"
    desc = "desc default"
}
let oneObj = new NewObject()
oneObj.desc = "Something else"
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
