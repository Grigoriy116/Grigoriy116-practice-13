// if (d > b) {}

function calc(b, d, operation) {
  switch (operation) {
    case "add":
      return b + d;
    case "subtract":
      return b - d;
    case "multi":
      return b * d;
  }
}

let x = calc(2, 4, "add");
console.log(x);
let y = calc(2, 4, "substract");
console.log(y);
let z = calc(2, 4, "multi");
console.log(z);
