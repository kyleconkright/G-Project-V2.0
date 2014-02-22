(function() {
  $(function() {
    var itunes, song, songs, _i, _len;
    songs = ['276460687', '504965130', '329093515', '203910723', '284193124', '331646673', '319100093', '721242118', '613132533', '402625405', '27910495', '152620650', '483670359', '321597782', '279264164', '309969982'];
    itunes = function() {
      return $.ajax({
        url: "https://itunes.apple.com/lookup?id=" + song + "&entity=song&callback=?",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          return $('<li></li>').append('<p><i class="fa fa-play-circle-o"></i></p><p><span class="artist">' + data.results[0].artistName + '</span> - <span class="song">"' + data.results[0].trackName + '"</span></p>').appendTo('#playlist ul');
        }
      });
    };
    for (_i = 0, _len = songs.length; _i < _len; _i++) {
      song = songs[_i];
      itunes(song);
    }
    return $.ajax({
      url: 'data/series.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.seriesList, function() {
          return console.log(this.title);
        });
      }
    });
  });

}).call(this);
