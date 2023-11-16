const express = require('express')
const { listaDePokemons, detalheDePokemon } = require('./controladores/pokemons')
const rotas = express()

rotas.get('/pokemon', listaDePokemons)
rotas.get('/pokemon/:idOuNome', detalheDePokemon)

module.exports = rotas