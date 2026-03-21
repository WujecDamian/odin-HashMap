//put inside src/index.js
import './styles.css'
import { linkedList } from './scripts/linkedList/linkedList.js'

let list1=linkedList()

list1.append('Oxygen')
list1.append('Water')
list1.append('Fire')

console.log(list1.size())

console.log(list1.toString())