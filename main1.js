// if (c > b) {}

function calc(b, c, operation) {
  switch (operation) {
    case "add":
      return b + c;
    case "subtract":
      return b - c;
    case "multi":
      return b * c;
  }
}

let x = calc(2, 3, "add");
console.log(x);
let y = calc(2, 3, "substract");
console.log(y);
let z = calc(2, 3, "multi");
console.log(z);
