// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

var PokemonListing = React.createClass({
  logInfo: function(pokemon){
    localStorage.setItem('pokemonInfo', JSON.stringify(pokemon));
  },
  render: function(){
    var pokemon = this.props.pokemon;

    var pokemonList = pokemon.map(pokemon => {
      return (
        <a onClick={() => {this.logInfo(pokemon)}} key={pokemon.name} href={`#pokemon/${pokemon.name}/`} className="collection-item">{pokemon.name}</a>
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
      url: 'https://pokemon-proxy-server.herokuapp.com/pokemon',
      pokemon: []
    }
  },
  loadPokemon: function(newUrl){
    var self = this;
    const url = this.state.url;
    $('.progress').show();
    $('#loadButton').hide();
    if (newUrl){
      $.ajax(newUrl).then(function(response){
        if(response){
          $('.progress').hide();
          $('#pokemonList').show();
          $('#prevButton').show();
          $('#nextButton').show();
        }
        if (response.previous === null){
          $('#prevButton').addClass('disabled');
        }
        if (response.next === null){
          $('#nextButton').addClass('disabled');
        }
        self.setState({response: response});
        self.setState({pokemon: response.results});
      });
    } else {
      $.getJSON(url).then(function(response){
        console.log(response);
        if(response){
          $('.progress').hide();
          $('#pokemonList').show();
          $('#prevButton').show();
          $('#nextButton').show();
        }
        if (response.previous === null){
          $('#prevButton').addClass('disabled');
        }
        if (response.next === null){
          $('#nextButton').addClass('disabled');
        }
        self.setState({response: response});
        self.setState({pokemon: response.results});
      });
    }

  },
  componentDidMount: function(){
    $('#prevButton').hide();
    $('#nextButton').hide();
    $('.progress').hide();
    $('#pokemonList').hide();
  },
  render: function(){
    var count = this.state.response.count;
    var next = this.state.response.next;
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
              <a onClick={() => {this.loadPokemon()}} id="loadButton" className="waves-effect waves-light btn-large">Pokemon</a>
                <div className="progress blue darken-4">
                  <div className="indeterminate amber lighten-1"></div>
                </div>
              <PokemonListing pokemon={this.state.pokemon}/>
            </div>
          </div>
          <div className="row">
            <div className="col m6 offset-m3 center-align">
              <ul className="pagination">
                <li id="prevButton" className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li onClick={() => {this.loadPokemon(next)}} id="nextButton" className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
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
