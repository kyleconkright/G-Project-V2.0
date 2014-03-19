$ ->

	$.ajax
		url: 'data/data.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.videos, ->
				$('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#videos')
				$.each this.videoSet.video, ->
					$('<li><div class="thumb" style="background-image: url(assets/img/' + this.type + '/' + this.url + ')"><a href="#"><i class="fa fa-play-circle"></i></a></div><p class="caption">' + this.caption + '</p></li>').append('').appendTo('#videos ul#' + this.rel)


	$.ajax
		url: 'data/data.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.photos, ->
				$('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#photos')
				$.each this.photoSet.photo, ->
					$('<li><div class="thumb" style="background-image: url(assets/img/' + this.type + '/' + this.url + ')"><a href="#"></a></div></li>').append('').appendTo('#photos ul#' + this.rel)


	$.ajax
		url: 'data/data.json'
		type: 'GET'
		dataType: 'json'
		success: (results) ->
			$.each results.response.resume, ->
				$('<ul id="' + this.id + '"><h3>' + this.title + '</h3></ul>').appendTo('#resume .holder')
				$.each this.entries.entry, ->
					$('<li><div>' + this.title + '</div><div>' + this.role + '</div><div>' + this.item + '</div></li>').appendTo('#resume .holder ul#' + this.rel)