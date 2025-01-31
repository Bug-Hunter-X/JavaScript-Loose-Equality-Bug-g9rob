function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values using strict equality
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(0,2)); //Output:2
console.log(foo(2,0)); //Output:2