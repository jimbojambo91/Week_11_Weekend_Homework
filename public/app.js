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

// var populateEvolution = function(pokemonEvolChain){
//   console.log(pokemonEvolChain)
//   var div = document.getElementById("pokemon-container")
//   var evolutionDiv = document.createElement("div")
//   evolutionDiv.id = "evolution-container";
//   div.appendChild(evolutionDiv);
//   // if(pokemonEvolChain. )


// }

// var evolutionChainRequestComplete = function(){
//   //THIS REFERS TO XMLHTTPREQUEST JUST NOW
//   if(this.status !== 200) return;

//   var jsonString = this.responseText;
//   var pokemonEvolChain = JSON.parse(jsonString);

//   populateEvolution(pokemonEvolChain);
// }

// var evolutionRequestComplete = function(){
//   //THIS REFERS TO XMLHTTPREQUEST JUST NOW
//   if(this.status !== 200) return;

//   var jsonString = this.responseText;
//   var pokemonEvol = JSON.parse(jsonString);

//   makeRequest(pokemonEvol.evolution_chain.url, evolutionChainRequestComplete)
// }


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
  var nextButton = document.getElementById("next-pokemon")
  var previousButton = document.getElementById("previous-pokemon")
  var searchButton = document.getElementById("search-button")
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

  



  // var evolutionUrl = "http://pokeapi.co/api/v2/pokemon-species/" + pokemon.id + "/"
  // makeRequest(evolutionUrl, evolutionRequestComplete)

  var handleStatsButtonClick = function(event){
    if(baseStatsFlag === false){
      var baseStatsTable = document.createElement('table');
      var firstRow = document.createElement('tr');
      var firstColumn = document.createElement('td');
      var secondColumn = document.createElement('td');
      var secondRow = document.createElement('tr');
      var secondFirstColumn = document.createElement('td');
      var secondSecondColumn = document.createElement('td');
      var thirdRow = document.createElement('tr');
      var thirdFirstColumn = document.createElement('td');
      var thirdSecondColumn = document.createElement('td');
      var fourthRow = document.createElement('tr');
      var fourthFirstColumn = document.createElement('td');
      var fourthSecondColumn = document.createElement('td');
      var fifthRow = document.createElement('tr');
      var fifthFirstColumn = document.createElement('td');
      var fifthSecondColumn = document.createElement('td');
      var sixthRow = document.createElement('tr');
      var sixthFirstColumn = document.createElement('td');
      var sixthSecondColumn = document.createElement('td');
      var seventhRow = document.createElement('tr');
      var seventhFirstColumn = document.createElement('td');
      var seventhSecondColumn = document.createElement('td');

      baseStatsTable.id = "stat-table";
      firstColumn.innerText = ("Stat Name");
      secondColumn.innerText = ("Value");
      secondFirstColumn.innerText = capitialiser(pokemon.stats[0].stat.name)
      secondSecondColumn.innerText = pokemon.stats[0].base_stat
      thirdFirstColumn.innerText = capitialiser(pokemon.stats[1].stat.name)
      thirdSecondColumn.innerText = pokemon.stats[1].base_stat
      fourthFirstColumn.innerText = capitialiser(pokemon.stats[2].stat.name)
      fourthSecondColumn.innerText = pokemon.stats[2].base_stat
      fifthFirstColumn.innerText = capitialiser(pokemon.stats[3].stat.name)
      fifthSecondColumn.innerText = pokemon.stats[3].base_stat
      sixthFirstColumn.innerText = capitialiser(pokemon.stats[4].stat.name)
      sixthSecondColumn.innerText = pokemon.stats[4].base_stat
      seventhFirstColumn.innerText = capitialiser(pokemon.stats[5].stat.name)
      seventhSecondColumn.innerText = pokemon.stats[5].base_stat
      firstRow.appendChild(firstColumn);
      firstRow.appendChild(secondColumn);
      secondRow.appendChild(secondFirstColumn);
      secondRow.appendChild(secondSecondColumn);
      thirdRow.appendChild(thirdFirstColumn);
      thirdRow.appendChild(thirdSecondColumn);
      fourthRow.appendChild(fourthFirstColumn);
      fourthRow.appendChild(fourthSecondColumn);
      fifthRow.appendChild(fifthFirstColumn);
      fifthRow.appendChild(fifthSecondColumn);
      sixthRow.appendChild(sixthFirstColumn);
      sixthRow.appendChild(sixthSecondColumn);
      seventhRow.appendChild(seventhFirstColumn);
      seventhRow.appendChild(seventhSecondColumn);
      baseStatsTable.appendChild(firstRow);
      baseStatsTable.appendChild(secondRow);
      baseStatsTable.appendChild(thirdRow);
      baseStatsTable.appendChild(fourthRow);
      baseStatsTable.appendChild(fifthRow);
      baseStatsTable.appendChild(sixthRow);
      baseStatsTable.appendChild(seventhRow);
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

  var handleNextButtonClick = function(){
    if(pokemon.id === 721 ){
      nextNum = 1;
    } else {
      nextNum = pokemon.id+1
    }
    
    nextUrl = "http://pokeapi.co/api/v2/pokemon/" + nextNum;
    if(heading !== undefined){
      div.removeChild(heading)
    }
    if(statsDiv !== undefined){
      div.removeChild(statsDiv) 
    }
    if(imgDiv !== undefined){
      div.removeChild(imgDiv) 
    }  
    makeRequest(nextUrl, requestComplete);

  }

  var handlePreviousButtonClick = function(){
    if(pokemon.id === 1 ){
      nextNum = 721;
    } else {
      nextNum = pokemon.id-1
    }
    
    nextUrl = "http://pokeapi.co/api/v2/pokemon/" + nextNum;
    if(heading !== undefined){
      div.removeChild(heading)
    }
    if(statsDiv !== undefined){
      div.removeChild(statsDiv) 
    }
    if(imgDiv !== undefined){
      div.removeChild(imgDiv) 
    }  
    makeRequest(nextUrl, requestComplete);

  }

  var handleSearchButtonClick = function(){
    
    var input = document.getElementById("pokemon-search")
    url = "http://pokeapi.co/api/v2/pokemon/" + input.value;
    console.log(div);
    if(heading !== undefined){
      div.removeChild(heading)
    }
    if(statsDiv !== undefined){
      div.removeChild(statsDiv) 
    }
    if(imgDiv !== undefined){
      div.removeChild(imgDiv) 
    }   
    makeRequest(url, requestComplete);

  }

  baseStatsButton.addEventListener("click", handleStatsButtonClick);
  nextButton.addEventListener("click", handleNextButtonClick);
  previousButton.addEventListener("click", handlePreviousButtonClick);
  searchButton.addEventListener("click", handleSearchButtonClick);



  // TODO change background color on certain elements depending on type
  // document.body.style.backgroundColor = 'blue'
  };

  var capitialiser = function(string){
    capitialisdString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitialisdString;
  }

window.addEventListener('load', app)