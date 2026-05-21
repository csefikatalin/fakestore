/**
 * @file Fő belépési pont. Inicializálja a szolgáltatásokat és a nézeteket.
 */
import ProductsView from "./ProductsView.js";
import Service from "./Service.js";

/** @type {HTMLElement | null} A szülő elem, ahova a termékek kártyái generálódnak. */
const SZULOELEM = document.querySelector("article");

/** @type {string} A FakeStore API végpontja a termékek lekéréséhez. */
const VEGPONT = "https://fakestoreapi.com/products";

/** @type {Service} A lekérdezésekért felelős szolgáltatás példánya. */
const service = new Service();

/* navigáció */
/** @type {HTMLElement | null} A termékek gomb vagy konténer referenciája. */
const PRODUCTSELEMENT = document.querySelector("#products");

/** @type {HTMLElement | null} Az űrlap gomb vagy konténer referenciája. */
const FORMELEMENT = document.querySelector("#form");

// TODO: A switch blokk befejezése a navigációs logika kezeléséhez.
switch (key) {
    case value:
        break;
    default:
        break;
}

// Adatok lekérése és megjelenítése
service.getData(VEGPONT, dataViewer);

/**
 * Feldolgozza és megjeleníti az API-ból érkező adatokat.
 * * @param {Array<Object>} data - A termékeket tartalmazó tömb, amit az API visszaadott.
 */
function dataViewer(data) {
    console.log(data);
    new ProductsView(data, SZULOELEM);
}