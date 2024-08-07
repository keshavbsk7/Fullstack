const obj = {
    "name": "Dharun",
    "age": 20,
    "city": "Madurai"
}

console.log("Properties: ");
for(let key in obj){
    console.log(key+":"+obj[key]);
}

const keys = Object.keys(obj)

if(keys.length>=2){
    delete obj[keys[1]]
    console.log('Object after deleting second property:\n',obj)
}
else{
    console.log('Object doesn\'t have a second property')
}

const length = Object.keys(obj).length
console.log('\Length of the object: ',length)