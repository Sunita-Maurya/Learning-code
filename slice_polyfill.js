Array.prototype.mySlice = function (startIndex, endIndex) {
  let length = this.length;
  if (endIndex) {
    if (endIndex < 0) length = endIndex + this.length;
    else length = endIndex;
  }
  const arr = [];
  for (let i = startIndex; i < length; i++) {
    arr.push(this[i]);
  }
  return arr;
};
const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(arr, arr.mySlice(22));
