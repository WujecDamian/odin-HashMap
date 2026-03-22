//put inside src/index.js
import "./styles.css";
import { hashMap } from "./scripts/hashMap.js";

let hashMap1 = hashMap();

hashMap1.set("Stop", "Box");
hashMap1.set("Bandi", "Crazy");
hashMap1.set("Stop", "Achtung");
console.log(hashMap1.get("Bandi"));
console.log(hashMap1.has("Stop"));
console.log(hashMap1.remove("Nonexistentobject"));
console.log(hashMap1.keys());
console.log(hashMap1.values());

hashMap1.showArrayTEST();
