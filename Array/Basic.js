// 1. sum of all natural numbers
// sum of 1 to 5 : 15

function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
        // sum = sum + i;
    }
    return sum;
    // return num*(num+1)/2;
}

sumOfNaturalNumber(5);
console.log(sumOfNaturalNumber(5));

// 2. sum of digit of a  numbers
// 1287: 1+2+8+7 = 18
// 1287%10, remainders= 7+8, Q = 128%10  = 12

function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

sumOfDigits(1287);
console.log(sumOfDigits(1287));

3. 




// 4. isPalindrome

var isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

while(copyNum > 0){
const lastDigit = copyNum%10;
reverseNum = reverseNum*10 + lastDigit;
copyNum = Math.floor(copyNum/10)
}   
 return x === reverseNum
};