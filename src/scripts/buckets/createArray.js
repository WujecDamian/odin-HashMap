import { linkedList } from "../linkedList/linkedList.js";

export function createArray(capacity){
      let arr=new Array(capacity)
      arr.forEach(element => {
        element=linkedList()
      });
      return arr
    }