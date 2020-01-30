function recargar(){
	var contenido= document.getElementById("contenido").value;
	var contraseña1= document.getElementById("contraseña1").value;
	var contraseña2= document.getElementById("contraseña2").value;


	if(contraseña2.length>0 && contraseña1.length>0 && contenido.length>0){
		if (contraseña2==contraseña1){
			alert("Las contraseñas coinciden");
		}
		else{
			alert("Las dos contraseñas no coinciden");
		}
	}
	else{
		alert("Debes rellenar los tres campos");
	}
}
function comprobar(){
	var contraseña1= document.getElementById("contraseña1").value;
	var contraseña2= document.getElementById("contraseña2").value;

	if (contraseña2==contraseña1){
			document.getElementById("cajita").innerHTML="Las contraseñas coinciden";
			document.getElementById("cajita").style.color="green";
	}
	else{
			document.getElementById("cajita").innerHTML="Las contraseñas no coinciden";
			document.getElementById("cajita").style.color="red";
	}
	}
