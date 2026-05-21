import ProductView from "./ProductView.js";

/**
 * @class ProductsView
 * @classdesc Több termék (lista) együttes megjelenítéséért felelős osztály.
 */
export default class ProductsView {
    /** * @private 
     * @type {Array<Object>} A megjelenítendő termékek listája.
     */
    #list = [];

    /**
     * Létrehoz egy új ProductsView példányt és elindítja a renderelést.
     * * @param {Array<Object>} [list=[]] - A megjelenítendő termékek tömbje.
     * @param {HTMLElement} parent - A szülő DOM elem, ahova a lista kerülni fog.
     */
    constructor(list = [], parent) {
        this.#list = list;
        this.parent = parent;
        this.megjelenit();
    }

    /**
     * Végigiterál a termékek listáján, és minden egyes elemére létrehoz egy új ProductView példányt.
     */
    megjelenit() {
        this.#list.forEach((element) => {
            new ProductView(element, this.parent);
        });
    }
}