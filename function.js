// TODO: Create a function called greet that takes a name parameter
function greet(name){console.log('hello,'+name+'!')
    
}
greet('Yaqoob')
// TODO: Make the greet function return "Hello, [name]!"
function greet(name) {

return `Hello , ${name}`;
}

console.log(greet('Yaqoob'));
// TODO: Create a function called add that takes two parameters
let x=33
y=44

function calculate(a,b){
    console.log(a+b);
}

calculate(x,y)
// TODO: Make the add function return the sum of both parameters
function calculate(a,b){
   
    return a+b

}

console.log(calculate(x,y))
// TODO: Call both functions and store their results in variables
const greeting = greet('Jacob');
const sumUp = calculate(33,44);

// TODO: Print the results to the console
console.log(greeting)
console.log(sumUp)