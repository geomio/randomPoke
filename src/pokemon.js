export default class Pokemon {
  static apiCall() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      console.log(Math.floor((Math.random() * 898) + 1));
      const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 898) + 1)}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
