var Backbone = require('backbone');

var Pokemon = Backbone.Model.extend({

});

var PokemonCollection = Backbone.Collection.extend({
  model: Pokemon
});

module.exports = {
  Pokemon: Pokemon,
  PokemonCollection: PokemonCollection
};
