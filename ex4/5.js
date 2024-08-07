const fs = require('fs');

function replaceAWithB(inputString) {
  const regex = /aa+/g;
  return inputString.replace(regex, 'b');
}

function processFile(filePath) {
  try {

    const originalContent = fs.readFileSync(filePath, 'utf-8');


    const modifiedContent = replaceAWithB(originalContent);


    console.log('Original Content:', originalContent);
    console.log('Modified Content:', modifiedContent);


    fs.writeFileSync(filePath1, modifiedContent);

    console.log('File processed successfully.');
  } catch (error) {
    console.error('Error reading or writing file:', error.message);
  }
}

const filePath = 'sample1.txt';
const filePath1='sample2.txt';
processFile(filePath);