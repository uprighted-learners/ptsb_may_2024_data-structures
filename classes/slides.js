class Pizza {
    constructor(diameter, type) {
        this.diameter = diameter
        this.type = type
    }
    bake () {
        console.log("Your pizza will be ready in 5 mins");
    }
}


let myPepperoniPizza = new Pizza(14, "pepperoni");


myPepperoniPizza.diameter = 16;

// console.log(myPepperoniPizza);

myPepperoniPizza.bake()


class Circle {
    constructor (radius){
        this.radius = radius
    }
    getArea () {
    // pi*r**2
    console.log("the radius is:",this.radius);
    return "the area here"
    }   
    getCircumference() {
    // 2*pi*radius
    return "the circumference here"
    }
}

let myCircle1 = new Circle(10)

console.log(myCircle1.getArea());

