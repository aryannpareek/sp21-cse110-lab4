## DevTools - Debugging
### Full Screenshot
![](fullScreenshot.png)
### Breakpoint List Screenshot
![](breakpoint.png)
### Watch Expressions List Screenshot
![](watchExpression.png)
1. The bug was that when the num1 and num2 were being retrieved by the document.getElementbyId() snippet, they were being converted to strings. Hence, when they went into the function "calculateSum" to be added together, they were being concatenated because they were both of type string. Therefore, the result would just be a string of the first number concatenated with the second instead of the actual sum.
2. In order to fix this issue, an explicit type cast to "Number" was needed when the variables were being retrieved. In my fixed code, the variables are now taken in as Numbers so that when they enter the "calculateSum" function, "result" will simply be the addition of two Numbers which results in the actual sum. Additionally, the data type of result would now be "Number."
### Fixed File Screenshot
![](fixedCode.png)
### Fixed Example Screenshot
![](fixedCodeExample.png) 
## DevTools - Network Tab

