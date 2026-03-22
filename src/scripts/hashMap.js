import { linkedList } from './linkedList/linkedList.js'
import { createArray } from './buckets/createArray.js'
import murmur from 'murmurhash-js'
export function hashMap () {
  let capacity= 16
  return {
    loadFactor: 0.75,
    bucket: createArray(capacity),
    hash (key) {
      return murmur.murmur3(key, 0)%this.bucket.length
    },
    set (key, value) {
      const hashedKey=this.hash(key)
      let bucket=this.bucket[hashedKey]
      console.log(bucket)
      console.log(hashedKey)
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
