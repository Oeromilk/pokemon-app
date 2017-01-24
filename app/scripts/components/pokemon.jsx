// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

function firstChar(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var typeColor = [
  {
  'type': 'normal',
  'color': '#A8A77A'
  },
  {
  'type': 'fire',
  'color': '#EE8130'
  },
  {
  'type': 'water',
  'color': '#6390F0'
  },
  {
  'type': 'electric',
  'color': '#F7D02C'
  },
  {
  'type': 'grass',
  'color': '#7AC74C'
  },
  {
  'type': 'ice',
  'color': '#96D9D6'
  },
  {
  'type': 'fighting',
  'color': '#C22E28'
  },
  {
  'type': 'poison',
  'color': '#A33EA1'
  },
  {
  'type': 'ground',
  'color': '#E2BF65'
  },
  {
  'type': 'flying',
  'color': '#A98FF3'
  },
  {
  'type': 'psychic',
  'color': '#F95587'
  },
  {
  'type': 'bug',
  'color': '#A6B91A'
  },
  {
  'type': 'rock',
  'color': '#B6A136'
  },
  {
  'type': 'ghost',
  'color': '#735797'
  },
  {
  'type': 'dragon',
  'color': '#6F35FC'
  },
  {
  'type': 'dark',
  'color': '#705746'
  },
  {
  'type': 'steel',
  'color': '#B7B7CE'
  },
  {
  'type': 'fairy',
  'color': '#D685AD'
  }
];

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

var PokemonDetail = React.createClass({
  getInitialState: function(){
    return {
      pokeInfo: {},
      sprites: {},
      types: [],
      stats: [],
      abilities: []
    }
  },
  changeImage: function(backUrl, frontUrl){
    $('#poke-img').attr('src', backUrl);
    $('#poke-img').mouseleave(() => {
      $('#poke-img').attr('src', frontUrl);
    });
  },
  componentWillMount: function(){
    var pokeUrl = this.props.pokemonInfo.url;
    $.ajax(pokeUrl).then(response => {
      console.log('pokemon info', response);
      this.setState({pokeInfo: response});
      this.setState({sprites: response.sprites});
      this.setState({types: response.types});
      this.setState({stats: response.stats});
      this.setState({abilities: response.abilities});
      if(response){
        $('.content').show();
        $('.progress').hide();
      }
    });
  },
  componentDidMount: function(){
    $('.content').hide();
  },
  render: function(){
    var info = this.state.pokeInfo;
    var sprites = this.state.sprites;
    var types = this.state.types;
    var stats = this.state.stats;
    var abilities = this.state.abilities;

    var abilityListing = abilities.map(ability => {
      console.log('ability', ability.ability.name);
      return (
        <div key={ability.ability.name} className="capital ability-style z-depth-3">
          {ability.ability.name}
        </div>
      )
    });

    var statsListing = stats.map(stat => {
      return (
        <div key={stat.stat.name} className="stat-style z-depth-3">
          <div className="capital">{stat.stat.name}</div>
          <div>{stat.base_stat}</div>
        </div>

      )
    });

    var typesLiting = types.map(type => {
      var color = typeColor.find(color => color.type === type.type.name);
      return (
        <div id="type-style" className="z-depth-3" style={{backgroundColor: color.color}} key={type.type.name}>{type.type.name}</div>
        )
    });

    return (
      <div>
        <div className="progress blue darken-4">
          <div className="indeterminate amber lighten-1"></div>
        </div>
        <div id="rounded-border" className="col s12 m6 offset-m3 z-depth-2 center-align content">
          <h3>PokeInfo</h3>
          <div onMouseOver={() => {this.changeImage(sprites.back_default, sprites.front_default)}} className="grey lighten-4">
            <img id="poke-img" className="responsive-img" src={sprites.front_default} />
          </div>
          <div>
            <div className="capital">{info.name}</div>
            <div className="capital"># {info.id}</div>
            {typesLiting}
            <div className="capital">
              Height {info.height}m
              Weight {info.weight}kg
            </div>
          </div>
          <div>
            <h4>Stats</h4>
            {statsListing}
          </div>
          <div>
            <h4>Abilities</h4>
            {abilityListing}
          </div>
        </div>
      </div>
    )
  }
});

var PokemonContainer = React.createClass({
  getInitialState: function(){
    return {
      pokemonInfo: {}
    }
  },
  componentWillMount: function(){
    $('.progress').show();
    var pokemonInfo = JSON.parse(localStorage.getItem('pokemonInfo'));
    this.setState({pokemonInfo: pokemonInfo});
  },
  render: function(){
    return (
      <Template>
        <div className="container">
          <div className="row">
            <PokemonDetail pokemonInfo={this.state.pokemonInfo} />
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  PokemonContainer: PokemonContainer
};
