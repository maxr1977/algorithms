function merge(leftPart, rightPart) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftPart.length && rightIndex < rightPart.length) {
    if (leftPart[leftIndex] < rightPart[rightIndex]) {
      resultArray.push(leftPart[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightPart[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(leftPart.slice(leftIndex))
    .concat(rightPart.slice(rightIndex));
}

function mergeSort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }

  const middleIndex = Math.floor(inputArray.length / 2);
  const leftPart = inputArray.slice(0, middleIndex);
  const rightPart = inputArray.slice(middleIndex);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

// Test
const unsortedArray = [10, 7, 8, 9, 1, 5, 11, 3];
const emptyArray = [];
const singleElementArray = [42];
const reverseSortedArray = [100, 50, 25, 10, 5, 1];
const withDuplicatesArray = [5, 2, 8, 5, 9, 2, 8];
const oddLengthArray = [3, 8, 1, 6, 2, 7, 5];

function testSort(array) {
  console.log(`Исходный массив: [${array}]`);
  const sorted = mergeSort(array);
  console.log(`Отсортированный: [${sorted}]`);
  console.log('---');
}

testSort(unsortedArray);
testSort(emptyArray);
testSort(singleElementArray);
testSort(reverseSortedArray);
testSort(withDuplicatesArray);
testSort(oddLengthArray);