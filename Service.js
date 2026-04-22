export default class Service {

  constructor() {
   
  }

  getData(vegpont, callBack) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
        callBack(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
