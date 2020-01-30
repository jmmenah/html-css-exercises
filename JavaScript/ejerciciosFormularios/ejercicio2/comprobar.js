function comprobar() {
	var contenido=document.getElementById("contenido").value;
	if(contenido.length>9){
		contenido=contenido.substring(0,9);
		document.getElementById("contenido").value=contenido;
	}
}