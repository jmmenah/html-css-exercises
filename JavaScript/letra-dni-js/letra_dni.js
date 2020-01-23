var dni=parseInt(prompt("Escribe tu DNI sin letra: "));
while(dni<11111111 || dni>99999999){
	dni=parseInt(prompt("Escribe tu DNI sin letra: "));
}
var resto= dni % 23;
var letra="TRWAGMYFPDXBNJZSQVHLCKE";
document.write("La letra es " + letra.charAt(resto));