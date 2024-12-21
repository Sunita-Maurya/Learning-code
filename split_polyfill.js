String.prototype.mySplit = function (separator, limit) {
  const arr = [];
  let subStr = '';
  let i = 0;
  while (i < this.length) {
    if (separator == '') {
      arr.push(this[i]);
      i++;
    } else if (this[i] == separator[0]) {
      let newSubStr = '';
      for (let j = 0; j < separator.length; j++) {
        newSubStr = newSubStr + this[i + j];
      }
      if (newSubStr === separator) {
        arr.push(subStr);
        subStr = '';
        i = i + separator.length;
      } else {
        subStr = subStr + this[i];
        i++;
      }
    } else {
      subStr = subStr + this[i];
      i++;
    }
  }
  arr.push(subStr);
  if (limit) {
    arr.length = limit;
  }
  return arr;
};

let str = 'ramayanaea';
console.log(str.mySplit('a'));
