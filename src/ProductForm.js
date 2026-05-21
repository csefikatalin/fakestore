/**
 * @class ProductForm
 * @classdesc Termék rögzítéséhez vagy szerkesztéséhez használt űrlapot megjelenítő osztály.
 */
export default class ProductForm {
    /** * @private 
     * @type {Object} A formot inicializáló termék adatai.
     */
    #obj;

    /**
     * Létrehoz egy új ProductForm példányt és azonnal meghívja a view metódust.
     * * @param {Object} [obj={}] - A termék adatai (alapértelmezetten üres objektum).
     * @param {HTMLElement} parent - A szülő DOM elem, ahova az űrlap beillesztésre kerül.
     */
    constructor(obj = {}, parent) {
        this.#obj = obj;
        this.parent = parent;
        this.view();
    }

    /**
     * Összeállítja és a szülő elembe illeszti az űrlap HTML kódját.
     */
    view() {
        const code = `
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
        `;
        // Figyelem: az 'insserAdjacentHTML' el van gépelve, helyesen: insertAdjacentHTML
        this.parent.insserAdjacentHTML("beforeend", code);
    }
}