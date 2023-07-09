/* 
Debouncing is a technique used in JavaScript to limit the frequency of execution of a function.
*/

function debounce(func, delay) {
  let timerID;

  return function (...args) {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function search() {
  console.log("searching");
}

const debouncedSearch = debounce(search, 1000);
debouncedSearch();
debouncedSearch();
debouncedSearch();
