const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(`resolved: ${values}`))
  .catch((err) => console.log(`rejected ${err}`));

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => console.log(`resolved: ${values}`))
  .catch((err) => console.log(`rejected ${err}`));

Promise.any([promise1, promise2, promise3])
  .then((values) => console.log(`resolved: ${values}`))
  .catch((err) => console.log(`rejected ${err}`));

Promise.race([promise1, promise2, promise3])
  .then((values) => console.log(`resolved: ${values}`))
  .catch((err) => console.log(`rejected ${err}`));
