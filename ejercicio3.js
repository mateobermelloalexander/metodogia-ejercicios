const myObject = { a: 1, b: 2, c: 3 };

// Usando Object.keys() para obtener una matriz de claves
const keysArray = Object.keys(myObject);

// Usando Object.values() para obtener una matriz de valores
const valuesArray = Object.values(myObject);

// Usando Object.entries() para obtener una matriz de pares clave-valor como matrices
const entriesArray = Object.entries(myObject);

// Mostrando los resultados usando alert
alert(keysArray);    // Output: ['a', 'b', 'c']
alert(valuesArray);  // Output: [1, 2, 3]
alert(entriesArray); // Output: [['a', 1], ['b', 2], ['c', 3]]
