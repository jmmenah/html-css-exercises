var num1 = parseInt(prompt("Escribe un numero: "));
var num2 = parseInt(prompt("Escribe otro numero: "));
var num3 = parseInt(prompt("Escribe otro numero: "));

if (num1 > num2 && num1 > num3 ){
	document.write(num1+" es el mayor.")
} 
else if (num2 > num1 && num2 > num3){
	document.write(num2+" es el mayor.")
}
else{
	document.write(num3+" es el mayor.")
}