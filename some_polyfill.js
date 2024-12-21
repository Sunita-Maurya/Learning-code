Array.prototype.mySome = function (cb) {
  if (typeof cb !== 'function') throw new TypeError(`${cb} in not a function `);
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    if (cb(element)) flag = true;
    break;
  }
  return flag;
};
console.log([2, 4, 4].mySome((v) => v % 3 == 0));
