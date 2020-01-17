var numero1 = parseInt(prompt("Introduce un numero: "));
var numero2 = parseInt(prompt("Introduce otro numero: "));
var suma=numero1+numero2;
if(numero1==100 || numero2==100 || suma==100){
	document.write("Es cien.");
}
else{
	document.write("No es cien.");
}