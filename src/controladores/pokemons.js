const utilsPlayground = require('utils-playground')
const { listarPokemons, detalharPokemon } = require('utils-playground')

const pokemons = async (req, res) => {
  const { pagina } = req.query

  const listaPokemons = await listarPokemons(pagina || 1)

  if (pagina > 130) {
    return res.status(400).json('Esta lista só possui 130 páginas')
  }

  return res.status(200).json(listaPokemons)
}

const pokemon = async (req, res) => {
  const { idOuNome } = req.params


  if (idOuNome > 1017) {
    return res.status(400).json('Nesta lista só possuem 1017 pokemons')
  }
  const pokemonEncontrado = await detalharPokemon(idOuNome)

  const { id, name, weight, base_experience, forms, abilities, types, sprites } = pokemonEncontrado

  const nome = forms.filter((word) => word.name === String(idOuNome))

  return res.status(200).send(`Nome: ${name} <br> Número identificador: ${id} <br> Tipo primário: ${types[0].type.name} <br> Peso: ${weight} <br> Experiência básica: ${base_experience} <br> Habilidades: ${abilities[0].ability.name} e ${abilities[1].ability.name} <br> Imagem: ${sprites.front_shiny}`)
}

module.exports = {
  pokemons,
  pokemon
}