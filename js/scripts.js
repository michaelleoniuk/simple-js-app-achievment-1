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
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (showDetails) {
    console.log(pokemon.name);
    });
    }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };

})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  
});