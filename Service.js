/**
 * @class Service
 * @classdesc Adatlekérdezésekért és az API kommunikációért felelős osztály.
 */
export default class Service {
  /**
   * Létrehoz egy új Service példányt.
   */
  constructor() {}

  /**
   * Lekéri az adatokat a megadott végpontról, majd átadja azokat egy callback függvénynek (callback).
   * * @param {string} vegpont - Az API végpont URL címe (pl. egy REST API végpont).
   * @param {Function} callBack - A callback függvény, amely argumentumként megkapja a letöltött és JSON formátumra alakított adatokat.
   */
  getData(vegpont, callBack) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callBack(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}