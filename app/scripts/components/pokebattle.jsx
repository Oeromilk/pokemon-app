// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;

function getRandomPokemon(){
  return Math.floor(Math.random() * 811);
}

//var randomPokemon = Math.floor(Math.random() * 811);

function findMatches(word, pokemon){
  return pokemon.filter(pokemon => {
    const regex = new RegExp(word, 'gi');
    return pokemon.name.match(regex);
  });
};

var PokeBattleContainer = React.createClass({
  getInitialState: function(){
    return {
      url: 'http://pokeapi.co/api/v2/pokemon/',
      pokemon: [],
      filteredPokemon: [],
      inputValue: '',
      pickedPokemon: {}
    }
  },
  handleInput: function(e){

  },
  render: function(){
    var self = this;
    var url = this.state.url;
    var randomPokemon = getRandomPokemon();
    var randomUrl = url + randomPokemon.toString() + '/';
    $.ajax(randomUrl).then(function(response){
      self.setState({pickedPokemon: response});
    });

    console.log(this.state.pickedPokemon);
    return (
      <Template>
        test
      </Template>
    )
  }
});

module.exports = {
  PokeBattleContainer: PokeBattleContainer
};
