const readline = require('readline');

// Create an interface for reading from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create an empty array
let array = [];

// Function for entering elements into the array
function enterElements() {
  function promptUser() {
    rl.question('Enter a number from 0 to 100 (enter 0 to finish input): ', (input) => {
      // Parse the input as an integer
      let number = parseInt(input);

      // Check if the entered number is valid
      if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
        promptUser();
      } else if (number >= 0 && number <= 100) {
        // If 0 is entered, finish input
        if (number === 0) {
          // Close the readline interface
          rl.close();
        } else {
          // Add the element to the array
          array.push(number);
          // Prompt for the next input
          promptUser();
        }
      } else {
        console.log('The entered number is not in the range of 0 to 100.');
        promptUser();
      }
    });
  }

  // Start prompting the user
  promptUser();
}

// Call the function for entering elements
enterElements();

// Listen for the close event to ensure the readline interface is closed properly
rl.on('close', () => {
  // Display the array after input
  console.log('Entered array:', array);
});


//The next step is to synchronize the code above and below


//==========> Sorting
const sortedArray = array.sort((a, b) => {
  return a - b;
});

console.log("Sorted array: ", sortedArray);

//==========> Max and min
var max = array[sortedArray.length - 1];
var min = array[0];

console.log("The largest number is: ", max);
console.log("The smallest number is: ", min);

// we can do this much easier wit math library:
//console.log("Max: ", Math.max(...array));
//console.log("Min: ", Math.min(...array));

//==========> Average
var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];
}
var average = sum / array.length;

console.log("The average number is: ", average);

//==========> Even and odd numbers in array

const evenArray = [];
const oddArray = [];

array.forEach((number) => {
  if (number % 2 === 0) {
    evenArray.push(number);
  } else {
    oddArray.push(number);
  }
});

console.log("Even numbers: ", evenArray.length);
console.log("Odd numbers: ", oddArray.length);
