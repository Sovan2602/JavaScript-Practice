// Function to find the maximum number in an array
function findMax(numbers) {
    // Initialize the maximum value as the first element of the array
    var max = numbers[0];
  
    // Iterate through the array starting from the second element
    for (var i = 1; i < numbers.length; i++) {
      // Check if the current element is greater than the maximum value
      if (numbers[i] > max) {
        // If it is, update the maximum value
        max = numbers[i];
      }
    }
  
    // Return the maximum value
    return max;
  }
  
  // Test case
  var numbers = [2, 5, 9, 3, 1];
  var result = findMax(numbers);
  console.log("The maximum number is: " + result);
  