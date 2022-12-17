/*
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

function digitize(n) {
    
    return Array.from(String(n), Number).reverse()
    /*
    Here we are using "Array.from" which generates a new array.
    The first parameter "String" converts the given number into a string,
    the second parameter "Number" converts each element of the string into a digit.
    After that method 'reverse()' return reverse array.
    */
  }
