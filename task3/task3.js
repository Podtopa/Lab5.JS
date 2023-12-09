function MinimumNumber (a,b) {
  let min;
  if (a > b)  {
     min = b;
  } else {
     min = a;
  }
  return min;
}
let a = 1;
let b = 5;

let result = MinimumNumber(a,b);
console.log(result);

