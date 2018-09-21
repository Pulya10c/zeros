module.exports = function getZerosCount(number) {
  // your implementation

let count = 0;
let n = Math.trunc(number/5);
//if (n=0) {return 0;}
while(n > 0) {
  count = count + n;
  n = Math.trunc(n/5);
}
return count;
}

