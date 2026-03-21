//put inside src/index.js
import './styles.css'
import { linkedList } from './scripts/linkedList/linkedList.js'

let list1=linkedList()

list1.append('Oxygen')
list1.append('Water')
list1.append('Fire')

console.log(list1.size())
console.log(list1.head())
console.log(list1.tail())
console.log(list1.contains('Fire'))
console.log(list1.at(0))
console.log(list1.findIndex('Fire'))
console.log(list1.toString())