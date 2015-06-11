<dropzone>
	<div class="dropzone" name="dropzone"></div>

	//opts.message = opts.message ? opts.message : '<i class="fa fa-plus-circle fa-4x"></i>'

	this.files = []

	Dropzone.autoDiscover = false;
	var dropzone = new Dropzone(
		this.dropzone, 
		{
			url: opts.serversideupload,
			dictDefaultMessage: '<i class="fa fa-plus-circle fa-4x"></i>'
		}
	)

	dropzone.on(
		'success',
		function(file, response)
		{
			setTimeout(function(){dropzone.removeAllFiles()}, 3000)
		}.bind(this)
	)

	dropzone.on(
		'success',
		function(file, response)
		{
			// PHP encoded JSON Object has to be parsed
			response = JSON.parse(response)

			// Add the newly added file to the files
			var file = response.file.name
			var fileinfo = 
			{
					"name" : file.replace(/\.[^/.]+$/, ''),
					"file" : file
			}
			this.files.push(fileinfo)
			riot.update()

		}.bind(this)
	)

</dropzone>
