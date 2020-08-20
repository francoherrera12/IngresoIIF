/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{	
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let contadorBariloche= 0;
	let contadorCataratas= 0;
	let contadorSalta = 0;
	let lugarPreferido;
	let nombreMayorCantidad;
	let mayorCantidad;
	let flag=0;
	let contadorInvierno=0;
	let promedio=0;
	let acumCantInvierno=0;
	let seguir;
	
	do{
		nombre=prompt("Ingrese nombre :")
    while(!isNaN(nombre)){
        nombre=prompt("Ingrese un nombre válido")
	}
	lugar=prompt("Ingrese lugar (bariloche/cataratas/salta) : ")
	
	while(lugar !="bariloche" && lugar !="cataratas" && lugar!="salta"){
		lugar=prompt("Lugar invalido. Ingrese un lugar valido bariloche/cataratas/salta");
	} 
	
	temporada=prompt("Ingrese temporada (otoño/primavera/verano/invierno) : ")
	
	while(temporada !="otoño" && temporada!="primavera" && temporada!="verano" && temporada != "invierno"){
		lugar=prompt("temporada invalida. Ingrese una temporada valida otoño/primavera/verano/invierno ;");
	}
		cantidad=parseInt(prompt("Ingrese cantidad : "));
		
		while(cantidad <=0 || isNaN(cantidad)){
		
			cantidad=parseInt(prompt("Cantidad invalida. Ingrese cantidad : "))
		
		}switch (lugar){
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;

		}
		if (flag == 0 || cantidad >mayorCantidad){
			mayorCantidad=cantidad
			nombreMayorCantidad=nombre;
			flag=1;
		}
		if(temporada== "invierno"){
			acumCantInvierno = acumCantInvierno+ cantidad;
			contadorInvierno++

		}
	
		seguir = prompt("Quiere ingresar otro viaje? Ingrese s para continuar : ") ;

	}while(seguir == 's');

if (contadorBariloche>contadorCataratas && contadorBariloche > contadorSalta) {
	lugarPreferido="Bariloche";
}else if (contadorSalta>contadorBariloche && contadorSalta>contadorCataratas) {
	lugarPreferido="Cataratas";
} else { 
	lugarPreferido = "Salta";
}
if(contadorInvierno!=0 ) {
	promedio=acumCantInvierno/contadorInvierno;
}
	console.log("A) el lugar más elegido es  " + lugarPreferido )
	console.log("B) El nombre del titular que lleva más pasajeros es " + nombreMayorCantidad + " con una cantidad de " + mayorCantidad + " pasajeros")
	console.log("C) el promedio de personas que viaja en invierno es de " + promedio)
}
