# FakeStore webáruház - dokumentáció készítésének automatizálása

A webáruház nyilvános api végponthoz csatlakozik. 
A projekt célja, hogy egy megismerkedjünk a RestFull alkalmazás készítésének alapjaival. 


## A dokumentáció JSDoc segítségével készül. 

### helyezd el a kódban a szükséges annotációkat

pl. 
```javascript
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

```

### Instaláld az npm csomaggal a JsDoc documentumgeneráló rendszert. 

```bash
npm install --save-dev jsdoc
```
Készíts **.gitignore** fájlt, és helyezd el benne a **/node_modules** mappát - így nem tölttöd fel pusholáskor a githubra
clone-ozva a repo-t,  az **npm install** paranccsal telepítheted. 


### A dokumentáció generálása

1. A forrásfájlokat helyezd el az src mappában. 
1. Az index.html maradjon a projekt gyökérkönyvtárában. 
1. Módoítsd a css és js hivatkozásokat!
1. A readme fájl és az src mappa alpján a dokumentáció elkészítése

```bash
npx jsdoc -r src README.md
```

## Jobb megoldás

- jsdoc.json fájl létrehozása

```
{
    "source": {
        "include": ["src"],
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "opts": {
        "readme": "README.md",
        "destination": "./out/",
        "recurse": true
    },
    "plugins": [
        "plugins/markdown"
    ]
}
```

**Mit csinál ez a beállítás?**

**"include"**: ["src"]: Csak az src mappában keresi a kódokat.
**"readme"**: "README.md": Megmondja, hogy a főoldal a te README fájlod legyen.
**"destination"**: "./out/": Az out mappába generálja a HTML fájlokat.
**"recurse"**: true: Automatikusan bemegy az almappákba is.
**"plugins/markdown"**: Engedélyezi, hogy a JSDoc kommentjeidben is használhass Markdown formázást (pl. félkövér szöveg, listák).

- JSDoc futtatása a kofigurációs fájllal: 

```bash
npx jsdoc -c jsdoc.json
```

### A dokumentáció elérése

A dokumentáció az **OUT** mappában lesz elérhető

Sajnos a JSDOC sablonja nem mindig működik tökéletesen. érdemes lecserélni egy újabb sablonra.


Először telepítened kell a sablont a projektedbe függőségként. 

```Bash
npm install --save-dev docdash
```

A jsdoc.json frissítése

Beállítjuk, hoyg ne a régi sablont használja a jsdoc, henm az újat.
**jsdoc.json** fájl módosítása: 

```
{
    "source": {
        "include": ["src"],
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "opts": {
        "readme": "README.md",
        "destination": "./out/",
        "recurse": true,
        "template": "node_modules/docdash"
    },
    "plugins": [
        "plugins/markdown"
    ]
}
```

A dokumentáció újragenerálása


npm run doc

```


## A dokumentáció elérése

