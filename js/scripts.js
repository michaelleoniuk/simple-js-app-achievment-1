let pokemonRepository = (function () {
  
  let pokemonList = [  
    { 
     name: 'Buzz', 
     height: 4, 
     type: ['runner', 'speed']
    },
    { 
    name: 'Solo', 
    height: 3, 
    type: ['grass', 'sleep']
    },
    { 
    name: 'Vulcano', 
    height: 6, 
    type: ['energy', 'hunting']

    }
  ]

  function getAll () {
    return pokemonList;
  }
  
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
    
  }

  let unorderedList = document.querySelector('ul');

})()

pokemonRepository.getAll().forEach(function(pokemon) {

})