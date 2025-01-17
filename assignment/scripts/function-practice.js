console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( _Julie ) {
  return;
}
// Remember to call the function to test
console.log ('Test- should say "Hello Juliie!"', helloName ());






// 3. Function to add two numbers together & return the result
// return firstNumber + secondNumber;
  
let firstNumber = 1;
  let secondNumber = 2;

function addNumbers(){
  

  return firstNumber + secondNumber;
 
}
console.log(addNumbers (1,2));
 




// 4. Function to multiply three numbers & return the result

let thirdNumber = 3
function multiplyThree( ){

  return firstNumber * secondNumber * thirdNumber 

}

console.log(multiplyThree(1,2,3));




// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else {

  
    return false;
  }
}

console.log( 'isPositive - should say true', isPositive(9) );
console.log( 'isPositive - should say false', isPositive(8) );
console.log( 'isPositive - should say false', isPositive(-7) );
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );




// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let colors = ['brown', 'black', 'green'];

function getLast (colors ) {
  let getLastItem= colors[colors.length -1];

    return getLastItem;
  }




 
console.log(`the last item is:`, getLast(colors));
colors=[];
console.log(`the last item is:`, getLast(colors));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

colors = ['brown', 'black', 'green'];


function find( _value, _array ){
for (let item of colors){
  if (_value == item){
    return true;
   } 
  }
  return false;
}
console.log ('find', find ('red', colors));
console.log ('find', find ('black',colors));





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(_letter, _string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
