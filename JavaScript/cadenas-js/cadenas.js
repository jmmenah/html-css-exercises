var cadena=" ";
while(!(cadena.includes("cancelar"))){
	cadena = cadena + prompt('Escribe algo, si quieres acabar, escribe cancelar: ');
}
document.write(cadena);