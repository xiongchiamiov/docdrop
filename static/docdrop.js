window.onload = function() {
	/*
	var holder = document.getElementById('holder');
	holder.ondragover = function() { return false; };
	holder.ondragenter = function() { return false; };
	holder.ondrop = function(e) {
		e = e || window.event;
		
		// Read from e.files, as well as e.dataTransfer
		var files = (e.files || e.dataTransfer.files);
		
		var s = "";
		for (var i = 0; i < files.length; i++) {
			(function (i) {
				var reader = new FileReader();
				reader.onload = function (event) {
					holder.innerHTML = "<li><img src='" + event.target.result + "' /> " + (files[i].name) + "</li>" + holder.innerHTML;
				};
				reader.readAsDataURL(files[i]);
			})(i);
		}

		return false;
	};
	*/
	
	var fileselect = document.getElementById('docableFile');
	var filedrag = document.getElementById('holder');
	var submitbutton = document.getElementById('submit');
	
	//fileselect.addEventListener('change', FileSelectHandler, false);
	
	var xhr = new XMLHttpRequest();
	if (xhr.upload) {
		filedrag.addEventListener('dragover', FileDragHover, false);
		filedrag.addEventListener('dragleave', FileDragHover, false);
		filedrag.addEventListener('drop', FileSelectHandler, false);
	}
	
	function Output(msg) {
		var m = document.getElementById("messages");
		m.innerHTML = msg + m.innerHTML;
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
			ParseFile(f);
			UploadFile(f);
		}
	}
	
	function ParseFile(file) {
		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);
	}
	
	function UploadFile(file) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', document.getElementById('upload').action, false);
		xhr.setRequestHeader('X_FILENAME', file.name);
		xhr.send(file);
		document.body.innerHTML = xhr.responseText;
	}
}

