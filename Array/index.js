function deleteMid(s, sizeOfStack) {
  let stack = s;
  let mid = Math.ceil((sizeOfStack + 1) / 2);
  for (let i = 0; i < sizeOfStack; i++) {
    if (i === mid) {
      console.log(i);
      continue;
    } else {
      stack.push(stack[i]);
      stack.splice(i, 1);
    }
  }
  return s;
}

console.log(deleteMid([1, 2, 3, 4, 5], 5));
