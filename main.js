const poke_container = document.getElementById('poke_container')
const pokemons_number = 151 //Indico el número de pokemones que quiero traer

const fetchPokemons = async () => { //función que llama a todos los pokemones, como va a tardar en responder es una función asincrónica 
    for(let i = 1; i <= pokemons_number; i++) { //iteramos pokemons_number
        await getPokemon(i)
    }
}


const getPokemon = async(id) => { //En esta función asincrónica voy a traer un solo pokemon y va a recibir como parámetro un id
    const url = 'https://pokeapi.co/api/v2/pokemon/'+id.toString()
    //console.log(url); te muestra en consola la url de la api
    const res = await fetch(url) //utilizo await para esperar la respuesta y la función fetch y por parámetro pasamos la url
    const pokemon = await res.json() //await para la conversión de json de la respuesta anterior
    //console.log(pokemon.name, pokemon.types);
    createPokemonCard(pokemon)
}

const createPokemonCard = (pokemon) => { //función para crear cards
    const {name, types, sprites, id} = pokemon //propiedades que me interesan de pokemon
    const type = types[0].type.name
    const poekemonEl = document.createElement('div') //crea mis etiquetas div
    poekemonEl.classList.add('pokemon')
    const pokeInnerHhtml = `
    <div class="card" style="width: 150px; border-radius: 20px;">
        <img src='${sprites.front_default}' class="card-img-top img-pokemon" alt='${name}'>
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${type}</p>
            <p class="card-text"># ${id}</p>
        </div>
    </div>
    `
    /*
    `<div class='img-container'>
        <img src='${sprites.front_default}' alt='${name}' />
    </div>
    <div class='info'>
        <span class='number'>${id}</span>
        <h3 class='name'>${name}</h3>
        <small class='type'>${type}</small>
    </div>`
    */ 
    //Nombre: ${pokemon.name},  
    //Tipo: ${pokemon.types[0].type.name}
    poekemonEl.innerHTML = pokeInnerHhtml
    poke_container.appendChild(poekemonEl)
}

fetchPokemons()