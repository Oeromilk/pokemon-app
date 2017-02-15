// Import Dependecies
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

// Import React components
var LandingContainer = require('./components/landing.jsx').LandingContainer;
var PokemonContainer = require('./components/pokemon.jsx').PokemonContainer;
var PokeNewsContainer = require('./components/pokenews.jsx').PokeNewsContainer;
var PokeBattleContainer = require('./components/pokebattle.jsx').PokeBattleContainer;
var AllPokemonContainer = require('./components/allpokemon.jsx').AllPokemonContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'poke-news/': 'pokenews',
    'pokemon/': 'pokemon',
    'all-pokemon/': 'allPokemon',
    'poke-battle/': 'pokeBattle',
    'pokemon/:pokemonId/': 'pokemonId'
  },
  index: function(pokemonId){
    ReactDom.render(
      React.createElement(LandingContainer, {router: this, pokemonId: pokemonId}),
      document.getElementById('app')
    );
  },
  pokenews: function(){
    ReactDom.render(
      React.createElement(PokeNewsContainer),
      document.getElementById('app')
    );
  },
  pokemon: function(pokemonId){
    ReactDom.render(
      React.createElement(LandingContainer, {router: this, pokemonId: pokemonId}),
      document.getElementById('app')
    );
  },
  allPokemon: function(){
    ReactDom.render(
      React.createElement(AllPokemonContainer, {router: this}),
      document.getElementById('app')
    );
  },
  pokeBattle: function(){
    ReactDom.render(
      React.createElement(PokeBattleContainer),
      document.getElementById('app')
    );
  },
  pokemonId: function(){
    ReactDom.render(
      React.createElement(PokemonContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
