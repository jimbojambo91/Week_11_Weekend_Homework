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
  populatePokemon(pokemon)
}

var populatePokemon = function(pokemon){
  var div = document.getElementById('pokemon-container')
  var imgDiv = document.createElement('div')
  var heading = document.createElement('h1')
  var frontImg = document.createElement('img')
  capitialisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  heading.innerText = capitialisedName;
  frontImg.src = pokemon.sprites.front_default;

  imgDiv.appendChild(frontImg)
  div.appendChild(heading)
  div.appendChild(imgDiv)
  };

window.addEventListener('load', app)