const array = [23, 56, 3, 45, 78, 99];

//==========> Sorting
const sortedArray = array.sort((a, b) => {
    return a - b;
})

console.log("Sorted array: ", (sortedArray));

//==========> Max and min
var max = array[sortedArray.length - 1];
var min = array[0];

console.log("The largest number is: ", max);
console.log("The smallest number is: ", min);

//==========> Average
var sum = 0;
for(var i = 0; i < array.length; i++) {
    sum += array[i];
}
var average = sum / array.length;

console.log("The average number is: ", average);

// we can do this much easier wit math library:
//console.log("Max: ", Math.max(...array));
//console.log("Min: ", Math.min(...array));

