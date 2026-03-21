import { node } from "./node.js";

export function linkedList(){
    return{
        listHead:null,
        tail:null,
        size:null,
        append(value){
            let newnode=node(value)
            if(this.listHead===null){
                this.listHead=newnode
                return
            }

            let current=this.listHead
            while(current.nextNode!==null){
                current=current.nextNode
            }
            current.nextNode=newnode
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
            if(this.listHead===null){
            return result
            }
            let current=this.listHead
            while(current.nextNode!==null){
                result+=`( ${current.value} ) -> `
                current=current.nextNode
            }
            result+=`( ${current.value} ) -> `

            return result+"null"
        }

    }
}