// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;

function findMatches(word, pokemon){
  return pokemon.filter(pokemon => {
    const regex = new RegExp(word, 'gi');
    return pokemon.name.match(regex);
  });
};

var AllPokemonContainer = React.createClass({
  getInitialState: function(){
    return {
      pokemon: [],
      filteredPokemon: [],
      inputValue: ''
    }
  },
  componentWillMount: function(){
    $('.progress').show();
    $('#pokemon-input').prop('disabled', true);
    $.ajax('http://pokeapi.co/api/v2/pokemon/?limit=811').then(response => {
      this.setState({pokemon: response.results});
      if (response) {
        $('.progress').hide();
        $('#pokemon-input').prop('disabled', false);
      };
    });
  },
  logInfo: function(pokemon){
    localStorage.setItem('pokemonInfo', JSON.stringify(pokemon));
    this.props.router.navigate(`#pokemon/${pokemon.name}/`, {trigger: true});
  },
  handleInput: function(e){
    e.preventDefault();
    var value = e.target.value;
    var stateArr = this.state.pokemon;
    this.setState({inputValue: value});

    var newStateArr = findMatches(value, stateArr);
    this.setState({filteredPokemon: newStateArr});
  },
  render: function(){
    var pokemon = this.state.filteredPokemon;

    var pokemonListing = pokemon.map(pokemon => {
      return (
        <div id="pokemon-input" onClick={() => {this.logInfo(pokemon)}} className="col m4 offset-m4 center-align capital all-pokemon-style hoverable" key={pokemon.name}>{pokemon.name}</div>
      )
    });
    return (
      <Template>
        <div className="row">
          <div className="col m6 offset-m3 center-align">
            <h3>Search Pokemon</h3>
            Use the input below to search for any pokemon.
            A single letter will return pokemon as well as the full name.
          </div>
        </div>
        <div className="row">
          <div className="col m2 offset-m5 z-depth-2 input-style valign-wrapper">
            <input onChange={this.handleInput} type="text" placeholder="Pokemon Name" value={this.state.inputValue} />
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3">
            <div className="progress blue darken-4">
              <div className="indeterminate amber lighten-1"></div>
            </div>
          </div>
          {pokemonListing}
        </div>
      </Template>
    )
  }
});

module.exports = {
  AllPokemonContainer: AllPokemonContainer
};
