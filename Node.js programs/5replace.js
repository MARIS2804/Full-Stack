const fs = require('fs');
const path = require('path');

function replaceAWithB(inputString) {
  const regex = /aa/g;
  const resultString = inputString.replace(regex, 'b');
  return resultString;
}

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  const outputString = replaceAWithB(data);
  console.log("Data=",data)
  console.log("Modified string =", outputString)
  fs.writeFile(outputFilePath, outputString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to output file:', err);
      return;
    }
    console.log('Output written to', outputFilePath);
  });
});