// EXERCISE 1

/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

Input: num1 = "11", num2 = "123"
Output: "134"

Input: num1 = "456", num2 = "77"
Output: "533"

Input: num1 = "0", num2 = "0"
Output: "0"
*/

function sumNum(num1, num2){
    return num1 + num2
};

console.log(sumNum(11, 123));
console.log(sumNum(456, 77));
console.log(sumNum(0, 0));








// EXERCISE 2

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true
Explanation: From left to right, it reads 121. From right to left, it becomes 121. Therefore it is a palindrome.


Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function palindrome(x){
    if (x[0] == x[-1]){
        return true
    } else {
        false
    }
}
console.log(x)