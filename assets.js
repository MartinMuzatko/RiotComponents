<assets>
	<header layout="row" layout-align="space-between center">
		<h2>Assets</h2>
		<div class="panel-settings">
			<i if={ files.length > 4 } onclick={ removeAll } class="fa fa-minus fa-2x"></i>
			<i class="fa fa-gear fa-2x"></i>
		</div>
	</header>
	<div class="panel-content">
		<dropzone
			serversideupload="process.php"
		></dropzone>
		<div class="files" layout="row" layout-margin layout-wrap layout="row">
			<figure each="{ files }">
				<img src="{ file }" alt="{ name }">
				<figcaption>
					{ name }
					<a href="#" onclick={ parent.remove }>X</a>
				</figcaption>
			</figure>
		</div>
	</div>


	this.files = []

	this.on(
		'update',
		function()
		{
			this.files = this.tags.dropzone.files
		}.bind(this)
	)

	remove(e) {
		for (var file in this.files)
		{
			if (this.files[file].file == e.item.file)
			{
				var index = this.files.indexOf(this.files[file])
				this.files.splice(index, 1)
			}

		}
	}

	removeAll(e) {
		this.tags.dropzone.files = []
		this.files = []
	}

</assets>
