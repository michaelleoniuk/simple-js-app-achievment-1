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
  },
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=6) {
      document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") - Wow, it is huge Pokemon");
    }else {
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") ");
  }
  }
