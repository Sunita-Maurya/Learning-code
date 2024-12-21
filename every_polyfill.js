Array.prototype.myEvery = function (cb) {
  if (typeof cb !== 'function') throw new TypeError(`${cb} in not a function `);
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    if (cb(element)) flag = true;
    else {
      flag = false;
      break;
    }
  }
  return flag;
};
console.log([2, 6, 4].myEvery((v) => v % 3 == 0));
