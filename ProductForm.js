export default class  ProductForm{
    #obj
    constructor(obj={},parent){
        this.#obj=obj
        this.parent=parent
        this.view()
    }
    view(){
        const code=`
        <form id="productForm">
    <div>
        <label for="image">Kép URL:</label>
        <input type="text" id="image" name="image" required>
    </div>

    <div>
        <label for="title">Cím:</label>
        <input type="text" id="title" name="title" required>
    </div>

    <div>
        <label for="category">Kategória:</label>
        <input type="text" id="category" name="category" required>
    </div>

    <div>
        <label for="price">Ár (Ft):</label>
        <input type="number" id="price" name="price" required>
    </div>

    <div>
        <label for="description">Leírás:</label>
        <textarea id="description" name="description" required></textarea>
    </div>

    <button type="submit">Mentés</button>
</form>
        `
        this.parent.insserAdjacentHTML("beforeend",code)
    }
}