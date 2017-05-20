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
  var statsDiv = document.createElement('div')
  var heading = document.createElement('h1')
  var spriteHeading = document.createElement('h2')
  var statsHeading = document.createElement('h2')
  var statsName = document.createElement('p')
  var statsType = document.createElement('p')
  var statsType2 = document.createElement('p')
  var statsPokedexNum = document.createElement('p')
  var statsHeight = document.createElement('p')
  var statsWeight = document.createElement('p')
  var normalSpriteHeading = document.createElement('h3')
  var shinySpriteHeading = document.createElement('h3')
  var frontImg = document.createElement('img')
  var backImg = document.createElement('img')
  var shinyFrontImg = document.createElement('img')
  var shinyBackImg = document.createElement('img')
  statsDiv.id = "stats-container"
  imgDiv.id = "sprite-container"
  capitialisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  heading.innerText = capitialisedName;
  statsHeading.innerText = "Stats";
  statsName.innerText = "Name: " + capitialisedName;
  statsType.innerText = "Type: " + pokemon.types[1].type.name;
  statsType2.innerText = "Secondary Type: " + pokemon.types[0].type.name;
  spriteHeading.innerText = "Sprites";
  normalSpriteHeading.innerText = "Normal";
  shinySpriteHeading.innerText = "Shiny";
  frontImg.src = pokemon.sprites.front_default;
  backImg.src = pokemon.sprites.back_default;
  shinyFrontImg.src = pokemon.sprites.front_shiny;
  shinyBackImg.src = pokemon.sprites.back_shiny;

  imgDiv.appendChild(spriteHeading);
  imgDiv.appendChild(normalSpriteHeading);
  imgDiv.appendChild(frontImg);
  imgDiv.appendChild(backImg);
  imgDiv.appendChild(shinySpriteHeading);
  imgDiv.appendChild(shinyFrontImg);
  imgDiv.appendChild(shinyBackImg);
  statsDiv.appendChild(statsHeading);
  statsDiv.appendChild(statsName);
  statsDiv.appendChild(statsType);
  statsDiv.appendChild(statsType2);
  div.appendChild(heading);
  div.appendChild(statsDiv);
  div.appendChild(imgDiv);
  };

window.addEventListener('load', app)