String.prototype.splitt = function (sep, lim) {
  const arr = [];
  let string = this;
  let substr = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === sep[0]) {
      let match = true;
      for (let j = 1; j < sep.length; j++) {
        if (sep[j] !== string[i + j]) {
          match = false;
          break;
        }
        match = true;
      }
      if (match) {
        arr.push(substr);
        substr = '';
        i += sep.length - 1;
      } else {
        substr += char;
      }
    } else if (substr === sep) {
      arr.push(char);
      substr = '';
    } else {
      substr += char;
    }
  }

  arr.push(substr);
  return arr;
};

console.log('hihchihi'.splitt(''));
