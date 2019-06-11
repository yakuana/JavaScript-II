// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length); 
}

// getLength function invocation 
getLength(items, function(length) {
  console.log(length); 
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]); 
}

// last function invocation 
last(items, function(lastItem) {
  console.log(lastItem); 
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y); 
}

// sumNums function invocation 
sumNums(3, 4, function(result) {
  console.log(result); 
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y); 
}

// multiplyNums function invocation 
multiplyNums(3, 4, function(result) {
  console.log(result); 
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item)); 
}

// contains function invocation 
contains('Pencil', items, function(bool) {
  console.log(bool); 
});

/* STRETCH PROBLEM */

const myItems = ['Pencil', 'Pencil', 'Notebook', 'Pencil', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let idx = 0; 
  return cb(array.filter((item) => array.indexOf(item, idx += 1) === -1)); 
}

// removeDuplicates function invocation 
removeDuplicates(myItems, function(dupArray) {
  console.log(dupArray); 
});
