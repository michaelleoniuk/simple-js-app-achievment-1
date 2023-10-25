let pokemonList = [
  { 
    name: 'Buzz', 
    height: '4', 
    type: ['runner', 'speed']
  },
  { 
    name: 'Solo', 
    height: '3', 
    type: ['grass', 'sleep']
  },
  { 
    name: 'Vulcano', 
    height: '6', 
    type: ['energy', 'hunting']

  }];    

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' has ' + pokemon.height + ' inches and is described by ' + pokemon.type);
});