var React = require('react');
var SongSelector = require('../components/SongSelector.jsx');
var SongDetail = require('../components/SongDetail');


var ItunesContainer = React.createClass({
  getInitialState: function(){
    return {
      songs: [],
      setTopSong: null
    };
  },

  componentDidMount: function () {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      var data = JSON.parse(request.responseText)['feed']['entry'];
      this.setState({
        songs: data,
        setTopSong: data[0]
      });
    }.bind(this);
    request.send(null);
  },

  render: function () {
    return (
      <div>
        <h3>iTunes Top 20</h3>
        <SongSelector 
        songs={this.state.songs}
        selectSong={this.setTopSong}
        />
        <SongDetail song={this.setState.topSong}/>
      </div>
    );
  },

  setTopSong: function (song) {
    this.setState({topSong: song})
  }

});

module.exports = ItunesContainer;
