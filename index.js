import ProductsView from "./ProductsView.js"
import Service from "./Service.js"

const SZULOELEM=document.querySelector("article")

const VEGPONT="https://fakestoreapi.com/products"
const service=new Service()
/* navigáció */
const PRODUCTSELEMENT=document.querySelector("#products")
const FORMELEMENT=document.querySelector("#form")

switch (key) {
    case value:
        
        break;

    default:
        break;
}


service.getData(VEGPONT,dataViewer)


function dataViewer(data){
    console.log(data)
    new ProductsView(data, SZULOELEM)
}