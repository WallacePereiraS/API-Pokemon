const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaDePokemons = async (req, res) => {
  const { pagina } = req.query
  try {
    const listaPokemons = await listarPokemons(pagina)

    if (pagina > 130) {
      return res.status(400).json('Esta lista só possui 130 páginas')
    }

    return res.status(200).json(listaPokemons)
  } catch (error) {
    return res.status(400).json({ mensagem: "Erro de servidor." })
  }
}

const detalheDePokemon = async (req, res) => {
  const { idOuNome } = req.params
  try {
    if (idOuNome > 1017) {
      return res.status(400).json('Nesta lista só possuem 1017 pokemons')
    }
    const pokemonEncontrado = await detalharPokemon(idOuNome)
    const { id, name, weight, base_experience, abilities, types, sprites } = pokemonEncontrado

    return res.status(200)
      .send(
        `Nome: ${name} <br> 
        Número identificador: ${id} <br> 
        Tipo primário: ${types[0].type.name} <br> 
        Peso: ${weight} <br> 
        Experiência básica: ${base_experience} <br> 
        Habilidades: ${abilities[0].ability.name} e ${abilities[1].ability.name} <br> 
        Imagem: ${sprites.front_shiny}`
      )

  } catch (error) {
    console.log()
    if (error.response.status == 404) {
      return res.status(400).json({ mensagem: "Este pokemon não existe nesta lista ou o nome está incorreto." })
    }
    return res.status(400).json({ mensagem: "Erro de servidor." })
  }


}

module.exports = {
  listaDePokemons,
  detalheDePokemon
}