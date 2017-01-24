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
        <a onClick={() => {this.logInfo(pokemon)}} key={pokemon.name} href={`#pokemon/${pokemon.name}/`} className="collection-item  blue darken-4 white-text">{pokemon.name}</a>
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
  prevPokemon: function(prev){
    var self = this;
    $('.progress').show();
    $('#loadButton').hide();
    $("html, body").animate({ scrollTop: 0 }, "fast");
    $.ajax(prev).then(function(response){
      if(response){
        $('.progress').hide();
        $('#pokemonList').show();
        $('#prevButton').show();
        $('#nextButton').show();
      }
      self.setState({response: response});
      self.setState({pokemon: response.results});
    });
  },
  nextPokemon: function(next){
    var self = this;
    $('.progress').show();
    $('#loadButton').hide();
    $("html, body").animate({ scrollTop: 0 }, "fast");
    $.ajax(next).then(function(response){
      if(response){
        $('.progress').hide();
        $('#pokemonList').show();
        $('#prevButton').show();
        $('#prevButton').removeClass('disabled');
        $('#nextButton').show();
      }
      self.setState({response: response});
      self.setState({pokemon: response.results});
    });
  },
  loadPokemon: function(){
    var self = this;
    const url = this.state.url;
    $('.progress').show();
    $('#loadButton').hide();
    $.getJSON(url).then(function(response){
      console.log(response);
      if(response){
        $('.progress').hide();
        $('#pokemonList').show();
        $('#prevButton').show();
        $('#nextButton').show();
      }
      self.setState({response: response});
      self.setState({pokemon: response.results});
    });
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
    var prev = this.state.response.previous;
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3 center-align">
              <h1>Browse Pokemon</h1>
              <p>Click the button below to load all Pokemon currently out.</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 offset-m3 center-align">
              <a onClick={() => {this.loadPokemon()}} id="loadButton" className="waves-effect blue waves-light btn-large">Pokemon</a>
                <div className="progress blue darken-4">
                  <div className="indeterminate amber lighten-1"></div>
                </div>
              <PokemonListing pokemon={this.state.pokemon}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 offset-m3 center-align">
              <ul className="pagination">
                <li onClick={() => {this.prevPokemon(prev)}} id="prevButton" className="waves-effect"><a href="#"><i className="material-icons">chevron_left</i></a></li>
                <li onClick={() => {this.nextPokemon(next)}} id="nextButton" className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
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
