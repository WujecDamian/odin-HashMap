//put inside src/index.js
import "./styles.css";
import { hashMap } from "./scripts/hashMap.js";

let hashMap1 = hashMap();

hashMap1.set("apple", "red");
hashMap1.set("banana", "yellow");
hashMap1.set("carrot", "orange");
hashMap1.set("dog", "brown");
hashMap1.set("elephant", "gray");
hashMap1.set("frog", "green");
hashMap1.set("grape", "purple");
hashMap1.set("hat", "black");
hashMap1.set("ice cream", "white");
hashMap1.set("jacket", "blue");
hashMap1.set("kite", "pink");
hashMap1.set("lion", "golden");
hashMap1.set("moon", "silver");

console.log(hashMap1.get("Bandi"));
console.log(hashMap1.has("Stop"));
console.log(hashMap1.remove("Nonexistentobject"));
console.log(hashMap1.keys());
console.log(hashMap1.values());
console.log(hashMap1.entries());
hashMap1.showArrayTEST();
