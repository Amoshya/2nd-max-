const input = require("readline-sync");

let N = input.questionInt('Enter the value of N: ');

let max1 = 0;
let max2 = 0;

let count = 0;

while (count < N) {
    let num = input.questionInt(`Enter number ${count + 1}: `);

    if (num > max1) 
    {
        max2 = max1;
        max1 = num;
    } 
    else if (num > max2) 
    {
     }

    count++;
}
console.log(max2);




