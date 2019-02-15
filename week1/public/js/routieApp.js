var request = new XMLHttpRequest();

request.onload = function () {

var data = JSON.parse(this.response);
var element = document.getElementById("list");

console.log(window.location);

var initializor = function(){
  if (window.location.hash == "") {
    window.location.hash = "home";
  }
}

initializor();

routie({
  'home': function(){
    console.log("home");
    element.innerHTML = data.map((item, i) => `
      <div class="catBreed" >
        <a href ="#catInfo?id=${item.id}">
          <h1>${item.name}</h1>
          <img src="./public/img/${item.id}.jpg" class="imgCat">
          <p>${item.origin} <img src="./public/img/${item.origin}.png" class="imgFlag"></p>
          <p>${item.temperament}</p>
        </a>
      </div>
      `).join("");
  },
  'catInfo/?:id': function(id){
    // console.log("-------cat id", id.substring(4));
    let catId = id.substring(4);
    renderDetail(catId);
  }
}
);

function listAllCatBreeds(){

}

function renderDetail(renderId){
  element.innerHTML = data.map((item, i) => `
    <div class="catBreed" >
      <a href ="#catInfo?id=${item.id}">
        <img src="./public/img/${item.id}.jpg" class="imgCat">
        <p>${item.origin} <img src="./public/img/${item.origin}.png" class="imgFlag"></p>
      </a>
    </div>
    `).join("");
}
}

request.open("GET", "https://api.thecatapi.com/v1/breeds", "true");
request.send();
