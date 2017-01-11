var React = require('react');

var SongDetail = function (props) {
  if (!props.song) {
    return <h4>No song selected</h4>
  }
  return (
    <div>
      <h5>Chart position: {props.song.position}</h5>
      <h4>Title: {props.song['im:name'].label}</h4>
      <h4>Artist: {props.song['im:artist'].label}</h4>
      <img src={props.song['im:image'][2].label}></img>
    </div>
  );
};

module.exports = SongDetail;