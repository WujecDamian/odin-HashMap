import { node } from "./node.js";

export function linkedList(){
    return{
        head:null,
        append(value){
            let newnode=node(value)
            console.log(newnode)
            if(this.head===null){
                this.head=newnode
                return
            }
            else{
                console.log(JSON.stringify(this.head))
                console.log('cipka')
            }
            let current=this.head
            while(current.nextNode!==null){
                current=current.nextNode
            }
            return current=newnode
        },
        prepend(value){

        },
        size(){

        },
        head(){

        },
        tail(){

        },
        at(index){

        },
        pop(){

        },
        contains(value){

        },
        findIndex(value){

        },
        toString(){
            let result=''
            let current=this.head
            while(current.nextNode!==null){
                result+=` ( ${current} ) -> `
                current=current.nextNode
            }
            return result
        }

    }
}