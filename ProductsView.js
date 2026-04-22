import ProductView from "./ProductView.js"

export default class ProductsView{
    #list=[]
    constructor(list=[], parent){
        this.#list=list
        this.parent=parent
        this.megjelenit()
    }
    megjelenit(){
        this.#list.forEach((element)=>{
            new ProductView(element,this.parent)
        })
    }
}