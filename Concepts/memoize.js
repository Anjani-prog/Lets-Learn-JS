/* 
Memoization is a technique used in programming to optimize
the execution time of a function by caching its results based on the arguments. 
*/

function memoize(func) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("from cache");
      return cache[key];
    } else {
      let res = func.apply(this, args);
      cache[key] = res;
      return res;
    }
  };
}

function add(a, b) {
  console.log("invoked fn");
  return a + b;
}

let memoizedadd = memoize(add);
memoizedadd(0, 0);
memoizedadd(0, 0);
