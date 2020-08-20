/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso= 0;
  let marcaLiquidoCaro;
  let precioLiquidoCaro;
  let flagLiquido=0;
  let marcaSolidoLiviano;
  let pesoSolidoLiviano;
  let flagSolido=0;
  let seguir;


  do {
    marca=prompt("Ingrese una marca: ") ;
    
    while(!isNaN(marca)){
      
      marca= prompt("Marca invalida. Ingrese marca : ");
  }
  
  precio=parseFloat(prompt("Ingrese precio : "));
  
  while(precio<=0 || isNaN(precio)){
    
    precio=parseFloat(prompt("Ingrese un precio válido"));
  }
  
  peso=parseFloat(prompt("Ingrese peso : "));
  
  while(peso<=0 || isNaN(peso)) {
    
    peso=parseFloat(prompt("Peso invalido. Ingrese un peso válido :"))
  } 
  
  tipo=prompt("Ingrese tipo (Solido/liquido) : ");
  
  while(tipo !='solido' && tipo != 'liquido'){
    
    tipo= prompt("Tipo invalido. Ingrese tipo (solido/liquido) : ")
  }
  acumuladorPeso=acumuladorPeso + peso;  

  if ( tipo == "solido"  ) {
    
    if ( flagSolido== 0 || peso < pesoSolidoLiviano) {
      marcaSolidoLiviano= marca;
      flagSolido=1;
    }
  
  } else {
    if(flagLiquido == 0 || precio > precioLiquidoCaro){

      precioLiquidoCaro=precio;
      marcaLiquidoCaro=marca;
      flagLiquido= 1;

    }

  
  }
  
  
  
  seguir=prompt("Quiere ingresar otro producto ?  Ingrese s para continuar : ");
} while(seguir == 's');


console.log("A)Peso total compra : " + acumuladorPeso + " kg");

if(flagLiquido==0){ 
  console.log("No se registro ningun liquido");

} else{

  console.log("B) Marca liquido caro : " +marcaLiquidoCaro + " y su precio es $ "  + precioLiquidoCaro);

} if (flagSolido == 0){

  console.log("No se registro ningun solido.")

} else{

console.log("C)La marca del solido más liviano es : " + marcaSolidoLiviano );
}
}
