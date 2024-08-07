const fs = require('fs')

const regex = /a{2,}/g;

fs.readFile('5_input.txt', 'utf-8', (err, data) => {
    const text = data;
    const result = data.replace(regex, 'b');
    console.log("Original String: ", text)
    console.log("Result String: ",result)

    fs.writeFile('5_output.txt', result, 'utf-8', (err) => {
        if(err){console.log(err)}
    })
})