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
  var baseStatsFlag = false;

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
  var baseStatsButton = document.createElement('button')
  statsDiv.id = "stats-container"
  imgDiv.id = "sprite-container"
  capitialisedName = capitialiser(pokemon.name);
  heading.innerText = capitialisedName;
  statsHeading.innerText = "Stats";
  statsName.innerText = "Name: " + capitialisedName;
    if(pokemon.types[1] === undefined){
      statsType.innerText = "Type: " + capitialiser(pokemon.types[0].type.name);
    } else {
      statsType.innerText = "Type: " + capitialiser(pokemon.types[1].type.name);
      statsType2.innerText = "Secondary Type: " + capitialiser(pokemon.types[0].type.name);
    }
  statsPokedexNum.innerText = "Pokedex Num: " + pokemon.id
  statsHeight.innerText = "Height: " + pokemon.height
  statsWeight.innerText = "Weight: " + pokemon.weight
  
  spriteHeading.innerText = "Sprites";
  normalSpriteHeading.innerText = "Normal";
  shinySpriteHeading.innerText = "Shiny";
  frontImg.src = pokemon.sprites.front_default;
  backImg.src = pokemon.sprites.back_default;
  shinyFrontImg.src = pokemon.sprites.front_shiny;
  shinyBackImg.src = pokemon.sprites.back_shiny;
  baseStatsButton.innerText = "Show Base Stats"

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
  statsDiv.appendChild(statsPokedexNum);
  statsDiv.appendChild(statsHeight);
  statsDiv.appendChild(statsWeight);
  statsDiv.appendChild(baseStatsButton);
  div.appendChild(heading);
  div.appendChild(statsDiv);
  div.appendChild(imgDiv);

  var handleButtonClick = function(event){
    if(baseStatsFlag === false){
      var baseStatsTable = document.createElement('table');
      var firstRow = document.createElement('tr');
      var firstColumn = document.createElement('td');
      var secondColumn = document.createElement('td');
      var secondRow = document.createElement('tr');
      var secondFirstColumn = document.createElement('td');
      var secondSecondColumn = document.createElement('td');

      baseStatsTable.id = "stat-table";
      firstColumn.innerText = ("Stat Name");
      secondColumn.innerText = ("Value");
      secondFirstColumn.innerText = capitialiser(pokemon.stats[0].stat.name)
      secondSecondColumn.innerText = pokemon.stats[0].base_stat
      firstRow.appendChild(firstColumn);
      firstRow.appendChild(secondColumn);
      secondRow.appendChild(secondFirstColumn);
      secondRow.appendChild(secondSecondColumn);
      baseStatsTable.appendChild(firstRow);
      baseStatsTable.appendChild(secondRow);
      statsDiv.appendChild(baseStatsTable);
      baseStatsButton.innerText = "Hide"
      baseStatsFlag = true;
    } else {
      var statTable = document.getElementById("stat-table");
      statsDiv.removeChild(statTable)
      baseStatsButton.innerText = "Show Base Stats"
      baseStatsFlag = false;
    }
    

    }

  baseStatsButton.addEventListener("click", handleButtonClick);



  // TODO change background color on certain elements depending on type
  // document.body.style.backgroundColor = 'blue'
  };

  var capitialiser = function(string){
    capitialisdString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitialisdString;
  }

window.addEventListener('load', app)