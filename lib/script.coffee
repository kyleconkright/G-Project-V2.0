$ ->


	$.ajax
		url: 'data/series.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.seriesList, ->
				$('<div class="seriesInfo" id="gallery-title">
						<h2>' + this.title + '</h2>
						<span class="share">
							<a href="http://twitter.com/share?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-twitter"></i></a>
							<a href="http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-facebook"></i></a>
							<a href="http://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '&media=http%3A%2F%2Fkyleconkright.com/jay/assets/series/' + this.id + '/' + this.photoSet.photo[0].url + '&description=' + this.title + '" target="_blank"><i class="fa fa-pinterest"></i></a>
						</span>
					</div>
					<ul class="seriesPhotos" id="' + this.id + '"></ul>')
				.appendTo('#gallery')
				$.each this.photoSet.photo, ->
					$('<li class="photo" style="background-image: url(assets/series/' + this.rel + '/' + this.url + ');"><a href="assets/series/'+ this.rel + '/' + this.url + '" data-lightbox-gallery="' + this.rel + '" title="' + this.caption + '"></a></li>')
					.appendTo('div#gallery ul#' + this.rel)
		complete: ->
			$('#gallery ul li a').nivoLightbox({
				theme: 'default',
				keyboardNav: true,
				clickOverlayToClose: true
				})

			

	$.ajax
		url: 'data/series.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.masthead, ->
				$('<li style="background-image: url(assets/series/' + this.id + '/' + this.mastPhoto + ');"><div class="mastcaption"><p>' + this.title + '</p></div></li>').appendTo('#masthead ul')
		complete: ->
			$("div#masthead ul").responsiveSlides()

	

