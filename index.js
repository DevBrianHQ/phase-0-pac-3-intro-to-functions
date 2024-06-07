// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }

sayHello();


  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
sayHelloToGuadalupe()

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

sayHelloToLiz()


function sayHelloToSamip() {
    console.log("Hello Samip")
}

sayHelloToSamip()


function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anytrrrhing");

  function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
   console.log(firstName);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
    console.log("firstName: ", firstName)
    console.log("greeting: ", greeting)
    console.log(`${greeting}, ${firstName}!`)
}

say("Julio","hello");

function add(x,y) {
    return x + y
}

console.log(add(1,2))
console.log(add(90,80))

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }

console.log("hello", "Liz")

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner")); 
