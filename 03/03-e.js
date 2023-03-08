let num1 = 1;
let num2 = 1;
let num3;

for (let i = 0; i < 4; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
}

console.log(num3);