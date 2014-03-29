(function() {
  $(function() {
    $.ajax({
      url: 'data/series.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.seriesList, function() {
          $('<div class="seriesInfo" id="gallery-title"> <h2>' + this.title + '</h2> <span class="share"> <a href="http://twitter.com/share?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-twitter"></i></a> <a href="http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-facebook"></i></a> <a href="http://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '&media=http%3A%2F%2Fkyleconkright.com/jay/assets/series/' + this.id + '/' + this.photoSet.photo[0].url + '&description=' + this.title + '" target="_blank"><i class="fa fa-pinterest"></i></a> </span> </div> <ul class="seriesPhotos" id="' + this.id + '"></ul>').appendTo('#gallery');
          return $.each(this.photoSet.photo, function() {
            return $('<li class="photo" style="background-image: url(assets/series/' + this.rel + '/' + this.url + ');"><a href="assets/series/' + this.rel + '/' + this.url + '" data-lightbox-gallery="' + this.rel + '" title="' + this.caption + '"></a></li>').appendTo('div#gallery ul#' + this.rel);
          });
        });
      },
      complete: function() {
        return $('#gallery ul li a').nivoLightbox({
          theme: 'default',
          keyboardNav: true,
          clickOverlayToClose: true
        });
      }
    });
    return $.ajax({
      url: 'data/series.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        return $.each(results.response.masthead, function() {
          return $('<li style="background-image: url(assets/series/' + this.id + '/' + this.mastPhoto + ');"><div class="mastcaption"><p>' + this.title + '</p></div></li>').appendTo('#masthead ul');
        });
      },
      complete: function() {
        return $("div#masthead ul").responsiveSlides();
      }
    });
  });

}).call(this);
