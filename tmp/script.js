(function() {
  $(function() {
    $.ajax({
      url: 'data/data.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.videos, function() {
          $('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#videos');
          return $.each(this.videoSet.video, function() {
            return $('<li><div class="thumb" style="background-image: url(assets/img/' + this.type + '/' + this.url + ')"><a href="#"><i class="fa fa-play-circle"></i></a></div><p class="caption">' + this.caption + '</p></li>').append('').appendTo('#videos ul#' + this.rel);
          });
        });
      }
    });
    $.ajax({
      url: 'data/data.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.photos, function() {
          $('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#photos');
          return $.each(this.photoSet.photo, function() {
            return $('<li><div class="thumb" style="background-image: url(assets/img/' + this.type + '/' + this.url + ')"><a href="#"></a></div></li>').append('').appendTo('#photos ul#' + this.rel);
          });
        });
      }
    });
    return $.ajax({
      url: 'data/data.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.resume, function() {
          $('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#resume .holder');
          return $.each(this.entries.entry, function() {
            return $('<li><div>' + this.title + '</div><div>' + this.role + '</div><div>' + this.item + '</div></li>').appendTo('#resume .holder ul#' + this.rel);
          });
        });
      }
    });
  });

}).call(this);
