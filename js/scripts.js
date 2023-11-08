
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  
  
    function getAll() {
        return pokemonList;
    }
  
    function add(pokemon) {
        if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
        }
    }
  
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.row');
  
        let listpokemon = document.createElement('li');
        listpokemon.classList.add('list-group-item');
        listpokemon.classList.add('col-12'); 
        listpokemon.classList.add('col-md-12'); 
  
        let button = document.createElement('button');
        button.classList.add('btn'); 
        button.classList.add('btn-block');
        button.setAttribute('data-toggle', 'modal'); 
        button.setAttribute('data-target', '#modal'); 
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        
        listpokemon.appendChild(button);
        
        pokemonList.appendChild(listpokemon);
        
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }
  
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
  
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            
            item.imageUrl = details.sprites.front_default.replace("https://raw.githubusercontent.com/PokeAPI/sprites/master/", "");
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
  
    function showDetails(item){
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        });
    }
  
    
    function showModal(item) {
        let modalBody = document.querySelector('.modal-body');
        let modalTitle = document.querySelector('.modal-title');
    
        
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';
  
        
        let nameElement = document.createElement('h1');
        nameElement.innerText = item.name;
        
        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute('src', item.imageUrl);
        imageElement.classList.add('float-right'); 
        
        let heightElement = document.createElement('p');
        heightElement.innerText = 'height: ' + item.height;
        
        function typeCount(item) {
            if(item.types.length === 2) {
                return item.types[0].type.name + ', ' + item.types[1].type.name;
            } else {
                return item.types[0].type.name;
            }
        }
        let typeElement = document.createElement('p');
        typeElement.innerText = 'type: ' + typeCount(item);
    
        
        modalTitle.appendChild(nameElement);
        modalBody.appendChild(imageElement);
        modalBody.appendChild(heightElement);
        modalBody.appendChild(typeElement);
    }    
  
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };
  })();
  
  pokemonRepository.loadList().then(function() {
    
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    }); 
  })