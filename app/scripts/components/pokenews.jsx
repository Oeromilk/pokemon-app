// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

let articleUrl = 'https://newsapi.org/v1/articles?source=google-news&category=gaming&apiKey=0d61d302b1fe49c5b9d883305c5fe436';
let sourceUrl = 'https://newsapi.org/v1/sources?catergory=gaming&apiKey=0d61d302b1fe49c5b9d883305c5fe436';

$.ajax(articleUrl).then(response => {
  console.log(response);
});

var PokeNewsContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div>Test</div>
      </Template>
    )
  }
});

module.exports = {
  PokeNewsContainer: PokeNewsContainer
};
