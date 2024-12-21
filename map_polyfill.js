Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const returnValue = callback(element, i);
    temp.push(returnValue);
  }
  return temp;
};

const arr2 = [1, 2, 3, 4, 5, 6];
const output = arr2.myMap((value, i) => {
  return value % 2 === 0;
});
console.log(output);
