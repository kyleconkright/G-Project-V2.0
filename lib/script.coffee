$ ->

	# $.ajax
	# 	url: 'data/series.json'
	# 	type: 'GET'
	# 	dataType: 'json'
	# 	success: (results) ->
	# 		$.each results.response.seriesList, ->
	# 			$('<div></div>')
	# 			.append('<h1>' + this.title + '</h1>')
	# 			.appendTo('#container')

	songs = ['276460687','504965130','329093515','203910723','284193124','331646673','319100093','721242118','613132533','402625405','27910495','152620650','483670359','321597782','279264164','309969982']
		
	itunes = () -> $.ajax
		url: "https://itunes.apple.com/lookup?id=#{song}&entity=song&callback=?"
		type: 'GET'
		dataType: 'json'
		success: (data) ->
			$('<li></li>')
			.append('<p><a href="' + data.results[0].previewUrl + '"><i class="fa fa-play-circle-o"></i></a></p><p><span class="artist">' + data.results[0].artistName + '</span> - <span class="song">"' + data.results[0].trackName + '"</span></p>')
			.appendTo('#playlist ul')

	itunes song for song in songs

	$('button').on('click', ->
		$('#demo').trigger('play')
		)	

	$.ajax
		url: 'data/series.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.seriesList, ->
				$('<h2>' + this.title + '</h2><ul id="' + this.id + '"></ul>')
				.appendTo('#gallery')
				console.log(this.title)	
				$.each this.photoSet.photo, ->
					$('<li style="background-image: url(assets/series/' + this.url + ');""></li>')
					# .append('<span style=""> ' + this.url + '</span>')
					.appendTo('div#gallery ul#' + this.rel)
					console.log(this.url)	

	

