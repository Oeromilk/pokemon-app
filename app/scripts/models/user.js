var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    'userName': '',
    'email': '',
    'passWord': '',
    'userAvatr': '',
    'numOfPokemon': 0
  },
  idAttribute: 'objectId',
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(){
    this.save()
  }
});

module.exports = {
  User: User
};
