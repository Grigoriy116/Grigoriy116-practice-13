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
    }
}

let x = calc(1, 2, "add");
console.log(x);
let y = calc(1, 2, "substract");
console.log(y);
let z = calc(1, 2, "multi");
console.log(z);

