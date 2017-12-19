var React = require('react');

var BattleSceneContainer = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <div>Stuff</div>
    )
  }
});

module.exports = {
  BattleSceneContainer: BattleSceneContainer
};
