var React = require('react');

var SongDetail = function (props) {
  if (!props.song) {
    return <h4>No song selected</h4>
  }
  return (
    <div>
      <h4>{props.song['im:name'].label}</h4>
    </div>
  );
};

module.exports = SongDetail;