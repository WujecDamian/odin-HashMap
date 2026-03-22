import { linkedList } from './linkedList/linkedList.js'

export function hashMap () {
  return {
    bucket: createArray(this.capacity),
    loadFactor: 0.75,
    capacity: 16,
    hash (key) {
      const murmur = require('murmurhash-js')
      return murmur.murmur3(key, 0)%this.bucket.length
    },
    set (key, value) {
      this.bucket[key]
    },
    createArray(capacity){
      let arr=new Array(capacity)
      arr.forEach(element => {
        element=linkedList()
      });
      return arr
    }
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
