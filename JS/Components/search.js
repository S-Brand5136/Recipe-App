class request {
  
  static searchByMainIng(mainIng) {
    //   create promise
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        // make call to api
        xhr.open(
          "GET",
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIng}`,
          true
        );

        // on success
        xhr.onload = function() {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        };

        xhr.send();
    });
  }

  static searchByCategory(category){
    //   create promise
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      // make call to api
      xhr.open(
        "GET",
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        true
      );

      // on success
      xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      };

      xhr.send();
  });
  }

  static searchByArea(area){
    //   create promise
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      // make call to api
      xhr.open(
        "GET",
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
        true
      );

      // on success
      xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      };

      xhr.send();
  });
  }

  static getMealDetails(id){
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open(
          "GET",
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
          true
        );

        xhr.onload = function() {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        };

        xhr.send();
    });
  }

}


export default request;
