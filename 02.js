const num = 15;

let a = 0;
let b = 1;
let fib;

while (true) {
    fib = a + b;
    if (fib === num) {
        console.log(`${num} pertence á sequencia de Fibonacci!`);
        break;
    } else if (fib > num) {
        console.log(`${num} não pertence a sequencia de Fibonacci!`);
        break;
    }
    a = b;
    b = fib;
}