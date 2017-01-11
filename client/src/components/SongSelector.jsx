var React = require('react');

var SongSelector = React.createClass({
  getInitialState: function () {
    return {selectedIndex: undefined};
  },
  render: function () {
    var options = this.props.songs.map(function (song, index) {
      return (<option value={index} key={index}>{index + 1} {song['im:name'].label}</option>);
    });
    return (
      <select id="songs" value={this.state.selectedIndex} onChange={this.handleChange}>
          {options}
      </select>
    );
  },
  handleChange: function (event) {
    var newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    var song = this.props.songs[newIndex];
    song.position = newIndex + 1;
    this.props.selectSong(song);
  }
});

module.exports = SongSelector;