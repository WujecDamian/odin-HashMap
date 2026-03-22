import { linkedList } from "./linkedList/linkedList.js";
import { createArray } from "./buckets/createArray.js";
import murmur from "murmurhash-js";
export function hashMap() {
  return {
    loadFactor: 0.75,
    capacity: 16,
    arr: new Array(16).fill([]),
    hash(key) {
      return murmur.murmur3(key, 0) % this.arr.length;
    },
    set(key, value) {
      const hashedKey = this.hash(key);
      let wasInside = false;
      const obj = {
        key,
        value,
      };
      this.arr[hashedKey].forEach((element) => {
        if (element.key === key) {
          element.value = value;
          wasInside = true;
        }
      });
      if (!wasInside) {
        this.arr[hashedKey].push(obj);
      }
      console.log(this.arr[hashedKey]);
      // * TODO: Check if array is not overloaded - if it is
    },
    get(key) {
      const hashedKey = this.hash(key);
      let wasInside = false;
      let foundElement;

      this.arr[hashedKey].forEach((element) => {
        if (element.key === key) {
          wasInside = true;
          foundElement = element.value;
        }
      });
      if (!wasInside) {
        return null;
      } else {
        return foundElement;
      }
    },
    has(key) {
      let wasInside = false;

      this.arr.forEach((bucket) => {
        bucket.forEach((element) => {
          if (element.key === key) {
            wasInside = true;
          }
        });
      });
      return wasInside;
    },
  };
}

/*

 if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
} 
  !important
  *Each bucket contains a linked list


  ? TODO's:
  - When to use % (getting Index) // 'String' -> hash eg. 1091 -> 1091 % capacity -> eg.3 -> store in bucket 3     | But consider that capacity changes what then?
*/
