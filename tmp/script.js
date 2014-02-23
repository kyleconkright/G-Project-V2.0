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
          return $('<li></li>').append('<p><a href="' + data.results[0].previewUrl + '"><i class="fa fa-play-circle-o"></i></a></p><p><span class="artist">' + data.results[0].artistName + '</span> - <span class="song">"' + data.results[0].trackName + '"</span></p>').appendTo('#playlist ul');
        }
      });
    };
    for (_i = 0, _len = songs.length; _i < _len; _i++) {
      song = songs[_i];
      itunes(song);
    }
    $('button').on('click', function() {
      return $('#demo').trigger('play');
    });
    return $.ajax({
      url: 'data/series.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.seriesList, function() {
          $('<h2>' + this.title + '</h2><ul id="' + this.id + '"></ul>').appendTo('#gallery');
          console.log(this.title);
          return $.each(this.photoSet.photo, function() {
            $('<li style="background-image: url(assets/series/' + this.url + ');""></li>').appendTo('div#gallery ul#' + this.rel);
            return console.log(this.url);
          });
        });
      }
    });
  });

}).call(this);
