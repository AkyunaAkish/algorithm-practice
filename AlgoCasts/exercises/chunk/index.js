// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const container = [];
  let count = 0;
  let subArray = [];

  for (let i = 0; i < array.length; i++) {
    if (count < size) {
      subArray.push(array[i]);
      count++;
    } else {
      container.push([...subArray]);
      subArray = [array[i]];
      count = 1;
    }
  }

  if (subArray.length) {
    container.push([...subArray]);
    subArray = [];
    count = 0;
  }

  return container;
}

module.exports = chunk;
