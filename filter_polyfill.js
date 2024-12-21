const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.filter((value, i) => value % 2 === 0);
const result2 = arr.filter((v, i, a) => v % (a[0] + a[1]) === 0);
// console.log(result2);

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const isInclude = callback(this[i], i, this);
    if (isInclude) arr.push(this[i]);
  }
  return arr;
};

const result1 = arr.myFilter((v, i, arr) => v % (arr[0] + arr[1]) === 0);
console.log(result1);
