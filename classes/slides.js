class Pizza {
  constructor(diameter, type) {
    this.diameter = diameter;
    // some type of check here, before assigning a val to type
    if (type === "pineapple") {
      throw "Hey you were trying to use pineapple";
    }
    this.type = type;
  }
  bake() {
    console.log("Your pizza will be ready in 5 mins");
  }
}

let myPepperoniPizza = new Pizza(14, "pepperoni");

console.log(new Pizza(10, "pineapple"));

myPepperoniPizza.diameter = 16;

// console.log(myPepperoniPizza);

myPepperoniPizza.bake();

// Return the result of each formula within each method
//  - There exists a library in JS which allows us to use PI, or you can use 3.14
class Circle {
  static createCircleUsingDiameterInfo(diameter) {
    return new Circle(diameter / 2);
  }
  constructor(radius) {
    if (radius <= 0) {
      throw "Radius must be a positive number";
    }
    this.radius = radius;
  }
  getArea() {
    // pi*r**2
    return (Math.PI * this.radius ** 2).toFixed(2);
  }
  getCircumference() {
    // 2*pi*radius
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

let circleFromStatic = Circle.createCircleUsingDiameterInfo(10)
console.log(Circle.createCircleUsingDiameterInfo(2));

let myCircle1 = new Circle(5);

console.log(myCircle1);

// console.log(myCircle1.getArea());
// console.log(myCircle1.getCircumference());
