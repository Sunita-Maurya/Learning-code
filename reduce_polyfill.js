const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, v) => acc + v, 0);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let start = 0;
  if (initialValue === undefined) {
    accumulator = this[0];
    start = 1;
  }
  for (let i = start; i <= this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

let test = arr.myReduce((acc, curr) => {
  if (curr % 3 == 0) acc.push(curr);
  return acc;
}, []);
console.log(test);
