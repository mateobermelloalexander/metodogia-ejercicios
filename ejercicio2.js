// Creaando un mapa
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
// Creando un conjunto con una matriz de valores
const mySet = new Set([1, 2, 3, 4, 5]);

// Usando el método get de Map para recuperar el valor asociado con 'key1'
alert(myMap.get('key1')); // Output: value1

// Usando el método has del conjunto para verificar si el conjunto contiene el valor 3
alert(mySet.has(3)); // Output: true
