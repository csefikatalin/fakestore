/**
 * @class ProductView
 * @classdesc Egyetlen termék kártyájának HTML szerkezetét és megjelenítését kezelő osztály.
 */
export default class ProductView {
  /** * @private 
   * @type {Object} A termék pontos adatai.
   */
  #obj = {};

  /**
   * Létrehoz egy új ProductView példányt és beilleszti azt a szülő elembe.
   * * @param {Object} [obj] - A termék adatai.
   * @param {number} [obj.id=0] - A termék egyedi azonosítója.
   * @param {string} [obj.title="string"] - A termék neve/címe.
   * @param {number} [obj.price=0.1] - A termék ára.
   * @param {string} [obj.description="string"] - A termék leírása.
   * @param {string} [obj.category="string"] - A termék kategóriája.
   * @param {string} [obj.image="http://example.com"] - A termék képének URL címe.
   * @param {HTMLElement} parent - A szülő DOM elem.
   */
  constructor(
    obj = {
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com",
    },
    parent,
  ) {
    console.log(obj);
    this.#obj = obj;
    this.parent = parent;
    console.log(this.parent);
    this.megjelenit();
  }

  /**
   * Összeállítja a termék HTML kártyáját és a szülő elem végéhez fűzi.
   */
  megjelenit() {
    console.log(this.#obj);
    const code = `  
        <div class="card">
            <div class="kep"> 
                <img src="${this.#obj.image}" alt="${this.#obj.title}">
            </div>
            <h2>${this.#obj.title}</h2>
            <p>${this.#obj.category}</p>
            <p>${this.#obj.price} Ft</p>
            <p>${this.#obj.description}</p> 
        </div>       
    `;
    this.parent.insertAdjacentHTML("beforeend", code);
  }
}