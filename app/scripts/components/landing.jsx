// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

var PokemonListing = React.createClass({
  logInfo: function(url){
    console.log(url);
  },
  render: function(){
    var pokemon = this.props.pokemon;

    var pokemonList = pokemon.map(pokemon => {
      return (
        <a onClick={() => {this.logInfo(pokemon.url)}} key={pokemon.name} className="collection-item">{pokemon.name}</a>
      )
    });
    return (
      <div id="pokemonList" className="collection z-depth-3">
        {pokemonList}
      </div>
    )
  }
});

var LandingContainer = React.createClass({
  getInitialState: function(){
    return {
      response: {},
      url: 'http://pokeapi.co/api/v2/',
      pokemon: []
    }
  },
  loadPokemon: function(e){
    var self = this;
    const url = `${this.state.url}pokemon/`;
    $.ajax(url).then(function(response){
      if(response){
        $('#loadButton').hide();
        $('#pokemonList').show();
      }
      self.setState({response: response});
      self.setState({pokemon: response.results});
    });
  },
  componentDidMount: function(){
    $('#pokemonList').hide();
  },
  render: function(){
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col m6 offset-m3 center-align">
              <h1>Browse Pokemon</h1>
              <p>Click the button below to load all Pokemon currently out.</p>
            </div>
          </div>
          <div className="row">
            <div className="col m6 offset-m3 center-align">
              <a onClick={this.loadPokemon} id="loadButton" className="waves-effect waves-light btn-large">Pokemon</a>
              <PokemonListing pokemon={this.state.pokemon}/>
            </div>
          </div>
          <div className="row">
            <div className="col m6 offset-m3 center-align">
              <ul id="pokemonList" className="pagination">
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  LandingContainer: LandingContainer
};
