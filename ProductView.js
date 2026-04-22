export default class ProductView {
  #obj = {};
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
    console.log(this.parent)
    this.megjelenit();
  }
  megjelenit() {
    console.log(this.#obj);
    const code = `  
            <div class="card">
             <div class="kep"> <img src="${this.#obj.image}" alt="${this.#obj.title}">
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
