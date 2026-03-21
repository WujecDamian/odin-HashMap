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
            let size=1
            if(this.listHead===null){
                size=0
                return size
            }
            let current=this.listHead

             while(current.nextNode!==null){
                current=current.nextNode
                size++
            }
            return size
        },
        head(){
            if(this.listHead===null){   
                return undefined
            }
            let current=this.listHead
            return current
        },
        tail(){
            if(this.listHead===null){   
                return undefined
            }
            let current=this.listHead
            while(current.nextNode!==null){
                current=current.nextNode
            }
            return current
        },
        at(index){
            if(this.listHead===null){   
                return undefined
            }
            let current=this.listHead
            let i
            for(i=0;i<index;i++){
                if(current.nextNode!==null){
                    current=current.nextNode
                }
                else return
            }
            return current.value
        },
        pop(){
            if(this.listHead===null){   
                return undefined
            }
            this.listHead=this.listHead.nextNode
        },
        contains(value){
            if(this.listHead===null){   
                return false
            }
            let current=this.listHead
            while(current.nextNode!==null){
                if(current.value===value){
                    return true
                }
                current=current.nextNode
                if(current.value===value){
                    return true
                }
            }
            return false
        },
        findIndex(value){
            if(this.listHead===null){   
                return -1
            }
            let current=this.listHead
            let i
            for(i=0;i<this.size();i++){
                if(current.nextNode!==null){
                    if(current.value===value){
                        return i
                    }
                    else if(current.nextNode.value===value){
                        return i+1
                    }
                    current=current.nextNode

                }
                else{
                    return -1
                }
            }
            return current.value
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