var request = new XMLHttpRequest();

request.onload = function () {

  var data = JSON.parse(this.response);
  var element = document.getElementById("list");
  element.insertAdjacentHTML("afterend", "<div class='catbreed'></div>");

  
  // var catArray = element.innerHTML = data.map(item);
//   element.innerHTML = data.map((item, i) => `
//     <div class="catBreed">
//       <h1>${item.name}</h1>
//       <img src="./public/img/${item.id}.jpg" class="imgCat">
//       <p>${item.origin} <img src="./public/img/${item.origin}.png" class="imgFlag"></p>
//       <p>${item.temperament}</p>
//     </div>
//     ${catArray = {
//       breedId: item.id,
//       origin: item.origin,
//       temperament: item.temperament
//     }
//     `).join("");
//
//   console.log(catArray);
// }

request.open("GET", "https://api.thecatapi.com/v1/breeds", "true");
request.send();
