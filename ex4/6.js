const obj= {
    name: 'James',
    age: 30,
    city: 'London',
    occupation: 'Engineer'
  };
  
  console.log('Original Object Properties:');
  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
  

  const keys = Object.keys(obj);
  if (keys.length >= 2) {
    delete obj[keys[1]];
    console.log('\nObject after deleting the second property:');
    for (const property in obj) {
      console.log(`${property}: ${obj[property]}`);
  }
}

  const objectLength = Object.keys(obj).length;
  console.log('\nLength of the object after deletion:', objectLength);
  