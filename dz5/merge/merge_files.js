const fs = require('fs');

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

function mergeFiles(filePaths, outputPath) {
  try {
    let finalMergedArray = [];

    for (const filePath of filePaths) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const numbersFromFile = fileContent
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(Number);
      
      finalMergedArray = merge(finalMergedArray, numbersFromFile);
    }

    const outputData = finalMergedArray.join('\n');
    fs.writeFileSync(outputPath, outputData, 'utf-8');
    console.log(`Готово! Результат сохранен в файле: ${outputPath}`);
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}

const inputFiles = ['file1.txt', 'file2.txt', 'file3.txt'];
const outputFile = 'merged_output.txt';

mergeFiles(inputFiles, outputFile);