/* 
Throttling is another technique used in JavaScript to limit the rate at which a function is invoked.
*/

function throttle(func, delay) {
  let timerID;
  let lastExecutedTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastExecutedTime > delay) {
      func.apply(this, args);
      lastExecutedTime = currentTime;
    } else {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        func.apply(this, args);
        lastExecutedTime = Date.now();
      }, delay - (currentTime - lastExecutedTime));
    }
  };
}

function search() {
  console.log("searching");
}

let throttlefun = throttle(search, 100);

throttlefun();
throttlefun();
throttlefun();
throttlefun();
throttlefun();
