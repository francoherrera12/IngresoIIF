/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contHombres=0;
	let contMujeres=0;
	let edadPromedioTotal;
	let acumuladorEdad=0;
	let mujerMaxTemperatura;
	let nombreMujer;
	let flag=0;

	for(i=0 ; i<5; i++) {
	
		nombre=prompt("Ingrese un nombre :");
		
		while(!isNaN(nombre)){
			
			nombre=prompt("Error. Ingrese un nombre válido :")
		}
		
		temperatura=parseFloat(prompt("Ingrese una temperatura (mayor a 0) :"));
		
		while(temperatura<1 || isNaN(temperatura)){
			
			temperatura=parseFloat(prompt("Error. Ingrese una temperatura mayor a al indicada :"));
		
		} sexo=prompt("Ingrese sexo : F/M");
		
		while(sexo!='F' && sexo!='M' && sexo!='f' && sexo!='m'){
		
			sexo=prompt("Error. Ingrese un sexo válido F/M :");
	
		}	edad=parseInt(prompt("Ingrese una edad (mayor a 0) : "));
		
		while(edad<1 || isNaN(edad)){
			
			edad=parseInt(prompt("Error. Ingrese una edad válida mayor a 0 :"))
			}
	
	if (sexo=='M' || sexo=='m'){
		contHombres++
	
	}else if(flag==0 || sexo=="F" || sexo=='f' && temperatura>mujerMaxTemperatura){
		contMujeres++
		mujerMaxTemperatura=temperatura;
		nombreMujer=nombre;
		flag=1;
	}
	
	acumuladorEdad+=edad
}
	
	edadPromedioTotal=acumuladorEdad/5;
	

	console.log("A) La cantidad de hombres es de " + contHombres + " y la cantidad de mujeres es : " + contMujeres);
	console.log("B) La edad promedio total es de " +edadPromedioTotal);
	
	if(flag==0){
		console.log("C)No se registraron mujeres");
	} else{
		console.log("C)La mujer con más temperatura es " + nombreMujer + " y su temperatura es " + mujerMaxTemperatura );

	}

		
		
	}

