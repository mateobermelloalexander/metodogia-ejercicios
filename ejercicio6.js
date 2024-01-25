const obj = {
  x: 1,
  y: 2,
  toJSON: () => ({ custom: 'data' })
};

const jsonString = JSON.stringify(obj);
alert(jsonString); // Output: '{"custom":"data"}'
