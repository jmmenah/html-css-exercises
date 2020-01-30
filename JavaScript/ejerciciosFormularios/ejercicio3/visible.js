function comprobar(){
	var campo1 = document.getElementById("campo1").value;
	var campo2 = document.getElementById("campo2").value;
	if(campo1.length > 0 && campo2.length > 0){
		document.getElementById("boton").style.visibility ="visible";
	}
	else{
		document.getElementById("boton").style.visibility ="hidden";
	}
}