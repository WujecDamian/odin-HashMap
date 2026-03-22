export function createArray(capacity) {
  let arr = new Array(capacity);
  arr.forEach((element) => {
    element = [];
  });
  return arr;
}
