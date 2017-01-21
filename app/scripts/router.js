// Import Dependecies
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

// Import React components
var LandingContainer = require('./components/landing.jsx').LandingContainer;
var PokemonContainer = require('./components/pokemon.jsx').PokemonContainer;
var PokeNewsContainer = require('./components/pokenews.jsx').PokeNewsContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'poke-news/': 'pokenews',
    'pokemon/:pokemonId/': 'pokemon'
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
  pokemon: function(){
    ReactDom.render(
      React.createElement(PokemonContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
