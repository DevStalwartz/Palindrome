# Palindrome
Deliverables 

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Using Javascript to come up with the solution for the question above.

We start by creating a function called isPalindrome that takes in a number as a parameter.
We then create a variable called reversedNumber and set it to 0.

We then create a while loop that checks if the number is greater than 0.
If it is, we set the reversedNumber to the remainder of the number divided by 10.
We then set the number to the quotient of the number divided by 10.

We then return the reversedNumber.
