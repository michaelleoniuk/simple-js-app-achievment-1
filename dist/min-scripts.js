let pokemonRepository=function(){let t=[];function e(){return t}function n(e){"object"==typeof e&&t.push(e)}function o(t){pokemonRepository.loadDetails(t).then(function(){i(t)})}function i(t){var e;let n=document.querySelector(".modal-body"),o=document.querySelector(".modal-title");o.innerHTML="",n.innerHTML="";let i=document.createElement("h1");i.innerText=t.name;let a=document.createElement("img");a.classList.add("modal-img"),a.setAttribute("src",t.imageUrl),a.classList.add("float-right");let l=document.createElement("p");l.innerText="height: "+t.height;let s=document.createElement("p");s.innerText="type: "+(2===(e=t).types.length?e.types[0].type.name+", "+e.types[1].type.name:e.types[0].type.name),o.appendChild(i),n.appendChild(a),n.appendChild(l),n.appendChild(s)}return{getAll:e,add:n,addListItem:function t(e){let n=document.querySelector(".row"),i=document.createElement("li");i.classList.add("list-group-item"),i.classList.add("col-12"),i.classList.add("col-md-12");let a=document.createElement("button");a.classList.add("btn"),a.classList.add("btn-block"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#modal"),a.innerText=e.name,a.classList.add("button-class"),i.appendChild(a),n.appendChild(i),a.addEventListener("click",function(){o(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?offset=15&limit=15").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrl=t.sprites.front_default.replace("https://raw.githubusercontent.com/PokeAPI/sprites/master/",""),e.height=t.height,e.types=t.types}).catch(function(t){console.error(t)})},showDetails:o,showModal:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});