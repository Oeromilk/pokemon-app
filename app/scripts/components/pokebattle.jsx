// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var typeInfo = require('../utilities/effectiveness.js').typeInfo;

var Template = require('./templates/navbar.jsx').Template;
var BattleScene = require('./battlescene.jsx').BattleSceneContainer;

function getRandomPokemon(){
  return Math.floor(Math.random() * 811);
};

function findMatches(word, pokemon){
  return pokemon.filter(pokemon => {
    const regex = new RegExp(word, 'gi');
    return pokemon.name.match(regex);
  });
};

var PokeBattleContainer = React.createClass({
  getInitialState: function(){
    return {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: [],
      filteredPokemon: [],
      inputValue: '',
      pickedPokemon: {},
      playerPokemon: {}
    }
  },
  componentWillMount: function(){
    // $('#pokemon-input').prop('disabled', true);
    $('.progress-ppoke').show();
    $.ajax('https://pokeapi.co/api/v2/pokemon/?limit=811').then(response => {
      this.setState({pokemon: response.results});
      if (response) {
        $('.progress-ppoke').hide();
      };
    });
  },
  componentDidMount: function(){
    $('.progress-rpoke').show();
    $('.player-pokemon').hide();
    var self = this;
    var url = this.state.url;
    var randomPokemon = getRandomPokemon();
    var randomUrl = url + randomPokemon.toString() + '/';
    $.ajax(randomUrl).then(function(response){
      self.setState({pickedPokemon: response});
      if (response) {
        $('.progress-rpoke').hide();
      }
    });
  },
  handleInput: function(e){
    e.preventDefault();
    var value = e.target.value;
    var stateArr = this.state.pokemon;
    this.setState({inputValue: value});
    var newStateArr = findMatches(value, stateArr);
    this.setState({filteredPokemon: newStateArr});
  },
  showPokemon: function(pokemon){
    var self = this;
    $('.poke-listing').hide();
    $('.progress-ppoke').show();
    $.ajax(pokemon.url).then(function(response){
      self.setState({playerPokemon: response});
      if(response){
        $('.progress-ppoke').hide();
        $('.player-pokemon').show();
        self.showStats()
      }
    });
  },
  attackPokemon: function(){
    var playerPokemon = this.state.playerPokemon;
    var opponent = this.state.pickedPokemon;
    var pPokemonTypes = playerPokemon.types.map(type => {
      return type.type.name;
    });
    var opponentStats = opponent.stats.map(stat => {
      console.log(stat.stat.name, stat.base_stat);
    })
    playerPokemon.stats.map(stat => {
      //console.log(stat.stat.name, stat.base_stat);
    });
    for(var i = 0; i < typeInfo.length; i++){
     if(pPokemonTypes.includes(typeInfo[i].type)){
       // console.log(
       //   "type", typeInfo[i].type,
       //   "dbl too", typeInfo[i].dblDmgTo,
       //   "hlf too", typeInfo[i].hlfDmgTo,
       //   "dbl from", typeInfo[i].dblDmgFrom,
       //   "hlf from", typeInfo[i].hlfDmgFrom
       //   );
     }
    }
  },
  render: function(){
    var pPokemon = this.state.playerPokemon;
    var rPokemon = this.state.pickedPokemon;
    var fPokemon = this.state.filteredPokemon;
    var fPokemonListing = fPokemon.map(pokemon => {
      return (
        <li onClick={() => {this.showPokemon(pokemon)}} className="collection-item" key={pokemon.name}>{pokemon.name}</li>
      )
    });
    return (
      <Template>
        <div className="row">
          <div className="col m4 offset-m4 center-align">
            <h3>Poke Battle</h3>
            <p>Select a pokemon below to fight against your random encountered pokemon</p>
          </div>
          <BattleScene pokemon={this.state.playerPokemon} opponent={this.state.pickedPokemon}/>
        </div>
        <div className="row">
          <div className="col m4 offset-m2 z-depth-2 input-style">
            <div className="player-pokemon">
              {pPokemon.name}
              <button onClick={this.attackPokemon} className="btn waves-effect waves-light blue darken-4">Attack</button>
            </div>
            <div className="progress progress-ppoke blue darken-4">
              <div className="indeterminate amber lighten-1"></div>
            </div>
            <input onChange={this.handleInput} className="poke-listing" type="text" placeholder="Pokemon Name" value={this.state.inputValue} />
              <ul className="collection poke-listing">
                {fPokemonListing}
              </ul>
          </div>
          <div className="col m4 offset-m1">
            <div className="progress progress-rpoke blue darken-4">
              <div className="indeterminate amber lighten-1"></div>
            </div>
            {rPokemon.name}
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  PokeBattleContainer: PokeBattleContainer
};
