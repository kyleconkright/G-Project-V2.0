/*
Copyright (c) 2011 Rdio Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */

// a global variable that will hold a reference to the api swf once it has loaded
var apiswf = null;

$(document).ready(function() {

  // on page load use SWFObject to load the API swf into div#apiswf
  var flashvars = {
    'playbackToken': 'GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=', // from token.js
    'domain': 'localhost',                // from token.js
    // 'playbackToken': 'GBRTI1Iv_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbmpheS5ncHJvamVjdGdlYXIuY29t9eNa8pbblsrNYbMatiADUg==',
    // 'domain': 'jay.gprojectgear.com',
    // 'playbackToken': 'GBFTI1Jp_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbmt5bGVjb25rcmlnaHQuY29tBnm06OX9g2AX-TGaI5QJ1A==',
    // 'domain': 'kyleconkright.com',
    'listener': 'callback_object'    // the global name of the object that will receive callbacks from the SWF
    };
  var params = {
    'allowScriptAccess': 'always'
  };
  var attributes = {};
  swfobject.embedSWF('http://www.rdio.com/api/swf/', // the location of the Rdio Playback API SWF
      'apiswf', // the ID of the element that will be replaced with the SWF
      1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);


  // set up the controls

  $('#playlist').hide();

  $('#listen').click(function() {
      $('#playlist').show()
      apiswf.rdio_play('p8216387');  
  });

  $('#play').click(function() {
    console.log($('#playState').text())
    if($('#playState').text() == 0) {
      apiswf.rdio_play();
      $('#play').html('<i class="fa fa-pause"></i>')
    } else if($('#playState').text() == 5 || $('#playState').text() == 2) {
      apiswf.rdio_play('p8216387');
      $('#play').html('<i class="fa fa-pause"></i>')
    } else if($('#playState').text() == 1) {
      apiswf.rdio_pause();
      $('#play').html('<i class="fa fa-play"></i>')
    }
  });
  $('#previous').click(function() { apiswf.rdio_previous(); });
  $('#next').click(function() { apiswf.rdio_next(); });

  $('#close').click(function() {
      $('#playlist').slideUp();
      $('#play').html('<i class="fa fa-play"></i>') 
      apiswf.rdio_stop(); 
  });

});


// the global callback object
var callback_object = {};

callback_object.ready = function ready(user) {
  // Called once the API SWF has loaded and is ready to accept method calls.
  // find the embed/object element
  apiswf = $('#apiswf').get(0);


  if (user == null) {
    $('#nobody').show();
  } else if (user.isSubscriber) {
    $('#subscriber').show();
  } else if (user.isTrial) {
    $('#trial').show();
  } else if (user.isFree) {
    $('#remaining').text(user.freeRemaining);
    $('#free').show();
  } else {
    $('#nobody').show();
  }

  console.log('kyle');
}

callback_object.playStateChanged = function playStateChanged(playState) {
  // The playback state has changed.
  // The state can be: 0 - paused, 1 - playing, 2 - stopped, 3 - buffering or 4 - paused.
  $('#playState').text(playState);
}

callback_object.playingTrackChanged = function playingTrackChanged(playingTrack) {
  // The currently playing track has changed.
  // Track metadata is provided as playingTrack and the position within the playing source as sourcePosition.
  if (playingTrack != null) {
    $('#track').text(playingTrack['name']);
    $('#album').text(playingTrack['album']);
    $('#artist').text(playingTrack['artist'] + ' -');
    $('#art').attr('src', playingTrack['icon']);
  }
}





