(function() {
  $(function() {
    var attributes, callback_object, flashvars, params;
    flashvars = {
      'playbackToken': 'GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=',
      'domain': 'localhost',
      'listener': 'callback_object'
    };
    params = {
      'allowScriptAccess': 'always'
    };
    attributes = {};
    swfobject.embedSWF('http://www.rdio.com/api/swf/', 'apiswf', 1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);
    $('#play').click(function() {
      return apiswf.rdio_play('p8216387');
    });
    $('#stop').click(function() {
      return apiswf.rdio_stop();
    });
    $('#previous').click(function() {
      return apiswf.rdio_previous();
    });
    $('#next').click(function() {
      return apiswf.rdio_next();
    });
    callback_object = {};
    callback_object.ready = ready(user)(function() {
      var user;
      if (user = null) {
        return console.log('nada');
      }
    });
    return callback_object.playingTrackChanged = playingTrackChanged(playingTrack)(function() {
      if (playingTrack === !null) {
        $('#artist').text(playingTrack['artist']);
        return $('#track').text(playingTrack['name']);
      }
    });
  });

}).call(this);
