
var request = new XMLHttpRequest();

function addElements() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}


request.addEventListener('load', addElements);
request.open('GET', 'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes', true);
request.send();
