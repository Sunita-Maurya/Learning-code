const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, v) => acc + v, 0);

Array.prototype.myReduce = function (callback, initialValue) {
  let start = 0;
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    const element = this[i];
    acc = callback(acc, element, i, this);
  }
  return acc;
};

const result2 = arr.myReduce((acc, v) => acc + v, '');
console.log(result2);
