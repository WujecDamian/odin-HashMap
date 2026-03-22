import { createArray } from "./buckets/createArray.js";
import murmur from "murmurhash-js";
export function hashMap() {
  return {
    loadFactor: 0.75,
    capacity: 16,
    arr: Array.from({ length: 16 }, () => []),
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
      // * TODO: Check if array is not overloaded - if it is
      this.isOverLoaded();
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
    remove(key) {
      const hashedKey = this.hash(key);
      let wasInside = false;

      this.arr[hashedKey].forEach((element, i) => {
        if (element.key === key) {
          wasInside = true;
          this.arr[hashedKey].splice(i, 1);
        }
      });
      return wasInside ? true : false;
    },
    length() {
      let length = 0;

      this.arr.forEach((bucket) => {
        bucket.forEach((element) => {
          length++;
        });
      });
      return length;
    },
    clear() {
      this.arr.forEach((el) => {
        el.splice(0);
      });
    },
    keys() {
      let keys = [];

      this.arr.forEach((bucket) => {
        bucket.forEach((element) => {
          if (element.key != undefined) keys.push(element.key);
        });
      });
      return keys;
    },
    values() {
      let values = [];

      this.arr.forEach((bucket) => {
        bucket.forEach((element) => {
          if (element.value != undefined) values.push(element.value);
        });
      });
      return values;
    },
    entries() {
      let entries = [];
      this.arr.forEach((bucket) => {
        bucket.forEach((element) => {
          if (element.key != undefined)
            entries.push([`${element.key},${element.value}`]);
        });
      });
      return entries;
    },
    showArrayTEST() {
      console.log(this.arr);
    },
    isOverLoaded() {
      let items = this.keys().length;
      let population = items / this.capacity;

      if (population > this.loadFactor) {
        //double the capacity and create new array with old entries somehow kept but recalled ????
        this.capacity *= 2;
        const entries = this.entries();
        this.arr = Array.from({ length: this.capacity }, () => []);
        entries.forEach((entry) => {
          let splitEntry = JSON.stringify(entry).split(",");
          this.set(splitEntry[0], splitEntry[1]);
        });
        console.log("Array overloaded, capacity increased to " + this.capacity);
      }
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
