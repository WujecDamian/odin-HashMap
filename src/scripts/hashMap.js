import { linkedList } from './linkedList/linkedList.js'
import { createArray } from './buckets/createArray.js'
import murmur from 'murmurhash-js'
export function hashMap () {
  return {
    loadFactor: 0.75,
    capacity:16,
    arr: new Array(16).fill([]),
    hash (key) {
      return murmur.murmur3(key, 0)%this.arr.length
    },
    set (key, value) {
      const hashedKey=this.hash(key)
      const obj={
        key,
        value
      }
      this.arr[hashedKey].push(obj)
      console.log(hashedKey)
      console.log(obj)

      console.log(this.arr[hashedKey])
      console.log(value)
    },
    
  }
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
