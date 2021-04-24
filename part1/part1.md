## Part 1A
1. values added: 20
2. final result: 20
3. values added: 20
4. ReferenceError: "result" is not defined. "Result" scope is only within the if block since it's of type "let," thus we cannot access it after the if block
5. TypeError: We can't re-assign a const variable after it has already been assigned. result = num1 + num2 would be illegal since we already assigned 'result' to 0 in the first line of the if block
6. Error: The program halts due to the const reassignment error in line 7
   
## Part 1B
1. 3 is printed to the console at line 12. This is because the counter within the for loop is type "var," thus it can be accessed anywhere within the function
2. 150 is printed to the console at line 13. This is because the final iteration of the for loop computes 300(0.5) and stores it in var "discountedPrice," which is accessible even after the loop terminates
3. 150 is printed to the console at line 14. This is because the final iteration of the for loop computes 300(0.5)(100)/100 and stores it in var "finalPrice," which is accessible through out the function
4. This function will return an array named "discounted," populated with values [50, 100, 150]. This is because each iteration of the for loop computes the finalPrice and pushes it to the discounted array
5. Line 12 produces a reference error, since "i" is not defined within this scope. Since "i" was of type "let" within the for loop, it ceases to exist after the for loop terminates
6. Line 13 produces a reference error, since discountedPrice is not defined within this scope. Since discountedPrice is of type "let" within the for loop, it ceases to exist after the for loop terminates
7. 150 is printed to the console at line 14. This is because finalPrice (type let) was defined at the start of the function, therefore we can access it within this same block of code. finalPrice was updated in the last iteration of the for loop, and that value is displayed when we try to print its value at the end of the function
8. This function will return an array named "discounted," populated with values [50, 100, 150]. This is because each iteration of the for loop computes the finalPrice and pushes it to the discounted array, which was defined as type "let" at the start of the function
9. Line 12 produces a reference error, since "i" is not defined within this scope. Because "i" is of type "let" within the for loop, it's not accessible after the for loop terminates
10. 3 is printed to the console at line 12. const length is assigned value 3 at the begenning of the function, and retains this value through out the function
11. This function will return an array named "discounted," populated with values [50, 100, 150]. This is because each iteration of the for loop computes the finalPrice and pushes it to the discounted array, which was defined as type "const" at the start of the function. Since "discounted" wasn't reassigned anywhere within its scope, the code works as intended
12. 
    * A. student.name
    * B. student['Grad Year']
    * C. student.greeting()
    * D. student['Favorite Teacher'].name
    * E. student.courseLoad[0]
13. 
    * A. '3' + 2 = '32' --- this is because the addition sign will be used as concatenation in the string sense. The 2 is concatenated to the '3' string
    * B. '3' - 2 = 1 --- the subtraction sign will yield an automatic number conversion. The '3' will become a number and then it will be subtracted by 2
    * C.  3 + null = 3 --- the addition sign will be used for arithmetic because of the number 3 and the null will be converted to its numeric value 0, so it will be 3 + 0
    * D. '3' + null = 3null --- similar to a), the addition sign will be used for concatenation due to the '3' string. The word null will be concatenated to the already existing '3' string
    * E. true + 3 = 4 --- the addition sign will be arithmetic so it will convert true to its numeric boolean value 1 and add it to the existing 3
    * F. false + null = 0 --- the addition sign will be used for arithemtic so the number conversions for both of these would result in 0. 0 + 0 = 0
    * G. '3' + undefined = 3undefined --- because there is a string, the addition sign will be used for concatenation. The word "undefined" will be concatenated to the existing "3" string
    * H. '3' - undefined = NaN --- the subtraction sign yields an automatic number conversion; the "3" is converted to 3 and the undefined is converted to NaN which results in the answer being NaN
14. 
    * A. '2' > 1 is true --- the '>' comparison operator will have the '2' convert into a number. Therefore, 2 is greater than 1 so it will return true
    * B. '2' < '12' is false --- When comparing strings, we must follow the "dictionary" order. In this case, '2' is greater than '12' because '12' starts with a '1' which is less than '2'. Therefore, it is false
    * C. 2 == '2' is true --- the '==' operator allows for datatype conversion so the '2' string will be converted into a number. Therefore, 2 is equal to 2 so it will return true
    * D. 2 === '2' is false --- the '===' is strictly an equality operator and does not allow any conversions in datatype. Therefore, the string '2' in not equal to the number 2 and will return false
    * E. true == 2 is false --- the '==' operator allows for datatype conversion so the true will become a 1 after the boolean to number conversion. 1 is not equal to 2 so it would return false
    * F. true === Boolean(2) is true --- the '===' is a strict equality operator and will not automatically do any datatype conversions. However, in this case the conversion in explicitly shown so the 2 will be converted into a boolean. Since 2 is not 0, it will be converted into true. True is equal to true so it would return true
15. In Javascript, the == operator is used for comparing two variables, but in the process of comparing it ignores the datatypes of each variable and will most likely perform a type conversion. On the other hand, the === operator is used to compare two variables while checking the datatypes of each value as well.
16. Can be found in part1b-question16.js
17. The function will return newArr, populated with values [2, 4, 6]. modifyArray takes in 2 parameters: array, and a callback function "doSomething." We first initialize newArr within the function. Next, the for loop iterates over the length of the array passed in. For each iteration, the callback function (doSomething) takes in the num stored at the current arr index we're on, multiplies it by 2, and returns the result. This result (which was multiplied by 2) is pushed to newArr, which is populated with [2, 4, 6] after the for loop terminates.
18. Can be found in part1b-question18.js
19. The output of this code should be the numbers logged in this order, each with a new line: 1,4,3,2. This is because as soon as the function starts, the console logs 1. Then, there are setTimeouts for both the loggings of the numbers 2 and 3 so they enter their own event cycle. Since 4 is not a part of that event cycle, it will be logged next. We can then enter the next event cycle and see that the logging of 3 has no delay so it will log next. Finally, the logging of 2 will occur after a 1000 millisecond delay.
