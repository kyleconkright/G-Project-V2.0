$ ->

	flashvars = 
	  	'playbackToken': 'GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=',
	  	'domain': 'localhost',
	  	'listener': 'callback_object'

	params =
		'allowScriptAccess': 'always'

	attributes = {}

	swfobject.embedSWF('http://www.rdio.com/api/swf/','apiswf',1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes)
  	

	$('#play').click -> apiswf.rdio_play('p8216387');
	$('#stop').click -> apiswf.rdio_stop()
	$('#previous').click -> apiswf.rdio_previous()
	$('#next').click -> apiswf.rdio_next()

	callback_object = {}

	callback_object.ready = ready(user) ->

		if user = null
			console.log 'nada'

	
	callback_object.playingTrackChanged = playingTrackChanged(playingTrack) ->
		if playingTrack is not null
	  		$('#artist').text(playingTrack['artist'])
	  		$('#track').text(playingTrack['name'])

  		
  	
	
	

	# $.ajax
	# 	url: 'data/series.json'
	# 	type: 'GET'
	# 	dataType: 'json'
	# 	success: (results) ->
	# 		$.each results.response.seriesList, ->
	# 			$('<div class="seriesInfo" id="gallery-title">
	# 					<h2>' + this.title + '</h2>
	# 					<span class="share">
	# 						<a href="http://twitter.com/share?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-twitter"></i></a>
	# 						<a href="http://www.facebook.com/sharer/sharer.php?s=100&p[summary]=Stream%20Eric%20Hutchinson%27s%20New%20Single%20%22TELL%20THE%20WORLD%22&p[url]=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '" target="_blank"><i class="fa fa-facebook"></i></a>
	# 						<a href="http://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fjay.gprojectgear.com%2F%23' + this.id + '&media=http%3A%2F%2Fkyleconkright.com/jay/assets/series/' + this.id + '/' + this.photoSet.photo[0].url + '&description=' + this.title + '" target="_blank"><i class="fa fa-pinterest"></i></a>
	# 					</span>
	# 				</div>
	# 				<ul class="seriesPhotos" id="' + this.id + '"></ul>')
	# 			.appendTo('#gallery')
	# 			$.each this.photoSet.photo, ->
	# 				$('<li class="photo" style="background-image: url(assets/series/' + this.rel + '/' + this.url + ');"><a href="assets/series/'+ this.rel + '/' + this.url + '" data-lightbox-gallery="' + this.rel + '" title="' + this.caption + '"></a></li>')
	# 				.appendTo('div#gallery ul#' + this.rel)
	# 	complete: ->
	# 		$('#gallery ul li a').nivoLightbox({
	# 			theme: 'default',
	# 			keyboardNav: true,
	# 			clickOverlayToClose: true
	# 			})

			

	# $.ajax
	# 	url: 'data/series.json'
	# 	type: 'GET'
	# 	dataType: 'json'
	# 	success: (results) ->
	# 		$.each results.response.masthead, ->
	# 			$('<li style="background-image: url(assets/series/' + this.id + '/' + this.mastPhoto + ');"><div class="mastcaption"><p>' + this.title + '</p></div></li>').appendTo('#masthead ul')
	# 	complete: ->
	# 		$("#masthead ul").responsiveSlides()

	

