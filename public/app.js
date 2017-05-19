var app = function(){
  var url = "http://pokeapi.co/api/v2/pokemon/1"
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function(){
  //THIS REFERS TO XMLHTTPREQUEST JUST NOW
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var pokemon = JSON.parse(jsonString);

  console.log(pokemon)
}

window.addEventListener('load', app)