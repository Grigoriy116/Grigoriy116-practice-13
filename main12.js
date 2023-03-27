alert(123);
// if (a > b) {}
// if (c > b) {}
// if (d > b) {}

function calc(a, b, operation) {
    switch(operation){
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multi":
            return a * b;
        default:
            return "Invalid operation"
    }
}


console.log(calc('add', 1, 2));


