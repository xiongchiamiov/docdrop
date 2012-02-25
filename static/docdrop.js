window.onload = function() {
	var fileselect = document.getElementById('docableFile');
	var filedrag = document.getElementById('holder');
	
	var xhr = new XMLHttpRequest();
	if (xhr.upload) {
		filedrag.addEventListener('dragover', FileDragHover, false);
		filedrag.addEventListener('dragleave', FileDragHover, false);
		filedrag.addEventListener('drop', FileSelectHandler, false);
	}
	
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}
	
	function FileSelectHandler(e) {
		FileDragHover(e);
		
		var files = e.target.files || e.dataTransfer.files;
		for (var i=0, f; f=files[i]; i++) {
			UploadFile(f);
		}
	}
	
	function UploadFile(file) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', document.getElementById('upload').action, false);
		// This doesn't seem to actually work.
		xhr.setRequestHeader('X_FILENAME', file.name);
		xhr.send(file);
		document.body.innerHTML = xhr.responseText;
	}
}

